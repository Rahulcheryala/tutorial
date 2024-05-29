import React from "react";
import Sidebar from "./components/sidebar";
import Table from "./components/table";
import Navbar from "./components/navbar";

const Mainpage = () => {
  return (
    <>
      <Navbar />
      <section className="flex h-screen w-full pt-16">
        <Sidebar />
        <Table />
      </section>
    </>
  );
};

export default Mainpage;
