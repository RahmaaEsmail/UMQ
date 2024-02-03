import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

export default function RootLayout() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
