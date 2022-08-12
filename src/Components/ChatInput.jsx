import React from "react";
import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import app from "../firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatInput = ({ user, setUser }) => {
  const auth = getAuth(app);
  const userId = user.uid;
  const email = user.email;
  const database = getDatabase(app);
  const [message, setMessage] = useState();
  const [allMessages, setAllMessages] = useState([]);
  const navigate = useNavigate();

  const messageRef = ref(database, "messages");
  const sendMessage = () => {
    const newMessageRef = push(messageRef);
    set(newMessageRef, { message, email });
    setMessage("");
  };
  const getMessages = () => {
    onValue(
      messageRef,
      (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const data = childSnapShot.val();
          console.log(data);
        });
      },
      {
        onlyOnce: true,
      }
    );
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("loggedout");
        setUser();
        navigate("/login");
      })
      .catch((error) => console.log(error.message));
  };
  useEffect(() => {
    getMessages();
  }, [message]);
  return (
    <>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? sendMessage() : "")}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <br />
      <div>
        <button onClick={logOut}>Sign Out</button>
      </div>
    </>
  );
};

export default ChatInput;
