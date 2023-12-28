const TOKEN_STORAGE_KEY = 'token';

function readStorage() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY) || '[]') 
  }
  return ''
}

function writeStorage(token: string) {
  if (typeof window !== "undefined") {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token)); 
  }
}

function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
}

export {
  readStorage,
  writeStorage,
  removeToken
};