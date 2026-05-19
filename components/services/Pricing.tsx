import React from "react";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/app/data";

export default function  Pricing() {
  return (
    <div className="bg-white">
      <h3 className="text-4xl font-semibold text-center pt-4">
        Your best pricing <br /> offer awaits
      </h3>
      <section className="grid md:grid-cols-3 gap-6 px-10 py-20 ">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </section>
    </div>
  );
}
