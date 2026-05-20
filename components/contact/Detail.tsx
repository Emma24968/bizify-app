import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Detail() {
  return (
    <div>
      <h3>Make something awesome.</h3>
      <p>
        Each demo built with Teba will look different. You can customize almost
        anything in the appearance of your website with only a few clicks. Each
        demo built with Teba will look different.
      </p>
      <div className="flex">
        <div className="">
          <div className="bg-[#172426] p-3 w-12 rounded">
            <MapPin color="white" />
          </div>
          <p>Address</p>
          <p>
            KDA Shiromoni I/A, Shiromoni, <br /> Khulna, Bangladesh
          </p>
        </div>
        <div className="">
          <div className="bg-[#172426] p-3 w-12 rounded">
            <Mail color="white" />
          </div>
          <p>Contact</p>
          <Link href="/">bizify@example.com</Link>
          <p>518-234-4567</p>
        </div>
      </div>
      <hr />
      <p>Office Hours: Mon – Sat: 8:00 AM – 10:00 PM</p>
    </div>
  );
}
