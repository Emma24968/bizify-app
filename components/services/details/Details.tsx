"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { serviceCards, Servicedetails } from "@/app/data";
import { Check } from "lucide-react";
import image from "@/public/service-image.jpg";
import webdev from "@/public/web-dev.jpg";
import market from "@/public/market.jpg";

export default function Details() {
  const { serviceid } = useParams();

  const service = serviceCards.find(
    (item) => item.id.toLowerCase() === String(serviceid).toLowerCase(),
  );

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className="w-[90%] mb-30">
      <Image src={image} className="rounded-[10px]" alt="service-image" />
      <h3 className="text-[40px] my-3">{service.title}</h3>
      <p className="text-[18px] mb-3">
        Lorem ipsum is simply free text used by copytyping refreshing. Neque
        porro est qui dolorem ipsum quia var quaed inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
        enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
        Ipsum is simply dummy text of the been printing and typesetting
        industry. Lorem Ipsum has been the ndustry standard dummy text ever
        since the 1500s, when an unknown printer took.
      </p>
      <p className="text-[18px] mb-3">
        When an unknown printer took a galley of type and scrambled it to make a
        type book. It leap survive not only five centurie, but also the leap
        into electronic typesetting, unchange Lorem ipsum dolor sit amet consec
        tetur adipis icing elit.
      </p>
      <h3 className="text-[25px] my-3">{service.title} Center</h3>
      <p className="text-[18px] mb-3">
        With over a decade of experience, we’ve established ourselves as one of
        pioneering agencies in the region. Our small, flexible, agile and
        design-led structures and processes allow us highly responsive and
        innovative. We’re of passionate leaders, strategists, managers,
        developers, animators and designers who work together under one
        umbrella. We are a digitally-led, service creative agency. We combine
        strategy, marketing, design.
      </p>
      <div className=" flex gap-7 py-8">
        <Image
          src={webdev}
          width={320}
          className="rounded-2xl"
          alt="dev image"
        />
        <Image
          src={market}
          width={320}
          className="rounded-2xl"
          alt="dev image"
        />
      </div>
      <p className="text-[18px] mb-3">
        When an unknown printer took a galley of type and scrambled it to make a
        type book. It has leap survive not only five centurie, but also the leap
        into electronic typesetting essentiall dolor unchange Lorem ipsum dolor
        sit amet consec tetur adipis icing elit.
      </p>
      <h3 className="text-[25px] my-3">{service.title} Details</h3>
      
      
          <div >
            <p className="text-[18px] mb-3">
              When an unknown printer took a galley of type and scrambled it to
              make a type book. It has leap survive not only five centurie, but
              also the leap into electronic typesetting essentiall dolor
              unchange Lorem ipsum dolor sit amet consec tetur adipis icing
              elit.
            </p>
          </div>
       
      {Servicedetails.map((details, index) => {
        return (
          <div key={index} className="flex pl-4 gap-3 items-center">
            <Check />
            <p>{details}</p>
          </div>
        );
      })}
    </div>
  );
}
