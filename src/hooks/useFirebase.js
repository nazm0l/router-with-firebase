import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  //signIn with Google

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Handle SignOut

  const handleSignOut = () =>{
      signOut(auth)
      .then(()=>{

      })
  }

  useEffect(() => {
      onAuthStateChanged(auth, user => {
          setUser(user);
      })
  }, []);

  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
