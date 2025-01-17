import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "../components/Lobby";
import Room from "../components/Room";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
