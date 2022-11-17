import axios from "axios";
import { Movies } from "../interfaces/service.interface";

class Service {
  constructor() {}

  async getMovies(): Promise<Movies> {
    const res = await axios.get(window.location.origin + "/movies.json");
    return res.data;
  }
}

export default Service;
