"use client";

import { faqs } from "@/app/data";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className=" py-16 flex justify-center px-4">
      <div className="w-full max-w-2xl">
        <h3 className="text-3xl font-bold mb-3">
          Frequently Asked Questions
        </h3>

        <p className="text-gray-500 mb-8">
          Morem ipsum dolor sit amet, consectetur adipiscing elit.
          Florai psum dolor sit amet, consectetur amet consecteture.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, id) => (
            <div
              key={id}
              className="rounded-lg overflow-hidden border"
            >
              <button
                onClick={() =>
                  setOpen(open === id ? null : id)
                }
                className="w-full bg-[#153C3C] text-white p-4 flex items-center justify-between cursor-pointer"
              >
                <span className="text-left font-medium">
                  {faq.question}
                </span>

                {open === id ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {open === id && (
                <div className="bg-[#F4F5F6] p-4">
                  <p className="text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}