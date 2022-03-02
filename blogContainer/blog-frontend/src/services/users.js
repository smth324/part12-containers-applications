import axios from 'axios'
import { backendUrl } from '../config/util'
const userUrl = `${backendUrl}/api/users`



const getAll = async () => {
  const response = await axios.get(userUrl)
  return response.data
}

const functions = { getAll }

export default functions