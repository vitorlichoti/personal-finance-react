import axios from "axios";
import { readStorage } from "./handleLocalStorage";

const defaultURL = "http://localhost:8080";
const baseUrl = process.env.NEXT_PUBL || defaultURL;

axios.defaults.headers.common['user_token'] = readStorage();

function setToken(instance: {headers: {common: {token: string}}}, token: string) {
  instance.headers.common["token"] = token
}

export { setToken, baseUrl }