import axios from "axios";

export default axios.create({
  baseURL: 'https://quiz-app-e026e-default-rtdb.europe-west1.firebasedatabase.app/'
})