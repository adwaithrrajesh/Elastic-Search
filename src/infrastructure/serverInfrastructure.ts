import express,{Application} from "express";
import morgan from "morgan"
import cors from "cors";
import config from './common/index'
import { logger } from "./logger";

export class ServerInfrastructure{

    private app: Application

    constructor(){
        this.app = express();
    }


    private configServer(): void {
        this.app.use(morgan('dev'))
        this.app.use(cors({ origin: "*", credentials: true })); 
        this.app.use(express.json())
    }

    private configRoutes():void {
        // this.app.use('/',)
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