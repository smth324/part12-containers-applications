import axios from 'axios'
import { backendUrl } from '../config/util'
const loginUrl = `${backendUrl}/api/login`

const login = async credentials => {
  const response = await axios.post(loginUrl,credentials)
  return response.data
}

export default login