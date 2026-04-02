import React from "react";
import Details from "@/components/services/details/Details";
import Sidebar from "@/components/services/details/Sidebar";
import Contact from "@/components/services/details/Contact";
import PageHeader from "@/app/PageHeader";

// 1. Correct the function declaration (remove the "=" and "=>")
export default async function Servicedetails({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. Await the params promise to get the actual data
  const { id } = await params;
  
  // You can now use 'id' to fetch data for that specific service
  console.log("Loading service with ID:", id);

  return (
    <div className="">
      <PageHeader title="Services" currentPage="Service Details" />
      <div className="flex mt-20 px-16">
        {/* Pass the ID to Details if it needs to fetch specific content */}
        <Details serviceId={id} /> 
        <div>
          <Sidebar />
          <Contact />
        </div>
      </div>
    </div>
  );
}
