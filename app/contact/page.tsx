import ContactForm from "@/components/contact/Contact";
import Detail from "@/components/contact/Detail";
import hero_image from "@/public/ig1.jpg";
import React from "react";
import Image from "next/image";
import PageHeader from "../PageHeader";
export default function page() {
  return (
    <div className="">
      <PageHeader currentPage="Contact" title="Contact Us" />
      <div className="flex px-16 py-10 gap-30   justify-between">
        <ContactForm />
        <Detail />
      </div>
      <div className="relative w-full h-[500px]">
        <Image src={hero_image} alt="image" fill className="object-cover " />
      </div>{" "}
    </div>
  );
}
