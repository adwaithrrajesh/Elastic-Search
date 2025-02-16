import { Request,Response,NextFunction } from "express";
import elasticClient from "../../../infrastructure/elastic-search";
import config from '../../../infrastructure/common'
import { logger } from "../../../infrastructure/logger";
import * as fs from "fs";
import * as path from "path";

export class searchController{

    constructor(){}


    public async ping(req:Request,res:Response,next:NextFunction):Promise<void>{
        res.send("Server is online")
    }

    public async indexData(req:Request,res:Response,next:NextFunction):Promise<void>{
        try {
            const exists = await elasticClient.indices.exists({ index: config.INDEX_NAME });

            if(!exists){
                await elasticClient.indices.create({
                    index:config.INDEX_NAME,
                    mappings:{
                        properties:{
                            title:{type:"text"},
                            description: { type: "text" }
                        }
                    }
                })
                logger.info("Index created ✅")
            }

            const filePath = path.join(__dirname,'../../../../search-data.json')
            const jsonData = JSON.parse(fs.readFileSync(filePath,"utf-8"))

            console.log(jsonData)

            for (const item of jsonData) {
                await elasticClient.index({
                  index: config.INDEX_NAME,
                  document: item
                });
              }

            await elasticClient.indices.refresh({ index: config.INDEX_NAME });
            
            res.json({ message: "Data indexed successfully" });
        
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error"})
        }
    }        

    
    
    public async search(req:Request,res:Response,next:NextFunction):Promise<any>{
        const {query} = req.body
        if(!query) return res.json({message:"Query is required"})
        
        const result = await elasticClient.search({
                index: config.INDEX_NAME,
                query: {
                  multi_match: {
                    query: query,
                    fields: ["title", "description"]
                  }
                }
        });

        const hits = result.hits.hits.map((hit: any) => hit._source);
        res.json(hits);
        
    }
}
