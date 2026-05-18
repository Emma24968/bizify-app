import React from "react";
import { blogpost } from "@/app/data";
import Image from "next/image";

export default function Post() {
  return (
    <div className="bg-[#F4F5F6] rounded-2xl p-8 ">
      <p>Recent blogposts</p>
      {blogpost.slice(0,3).map((post, index) => {
        return (
          <div key={index} className="flex gap-4 pb-3">
            <Image src={post.image} className="rounded" alt={post.title} width={120} />
            <div className="grid gap-1">
              <p className="font-semibold text-[15px]">{post.title}</p>
              <p className="font-light">23 June 2024</p>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
