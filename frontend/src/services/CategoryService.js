import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL

class CategoryService{

  retrieveAllCategories() {
    return axios.get(`${apiUrl}/categorias`)
  }
}

export default new CategoryService()