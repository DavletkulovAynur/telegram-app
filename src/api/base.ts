import { CONSTANTS } from "@/constants";
import axios from "axios";

//БАЗОВЫЙ URL
const base = axios.create({
  baseURL: CONSTANTS.prodBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default base;
