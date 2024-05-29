import React from "react";
import Sidebar from "./components/sidebar";
import Table from "./components/table";

const Mainpage = () => {
  return (
    <>
      <section className="flex">
        <Sidebar />
        <Table />
      </section>
    </>
  );
};

export default Mainpage;
