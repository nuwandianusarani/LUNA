import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mars from "../src/Pages/Mars";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import Earth from "./Pages/Earth";
import About from "./Pages/About";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY =
  "pk_test_Y2xvc2luZy1nZWNrby05OC5jbGVyay5hY2NvdW50cy5kZXYk";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <Navbar />
        <Video />

        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/mars" element={<Mars />}></Route>
          <Route path="/earth" element={<Earth />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
