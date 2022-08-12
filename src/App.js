import "./App.css";
import React, { useState } from "react";
import ChatInput from "./Components/ChatInput";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import app from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UserRedirect from "./helpers/UserRedirect";

function App() {
  const [user, setUser] = useState();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={{ pathname: "/login" }} />}
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute user={user}>
              <ChatInput user={user} setUser={setUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UserRedirect user={user}>
              <Login />
            </UserRedirect>
          }
        />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
