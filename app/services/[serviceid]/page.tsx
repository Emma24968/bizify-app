import React from "react";
import Details from "@/components/services/details/Details";
import Sidebar from "@/components/services/details/Sidebar";
import Contact from "@/components/services/details/Contact";
import PageHeader from "@/app/PageHeader";

export default function Servicedetails({
  params,
}: {
  params: { serviceid: string };
}) {
  const serviceid = params.serviceid;
  return (
    <div className="">
      <PageHeader title="Services" currentPage="Service Details" />
      <div className="flex mt-20 px-4 sm:px-6 lg:px-16 ">
        <Details />
        <div className="hidden lg:block">
          <Sidebar />
          <Contact />
        </div>
      </div>
    </div>
  );
}
