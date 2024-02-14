import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="for-form-page">
      <div className="form-container">
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button onClick={signIn} className="button">
          Sign In
        </button>

        <button onClick={signInWithGoogle} className="googleButton">
          Sign In With Google
        </button>

        <button onClick={logout} className="button">
          Logout
        </button>
      </div>
    </div>
  );
};
