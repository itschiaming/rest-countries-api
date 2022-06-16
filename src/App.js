import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import Layout from "./pages/Layout/Layout";
import React from "react";
import ThemeProvider from "./DarkContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Country />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
