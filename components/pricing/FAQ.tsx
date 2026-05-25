import { faqs } from '@/app/data'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

export default function FAQ() {
  return (
    <div>
        <div className=""></div>
        <div className="w-[30%]">
            <h3>Frequently asked asked question</h3>
            <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet,consectetur amet consecteture.</p>
            <div className="">
              {faqs.map((faq,index)=>{
                return(
                  <div className='group h-20 b'>
                    <p>{faq.question}</p>
                  </div>
                )
              })}
              {/* <div className="group relative">
<div className="flex gap-3"></div>
              <h3 className='bg-green-600 h-[50px] '>Essential types of business insurance?</h3> <Plus />
              <p className='bg-gray-500 '>If you ask our clients what it’s like working 36, they’ll  about how much we care about their success.</p><Minus />
              </div> */}
            </div>
        </div>
    </div>
  )
"use client";

import { faqs } from "@/app/data";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className=" py-16 flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <h3 className="text-3xl font-bold mb-3">Frequently Asked Questions</h3>

        <p className="text-gray-500 mb-8">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Florai psum
          dolor sit amet, consectetur amet consecteture.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, id) => (
            <div key={id} className="rounded-lg overflow-hidden border">
              <button
                onClick={() => setOpen(open === id ? null : id)}
                className="w-full bg-[#153C3C] text-white p-4 flex items-center justify-between cursor-pointer"
              >
                <span className="text-left font-medium">{faq.question}</span>

                {open === id ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              {open === id && (
                <div className="bg-[#F4F5F6] p-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
