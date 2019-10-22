import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getContacts = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addContact = newContact => {
  const request = axios.post(baseUrl, newContact)
  return request.then(response => response.data)
}

const updateContact = (id, newNumber) => {
  const request = axios.put(`${baseUrl}/${id}`, newNumber)
  return request.then(response => response.data)
}

const removeContact = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default {
  getContacts,
  addContact,
  updateContact,
  removeContact
}
