import axios from "axios"

const API_URL = "http://localhost:8080"

class InvestingService{

  retrieveAllInvesting() {
    return axios.get(`${API_URL}/investimentos`)
  }

  saveIvesting(investing) {
    return axios.post(`${API_URL}/investimentos`, investing)
  }

  deleteInvesting(id) {
    return axios.delete(`${API_URL}/investimentos/${id}`)
  }
}

export default new InvestingService()