import React from "react";
import { blogpost } from "@/app/data";
import Image from "next/image";

export default function Post() {
  return (
    <div>
      <p>Recent blogposts</p>
      {blogpost.map((post, index) => {
        return (
          <div key={index} className="flex">
            <Image src={post.image} alt={post.title} width={80} />
            <div className="">
              <p>{post.title}</p>
              <p className="font-semibold">23 June 2024</p>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
