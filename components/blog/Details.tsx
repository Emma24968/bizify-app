"use client";
import { blogpost } from "@/app/data";
import { Bookmark, Calendar, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import blogimage from "../../public/ig4.jpg";
import image from "../../public/ig5.jpg";
import React from "react";

export default function Details() {
  const { blogid } = useParams();
  const blog = blogpost.find(
    (item) => item.id.toLowerCase() === String(blogid).toLowerCase(),
  );

  if (!blog) {
    return <p>post not found</p>;
  }
  return (
    <div>
      <Image src={blog.image} alt="" />
      <div className="flex">
        <div className="flex">
          <Calendar /> <p>12 June 2024</p>
        </div>
        <div className="">
          <Bookmark />
          <p>Consulting</p>
        </div>
        <div className="">
          <MessageSquare />
          <p>2 Comments</p>
        </div>
      </div>
      <h3>{blog.title}</h3>
      <p>
        When an unknown printer took ar galley offer type year anddey scrambled
        make type specimen book bethas survived not only five when annery
        unknown printer.eed a little help from our Although we offer the
        one-stop convenience.
      </p>
      <p>
        Use both direct conversations and indirect observations to get
        visibility into employees’ challenges and concerns. Use every
        opportunity to make clear to employees that you support and care them.
        To facilitate regular conversations between managers and employees,
        provide managers with guidance on how best to broach sensitive subjects
        arising from the COVID-19 pandemic, including alternative work models,
        job security and prospects, impact on staffing
      </p>
      <div className="flex">
        <Image src={blogimage} width={300} alt="" />
        <Image src={image} width={300} alt="" />
      </div>
      <p className="bg-gradient-to-r from-[#b5cbb0] to-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore nis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni qui aliquip a commodo consequat. Duis aute Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore nis dolore magna aliqua.</p>
      <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure  some pleasure. To take a trivial example, which of us ever undertakes laborious physical.</p>
      <p>Use both direct conversations and indirect observations to get visibility into employees’ challenges and concerns. Use every opportunity to make clear to employees that you support and care them. To facilitate regular conversations between managers and employees, provide managers with guidance on how best to broach sensitive subjects arising from the COVID-19 pandemic</p>

    </div>
  );
}
