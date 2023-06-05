// import keys from '../keys'
import db, { provider, analytics, auth } from './firebase'
import env from "@beam-australia/react-env";

const config = { REACT_APP_OPENAI_API_KEY: '', REACT_APP_OPENAI_URL: '', db, provider, analytics, auth, REACT_APP_RECAPTCHA_SITE_KEY: '', REACT_APP_RECAPTCHA_SECRET_KEY: '' }
// if (process.env.REACT_APP_ENV === 'PROD') {
config.REACT_APP_OPENAI_API_KEY = env("OPENAI_API_KEY")
config.REACT_APP_OPENAI_URL = env("OPENAI_URL")
config.REACT_APP_RECAPTCHA_SITE_KEY = env("RECAPTCHA_SITE_KEY")
config.REACT_APP_RECAPTCHA_SECRET_KEY = env("RECAPTCHA_SECRET_KEY")
// } 
// else {
//     config.REACT_APP_OPENAI_API_KEY = keys.REACT_APP_OPENAI_API_KEY
//     config.REACT_APP_OPENAI_URL = keys.REACT_APP_OPENAI_URL
//     config.REACT_APP_RECAPTCHA_SITE_KEY = keys.REACT_APP_RECAPTCHA_SITE_KEY
//     config.REACT_APP_RECAPTCHA_SECRET_KEY = keys.REACT_APP_RECAPTCHA_SECRET_KEY
// }

export default config