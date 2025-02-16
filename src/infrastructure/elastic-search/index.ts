import { Client } from "@elastic/elasticsearch";
import config from "../common/index";

const elasticClient = new Client({
    node: config.ELASTIC_URL
});

export default elasticClient;