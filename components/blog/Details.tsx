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
import ReplyForm from "./Contact";
import CTA from "../CTA";

export default function Details() {
  const { blogid } = useParams();
  const blog = blogpost.find(
    (item) => item.id.toLowerCase() === String(blogid).toLowerCase(),
  );

  if (!blog) {
    return <p className="font-light">post not found</p>;
  }
  return (
    <div>
      <div className="px-16 space-y-8">
        <Image src={blog.image} alt="" />
        <div className="flex">
          <div className="flex">
            <Calendar /> <p className="font-light">12 June 2024</p>
          </div>
          <div className="">
            <Bookmark />
            <p className="font-light">Consulting</p>
          </div>
          <div className="">
            <MessageSquare />
            <p className="font-light">2 Comments</p>
          </div>
        </div>
        <h3>{blog.title}</h3>
        <p className="font-light">
          When an unknown printer took ar galley offer type year anddey
          scrambled make type specimen book bethas survived not only five when
          annery unknown printer.eed a little help from our Although we offer
          the one-stop convenience.
        </p>
        <p className="font-light">
          Use both direct conversations and indirect observations to get
          visibility into employees’ challenges and concerns. Use every
          opportunity to make clear to employees that you support and care them.
          To facilitate regular conversations between managers and employees,
          provide managers with guidance on how best to broach sensitive
          subjects arising from the COVID-19 pandemic, including alternative
          work models, job security and prospects, impact on staffing
        </p>
        <div className="flex">
          <Image src={blogimage} width={300} alt="" />
          <Image src={image} width={300} alt="" />
        </div>
        <div className="bg-gradient-to-r from-[#e3ece1] h-[10rem] rounded-2xl p-8 to-white flex">
          <p className="font-bold flex items-start gap-4">
            <Image src={quote} alt="" />
            “Enim ad minim veniam, quis nostrud exercitation ullamco is laboris
            nisi ut aliquip ex ea commodo consequat a reprehen derit in
            consequat duis aute voluptate velit esse.”
          </p>
        </div>
        <p className="font-light">
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure some pleasure.
          To take a trivial example, which of us ever undertakes laborious
          physical.
        </p>
        <p className="font-light">
          Use both direct conversations and indirect observations to get
          visibility into employees’ challenges and concerns. Use every
          opportunity to make clear to employees that you support and care them.
          To facilitate regular conversations between managers and employees,
          provide managers with guidance on how best to broach sensitive
          subjects arising from the COVID-19 pandemic
        </p>
        <div className="flex p-6 bg-[#F4F5F6] justify-between">
          <p className="font-bold">Post Tags:</p>
          <div className="flex gap-4">
            <button className="bg-white font-light">Data</button>
            <button className="bg-white font-light">Finance</button>
            <button className="bg-white font-light">Business</button>
          </div>
          <div className="flex gap-3">
            <Facebook />
            <X />
            <Instagram />
            <Linkedin />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-light flex gap-3">
            <ArrowLeft />
            Prev Post
          </p>
          <p className="font-light flex gap-3">
            Next Post
            <ArrowRight />
          </p>
        </div>
        <hr />
        <h3>2 Comments</h3>
        <div className="flex items-start gap-4">
          <Image
            src={User1}
            width={50}
            className="rounded object-contain "
            alt=""
          />
          <div className="gap-">
            <div className="">
              <p className="font-light">
                Applications are like the lifeblood of mobile phones and tablets
                today. The true potential of your mobile phone is harnessed by
                applications can provide utility. Apps come under.
              </p>
              <p className="font-light">Megan Oustin</p>
              <p className="font-light">Jan 2 2023</p>
              <p className="font-light flex gap-3">
                <Image src={reply} alt="" />
                Reply
              </p>
              <div className="flex items-start gap-4 pt- pl-10">
                <Image src={User2} width={70} className="pt-8 rounded" alt="" />
                <div>
                  <p className="font-light">
                    Applications are like the lifeblood of mobile phones and
                    tablets today. The true potential of your mobile phone is
                    harnessed by applications can provide utility. Apps come
                    under.
                  </p>
                  <p className="font-light">Megan Oustin</p>
                  <p className="font-light">Jan 2 2023</p>
                  <p className="font-light flex gap-3">
                    <Image src={reply} alt="" />
                    Reply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReplyForm />
      </div>
      <CTA />
    </div>
  );
}
