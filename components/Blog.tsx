import React from "react";
import Image from "next/image";
import ai from "@/public/ai.jpg";
import { blogpost } from "@/app/data";
import admin from "@/public/admin.svg";
import comment from "@/public/comment.svg";
import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <section className="px-4 md:px-8 lg:px-16 py-16 dark:bg-white text-[#172426]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
            Useful articles & <br /> blog posts
          </h3>

          <Link href="/blog">
            <button className="bg-[#84a17d] cursor-pointer text-[15px] w-[10rem] rounded-lg py-3 px-2 text-white">
              See All Posts
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative w-full lg:w-1/2 text-white">
            <Image
              src={ai}
              alt="ai image"
              className="object-cover rounded-lg w-full"
            />

            <button className="bg-[#84a17d] text-white absolute top-4 right-4 rounded-lg text-xs py-2 px-3">
              May 17 2024
            </button>

            <div className="bg-[#153C3C] rounded-br-lg rounded-tl-lg p-4 lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-[20rem]">
              <div className="flex text-xs gap-2 items-center mb-2">
                <Image src={admin} alt="admin icon" />
                <p>Admin</p>
                <Image src={comment} alt="comment icon" />
                <p>0 Comments</p>
              </div>

              <Link href="/blog" className="underline">
                How You Can Find A Design
                <br />
                Job You Will Truly
              </Link>
            </div>
          </div>

          <div className="grid gap-4 w-full">
            {blogpost.slice(0, 3).map((blog, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row overflow-hidden rounded-lg"
              >
                <Image
                  src={blog.image}
                  alt="blog image"
                  width={100}
                  className="w-full sm:w-[100px] rounded-t-lg sm:rounded-l-lg sm:rounded-t-none object-cover"
                />

                <div className="bg-[#F4F5F6] p-3 flex-1 text-[#172426] rounded-b-lg sm:rounded-r-lg sm:rounded-b-none">
                  <div className="flex text-xs gap-2 items-center mb-2">
                    <Image src={admin} alt="admin icon" />
                    <p>Admin</p>
                    <Image src={comment} alt="comment icon" />
                    <p>0 Comments</p>
                  </div>

                  <Link
                    href={`/blog/${blog.id}`}
                    className="underline font-medium hover:text-[#84a17d] transition"
                  >
                    {blog.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
