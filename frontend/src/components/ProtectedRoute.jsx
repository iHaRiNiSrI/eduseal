import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {

  const [user, setUser] = useState(undefined);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []);

  // show spinner while checking auth
  if (user === undefined) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;