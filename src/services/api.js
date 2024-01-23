import axios from 'axios'

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

console.log(apiBaseUrl)

export const getAllCustomers = async ({ name, email, phone }) => {
  try {
    const response = await axios.get(apiBaseUrl, {
      params: { name, email, phone },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const createNewCustomer = async (customerData) => {
  try {
    const response = await axios.post(apiBaseUrl, customerData)
    return response.data
  } catch (error) {
    console.error('Erro ao criar novo cliente:', error)
    throw error
  }
}

export const deleteCustomerById = async (customerId) => {
  try {
    const response = await axios.delete(`${apiBaseUrl}/${customerId}`)
    return response.data
  } catch (error) {
    console.error('Erro ao excluir cliente:', error)
    throw error
  }
}

export const updateCustomerById = async (customerId, customerData) => {
  try {
    const response = await axios.put(`${apiBaseUrl}/${customerId}`, customerData)
    return response.data
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error)
    throw error
  }
}

export const getOptimizedRoute = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/calculate-route`)
      return response.data
    } catch (error) {
      console.error('Erro ao calcular rota otimizada:', error)
      throw error
    }
}
