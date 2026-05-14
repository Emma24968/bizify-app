"use client";
import { blogpost } from "@/app/data";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquare,
  X,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import blogimage from "../../public/ig4.jpg";
import image from "../../public/ig5.jpg";
import User1 from "../../public/mizan.jpg";
import User2 from "../../public/christy.jpg";
import quote from "../../public/blogquote.svg";
import reply from "../../public/reply.svg";
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
      <div className="bg-gradient-to-r from-[#e3ece1] to-white flex">
        <p className="">
          <Image src={quote} alt="" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt labore nis dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris ni qui aliquip
          a commodo consequat. Duis aute Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt labore nis dolore
          magna aliqua.
        </p>
      </div>
      <p>
        Nor again is there anyone who loves or pursues or desires to obtain pain
        of itself, because it is pain, but because occasionally circumstances
        occur in which toil and pain can procure some pleasure. To take a
        trivial example, which of us ever undertakes laborious physical.
      </p>
      <p>
        Use both direct conversations and indirect observations to get
        visibility into employees’ challenges and concerns. Use every
        opportunity to make clear to employees that you support and care them.
        To facilitate regular conversations between managers and employees,
        provide managers with guidance on how best to broach sensitive subjects
        arising from the COVID-19 pandemic
      </p>
      <div className="flex p-6 bg-[#F4F5F6]">
        <p>Post Tags:</p>
        <div className="flex gap-4">
          <button className="bg-white">Data</button>
          <button className="bg-white">Finance</button>
          <button className="bg-white">Business</button>
        </div>
        <div className="flex">
          <Facebook />
          <X />
          <Instagram />
          <Linkedin />
        </div>
      </div>
      <div className="flex justify-between">
        <p className="flex gap-3">
          <ArrowLeft />
          Prev Post
        </p>
        <p className="flex gap-3">
          Next Post
          <ArrowRight />
        </p>
      </div>
      <hr />
      <h3>2 Comments</h3>
      <div className="flex items-start">
        <Image
          src={User1}
          width={50}
          className="rounded object-contain"
          alt=""
        />
        <div className="">
        <div>
          <p>
            Applications are like the lifeblood of mobile phones and tablets
            today. The true potential of your mobile phone is harnessed by
            applications can provide utility. Apps come under.
          </p>
          <p>Megan Oustin</p>
          <p>Jan 2 2023</p>
          <p className="flex">
            <Image src={reply} alt="" />
            Reply
          </p>
                  <Image src={User2} width={50} className="rounded" alt=""/>
        <div>
            <p>Applications are like the lifeblood of mobile phones and tablets today. The true potential of your mobile phone is harnessed by applications can provide utility. Apps come under.</p>
            <p>Megan Oustin</p>
            <p>Jan 2 2023</p>
            <p className="flex"><Image src={reply} alt="" />Reply</p>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
}
