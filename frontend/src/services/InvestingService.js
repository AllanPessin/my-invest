import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL

class InvestingService{

  retrieveAllInvesting() {
    return axios.get(`${apiUrl}/investimentos`)
  }

  saveIvesting(investing) {
    return axios.post(`${apiUrl}/investimentos`, investing)
  }

  deleteInvesting(id) {
    return axios.delete(`${apiUrl}/investimentos/${id}`)
  }
}

export default new InvestingService()