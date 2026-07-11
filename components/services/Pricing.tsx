import React from "react";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/app/data";

export default function Pricing() {
  return (
    <div className="bg-white text-center">
      <h3 className="text-[28px] pt-2 font-semibold">
        Your best pricing <br /> offer awaits
      </h3>
      <section className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-6  py-20 ">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </section>
    </div>
  );
}