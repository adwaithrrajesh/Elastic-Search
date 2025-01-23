import express,{Application} from "express";
import morgan from "morgan"
import cors from "cors";
import config from './common/index'
import { logger } from "./logger";
import { SearchRoute } from "../presentation/http/routes/search.route";

export class ServerInfrastructure{

    private app: Application
    private searchRoutes: SearchRoute

    constructor(){
        this.app = express();
        this.searchRoutes = new SearchRoute()
    }


    private configServer(): void {
        this.app.use(morgan('dev'))
        this.app.use(cors({ origin: "*", credentials: true })); 
        this.app.use(express.json())
    }

    private configRoutes():void {
        this.app.use('/api',this.searchRoutes.accessSearchRoutes())
    }

    private startListening():void {
        this.app.listen(config.PORT,()=>{
            console.log('\n')
            console.log('▓█████  ██▓    ▄▄▄        ██████ ▄▄▄█████▓ ██▓ ▄████▄       ██████ ▓█████ ▄▄▄       ██▀███   ▄████▄   ██░ ██ ')
            console.log('▓█   ▀ ▓██▒   ▒████▄    ▒██    ▒ ▓  ██▒ ▓▒▓██▒▒██▀ ▀█     ▒██    ▒ ▓█   ▀▒████▄    ▓██ ▒ ██▒▒██▀ ▀█  ▓██░ ██▒')
            console.log('▒███   ▒██░   ▒██  ▀█▄  ░ ▓██▄   ▒ ▓██░ ▒░▒██▒▒▓█    ▄    ░ ▓██▄   ▒███  ▒██  ▀█▄  ▓██ ░▄█ ▒▒▓█    ▄ ▒██▀▀██░')
            console.log('▒▓█  ▄ ▒██░   ░██▄▄▄▄██   ▒   ██▒░ ▓██▓ ░ ░██░▒▓▓▄ ▄██▒     ▒   ██▒▒▓█  ▄░██▄▄▄▄██ ▒██▀▀█▄  ▒▓▓▄ ▄██▒░▓█ ░██ ')
            console.log('░▒████▒░██████▒▓█   ▓██▒▒██████▒▒  ▒██▒ ░ ░██░▒ ▓███▀ ░   ▒██████▒▒░▒████▒▓█   ▓██▒░██▓ ▒██▒▒ ▓███▀ ░░▓█▒░██▓')
            console.log('░░ ▒░ ░░ ▒░▓  ░▒▒   ▓▒█░▒ ▒▓▒ ▒ ░  ▒ ░░   ░▓  ░ ░▒ ▒  ░   ▒ ▒▓▒ ▒ ░░░ ▒░ ░▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ░▒ ▒  ░ ▒ ░░▒░▒')
            console.log(' ░ ░  ░░ ░ ▒  ░ ▒   ▒▒ ░░ ░▒  ░ ░    ░     ▒ ░  ░  ▒      ░ ░▒  ░ ░ ░ ░  ░ ▒   ▒▒ ░  ░▒ ░ ▒░  ░  ▒    ▒ ░▒░ ░')
            console.log('   ░     ░ ░    ░   ▒   ░  ░  ░    ░       ▒ ░░           ░  ░  ░     ░    ░   ▒     ░░   ░ ░         ░  ░░ ░')
            console.log('   ░  ░    ░  ░     ░  ░      ░            ░  ░ ░               ░     ░  ░     ░  ░   ░     ░ ░       ░  ░  ░')
            console.log('                                              ░                                             ░                ')
            console.log('\n')
            logger.info(`Server started successfully @PORT : ${config.PORT}`);
        })
    }

    public startServer():void {
        this.configServer()
        this.configRoutes()
        this.startListening()
    }

}