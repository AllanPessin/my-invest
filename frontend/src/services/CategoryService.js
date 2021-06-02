import axios from "axios"

const apiUrl = process.env.API_URL

class CategoryService{

  retrieveAllCategories() {
    return axios.get(`${apiUrl}/categorias`)
  }
}

export default new CategoryService()