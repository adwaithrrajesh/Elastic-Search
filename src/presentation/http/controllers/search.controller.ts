import { Request,Response,NextFunction } from "express";

export class searchController{

    constructor(){}

    public async search(req:Request,res:Response,next:NextFunction):Promise<void>{
        console.log('reached here')
    }

}