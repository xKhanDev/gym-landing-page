import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  About,
  Footer,
  Hero,
  Navbar,
  Refrences,
  RegisterForm,
  Services,
  WhyUs,
} from "./constant";
import Blog from "./blogs/Blog";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Refrences />
      <WhyUs />
      <RegisterForm />
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
