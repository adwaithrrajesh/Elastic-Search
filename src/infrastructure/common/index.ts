import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT : process.env.PORT,
    ELASTIC_URL:process.env.ELASTIC_SEARCH_URL,
    INDEX_NAME:process.env.INDEX_NAME || 'search_data'
}