import Check from "@/public/check.svg";
import Image from "next/image";

type Plan = {
  name: string;
  price: string;
  tag: string;
  highlighted: boolean;
};

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={` relative w-[80%] rounded-2xl p-8 transition duration-300 ${
        plan.highlighted
          ? "bg-gradient-to-b from-[#E8F0E8] to-[#C9D9C7] shadow-xl lg:scale-105"
          : "bg-[#F4F5F6]"
      }`}
    >
      <div className="flex  gap-2 items-start    mb-6">
        <div>
          <h3 className="text-[15px]  font-semibold">{plan.name}</h3>
          <p className="text-[12px] sm:text-sm text-gray-500">{plan.tag}</p>
        </div>

        <div
          className={`rounded-md px-4 py-2 text-center ${
            plan.highlighted ? "bg-[#84A17D] text-white" : "bg-white text-black"
          }`}
        >
          <p className="text-[12px] md:text-lg font-semibold">{plan.price}</p>
          <p className="text-[10px] md:text-xs">Per Month</p>
        </div>
      </div>

      <hr className="mb-6 border-gray-300" />

      <div className="space-y-4 mb-8">
        {[
          "Advanced Analytics",
          "5000 User Activities",
          "Unlimited Projects",
          "Priority Support",
          "Customizable Branding",
          "All API Access",
        ].map((item, index) => (
          <div key={index} className="flex gap-1">
            <Image src={Check} alt="Check icon" width={18} height={18} />

            <p className="text-[12px] sm:text-sm ">{item}</p>
          </div>
        ))}
      </div>

      <button
        className={`w-full rounded-lg py-3 font-medium transition ${
          plan.highlighted
            ? "bg-[#84A17D] text-white hover:bg-[#6f8d68]"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        Get The Plan Now
      </button>
    </div>
  );
}
