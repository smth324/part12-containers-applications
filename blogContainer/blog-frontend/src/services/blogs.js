import axios from 'axios'
import { backendUrl } from '../config/util'
const blogUrl = `${backendUrl}/api/blogs`

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(blogUrl)
  return response.data
}

const create = async (newBlog) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(blogUrl, newBlog, config)
  return response.data
}

const update = async (id, updatedBlog) => {
  const response = await axios.put(`${blogUrl}/${id}`, updatedBlog)
  return response.data
}

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${blogUrl}/${id}`,config)
  return response.data
}

const addComment = async (id,comment) => {
  const response = await axios.post(`${blogUrl}/${id}/comments`,comment)
  return response.data
}

const functions = { getAll, create, setToken, update, remove, addComment }
export default functions