import React from 'react';
//import {Button} from "@chakra-ui/button";
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;