import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <h1 style={{ color: "white", textAlign: "center", padding: "50px" }}>
        Navbar Works!
      </h1>
    </div>
  );
}