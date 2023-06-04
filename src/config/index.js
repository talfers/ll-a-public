import keys from '../keys'
import db, { provider, analytics, auth } from '../keys/firebase'

const config = { REACT_APP_OPENAI_API_KEY: '', REACT_APP_OPENAI_URL: '', db, provider, analytics, auth }
if (process.env.REACT_APP_ENV === 'PROD') {
    config.REACT_APP_OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY
    config.REACT_APP_OPENAI_URL = process.env.REACT_APP_OPENAI_URL
} 
else {
    config.REACT_APP_OPENAI_API_KEY = keys.REACT_APP_OPENAI_API_KEY
    config.REACT_APP_OPENAI_URL = keys.REACT_APP_OPENAI_URL
}

export default config