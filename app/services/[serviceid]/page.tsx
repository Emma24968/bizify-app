import React from "react";
import Details from "@/components/services/details/Details";
import Sidebar from "@/components/services/details/Sidebar";
import Contact from "@/components/services/details/Contact";
import PageHeader from "@/app/PageHeader";

export default function page() {
  return (
    <div className="">
      <PageHeader title="Services" currentPage="Service Details" />
      <div className="flex mt-20 px-16">
        <Details />
        <div>
          <Sidebar />
          <Contact />
        </div>
      </div>
    </div>
  );
}
