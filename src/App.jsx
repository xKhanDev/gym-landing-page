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
import Blog from "./pages/blogs/Blog";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/not-found/NotFound";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
