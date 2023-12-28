import {auth} from "../../../config/firebaseConfig";
import {signInWithEmailAndPassword} from "firebase/auth";

import { writeStorage } from "../../../utils/handleLocalStorage";

function handleError(error: string) {
  switch (error) {
      case 'Firebase: Error (auth/wrong-password).':
          alert('Senha inválida');
          break;
      case 'Firebase: Error (auth/user-not-found).':
          alert('Email não encontrado');
          break;
  }
}

async function postLogin(email:string, password:string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, navigate: (path: string) => void) {
  
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setLoading(true)
          // Signed in
          const user = userCredential.user;
          // ...
          user.getIdToken().then((token) => writeStorage(token))
          // redirect to homepage
          setLoading(false)
          navigate('/home')
        })
        .catch((error) => {
          setLoading(false)
          handleError(error.message)
        });
}


export function   handleLogin(username: string, password: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, navigate: (path: string) => void) {
    setLoading(true);

    postLogin(username, password, setLoading, navigate)

}
