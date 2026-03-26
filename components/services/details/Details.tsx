import React from "react";
import Image from "next/image";
import image from "@/public/service-image.jpg";

function Details() {
  return (
    <div className="w-[90%]">
      <Image src={image} className="rounded-[10px]" alt="service-image" />
      <h3 className="text-[40px] my-3">Service Overview</h3>
      <p  className="text-[18px] mb-3">
        Lorem ipsum is simply free text used by copytyping refreshing. Neque
        porro est qui dolorem ipsum quia var quaed inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis
        enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
        Ipsum is simply dummy text of the been printing and typesetting
        industry. Lorem Ipsum has been the ndustry standard dummy text ever
        since the 1500s, when an unknown printer took.
      </p>
      <p  className="text-[18px] mb-3" >
        When an unknown printer took a galley of type and scrambled it to make a
        type book. It leap survive not only five centurie, but also the leap
        into electronic typesetting, unchange Lorem ipsum dolor sit amet consec
        tetur adipis icing elit.
      </p>
      <h3  className="text-[30px] my-3">Service Center</h3>
      <p  className="text-[18px] mb-3">
        With over a decade of experience, we’ve established ourselves as one of
        pioneering agencies in the region. Our small, flexible, agile and
        design-led structures and processes allow us highly responsive and
        innovative. We’re of passionate leaders, strategists, managers,
        developers, animators and designers who work together under one
        umbrella. We are a digitally-led, service creative agency. We combine
        strategy, marketing, design.
      </p>
      {/* <Image /> */}
      <p  className="text-[18px] mb-3">When an unknown printer took a galley of type and scrambled it to make a type book. It has leap survive not only five centurie, but also the leap into electronic typesetting essentiall dolor unchange Lorem ipsum dolor sit amet consec tetur adipis icing elit.</p>
      <h3  className="text-[30px] my-3">Services All Details</h3>
      <p  className="text-[18px] mb-3">Cast obscure badger jeep quail congenialy when changed as cat jeepers affectionate thus facilisi goodness this far like ipsum dolor sit amet, consectetur adipisicing elits sed eiusmod tem incididunt et laboret dolore magna aliqua enim ad minim. Eveniet in vulputate esse molestie consequat, illum dolore eu feugiat nulla facilisis at seds eros sed.</p>
      
    </div>
  );
}

export default Details;
