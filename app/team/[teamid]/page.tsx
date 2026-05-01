import React from "react";
import { Teams } from "@/app/data";
import { Mail, Phone } from "lucide-react";
import Social from "@/components/team/Social";
import ContactForm from "@/components/team/Contact";
import Image from "next/image";
import CTA from "@/components/CTA";
import SkillSection from "@/components/team/Experience";

type Props = {
  params: Promise<{ teamid: string }>;
};

export default async function TeamDetails({ params }: Props) {
  const { teamid } = await params;

  const board = Teams.find((item) => item.id === teamid);

  if (!board) {
    return <div className="px-16 py-10">Not found</div>;
  }

  const email = `${board.name.toLowerCase().replace(/\s+/g, "")}@gmail.com`;

  return (
    <div className="bg-[#f7f7f7] py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image */}
          <div className="w-full lg:w-[40%]">
            <Image
              src={board.image}
              alt={board.name}
              width={526}
              height={560}
              className="rounded-xl object-cover w-full h-[500px] bg-gray-200"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[#1f2a2a]">
                {board.name}
              </h2>
              <p className="text-[#6c8b6f] text-sm mt-1">{board.position}</p>
            </div>

            <p className="text-gray-500 leading-relaxed text-sm max-w-xl">
              Habitant metus lobortis quam pharetra maximus parturient fringilla
              taciti. Quisque pulvinar facilisi tempor condimentum dui pharetra
              ad fringilla cursus. Consectetur nisl lacus incepto vestibulum mi
              fermentum cubilia.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6c8b6f]" />
                <p className="text-gray-600">216-564-3678</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#6c8b6f]" />
                <p className="text-gray-600">{email}</p>
              </div>
            </div>

            <Social />
<SkillSection />
            <ContactForm />
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
