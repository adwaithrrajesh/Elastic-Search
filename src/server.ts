import { ServerInfrastructure } from "./infrastructure/serverInfrastructure";

class Server{
    private server : ServerInfrastructure;
    constructor(){
        this.server = new ServerInfrastructure();
    }

    public async startServer():Promise<void>{
        await this.server.startServer();
    }

}

const serverInstance = new Server()
serverInstance.startServer()

