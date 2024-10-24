// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";

export default function App() {
  return (
    <>
      <Router>
                 <Navbar />

        
        <Routes>
                 <Route path="/aboutus" element={<Aboutus />} />
         <Route path="/home" element={<News pageSize={9} category={"general"} />} />
          <Route path="/" element={<News pageSize={9} category={"general"} />} />
          <Route path="/business" element={<News pageSize={9} category={"business"} />} />
          <Route path="/entertainment" element={<News pageSize={9} category={"entertainment"} />} />
          <Route path="/general" element={<News pageSize={9} category={"general"} />} />
          <Route path="/health" element={<News pageSize={9} category={"health"} />} />
          <Route path="/science" element={<News pageSize={9} category={"science"} />} />
          <Route path="/sports" element={<News pageSize={9} category={"sports"} />} />
          <Route path="/technology" element={<News pageSize={9} category={"technology"} />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
