import { Check } from "lucide-react";
type Plan = {
  name: string;
  price: string;
  tag: string;
  highlighted: boolean;
};

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`rounded-2xl p-8 transition relative
      ${
        plan.highlighted
          ? "bg-gradient-to-b from-[#e8f0e8] to-[#c9d9c7] shadow-xl scale-105"
          : "bg-[#f4f5f6]"
      }`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold text-lg">{plan.name}</h3>
          <p className="text-sm text-gray-500">{plan.tag}</p>
        </div>

        <div
          className={`px-4 py-2 rounded-md text-sm font-semibold
          ${
            plan.highlighted
              ? "bg-[#84A17D] text-white"
              : "bg-white text-black"
          }`}
        >
          {plan.price}
          <div className="text-xs font-normal">Per Month</div>
        </div>
      </div>

      <hr className="mb-6" />

      {/* FEATURES */}
      <div className="space-y-3 mb-8">
        {[
          "Advanced Analytics",
          "5000 User Activities",
          "Unlimited Projects",
          "Priority Support",
          "Customizable Branding",
          "All API Access",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <Check className="text-[#84A17D]" size={18} />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button
        className={`w-full py-3 rounded-md font-medium transition
        ${
          plan.highlighted
            ? "bg-[#84A17D] text-white"
            : "bg-[#153C3C] text-white"
        }`}
      >
        Get The Pay Now
      </button>
    </div>
  );
}