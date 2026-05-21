"use client";
import { faqs } from "@/app/data";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function FAQ() {
  const [open, isOpen] = useState(null);
  return (
    <div>
      <div className=""></div>
      <div className="w-[30%]">
        <h3>Frequently asked asked question</h3>
        <p>
          Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum
          dolor sit amet,consectetur amet consecteture.
        </p>
        <div className="">
          {faqs.map((faq, id) => {
            return (
              <div key={id} className="space-y-3  ">
                <p
                  className="bg-[#153C3C]"
                  onClick={() => isOpen(open === id ? null : id)}
                >
                  {faq.question}
                </p>
                {open === id && <p className="bg-[#F4F5F6]">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
