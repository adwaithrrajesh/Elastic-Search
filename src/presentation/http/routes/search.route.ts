import { Router } from "express";
import { searchController } from "../controllers/search.controller";

export class SearchRoute{

    private router : Router
    private controller : searchController

    constructor(){
        this.router = Router();
        this.controller = new searchController();
        this.initiateRoutes()
    }

    private initiateRoutes():void{
        this.router.get('/ping',this.controller.ping.bind(this.controller))
        this.router.post('/indexData',this.controller.indexData.bind(this.controller))
        this.router.post('/search',this.controller.search.bind(this.controller));
    }

    public accessSearchRoutes():Router{
        return this.router
    }
}