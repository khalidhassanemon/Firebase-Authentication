import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './Firebase/Firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider=new FacebookAuthProvider();
  const githubProvider=new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('Error', error);
      })
  }
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(() => {
        setUser({});
      })
  }
const handleFacebookSignIn=()=>{
signInWithPopup(auth,facebookProvider)
.then(result=>{
  const user=result.user;
  setUser(user);
})
}
  const handleGithubSignIn=()=>{
   signInWithPopup(auth,githubProvider)
   .then(result=>{
    const user=result.user;
    setUser(user);
    console.log(user);
   })
   .catch(error=>{
    console.log('Error',error);
   })
  }
  return (
    <div className="App">
      {user.uid ?
        <button onClick={handleSignout}>Sign Out</button>
        :
        <>
           <button onClick={handleGoogleSignIn}>Google Sign In</button>
           <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
           <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      }
      {user.uid &&
        <div>
          <h3>User name: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt=""></img>
        </div>}
    </div>
  );
}

export default App;
