import FAQ from "@/components/pricing/FAQ";
import React from "react";
import Contact from "./Contact";
import { Mail, Phone } from "lucide-react";
import CTA from "@/components/CTA";
import PageHeader from "../PageHeader";

export default function page() {
  return (
    <div className="">
      <PageHeader title="Home" currentPage="FAQS" />
      <div className="px-16 py-16 justify-items-center">
        <FAQ />
        <div className=" flex gap-[15px] ">
          <Contact
            icon={<Phone />}
            header="Phone Number"
            details="Good website tells a story that will make users fully immerse themselves operating"
            info="+234 812 345 6789"
          />
          <Contact
            icon={<Mail />}
            header="Send a Message"
            details="Good website tells a story that will make users fully immerse themselves operating"
            info="bizify@example.com"
          />
        </div>
      </div>
      <CTA />
    </div>
  );
}
