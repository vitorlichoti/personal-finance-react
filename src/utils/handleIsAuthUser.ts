import { readStorage } from "./handleLocalStorage";

function handleIsAuthUser(navigate: (path: string) => void) {
  const token = readStorage()  
  
  return token.length > 0 ? navigate('') : navigate('/')
}

export default handleIsAuthUser;