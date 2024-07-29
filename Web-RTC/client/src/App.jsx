import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRouter from "./Router/AppRouter";
import SocketProvider from "./context/SocketProvider";

function App() {
  return (
    <>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </>
  );
}

export default App;
