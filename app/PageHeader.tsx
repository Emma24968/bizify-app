"use client";
import { ChevronRight } from "lucide-react";

type PageHeaderProps = {
  title: string;
  currentPage: string;
};

export default function PageHeader({ title, currentPage }: PageHeaderProps) {
  return (
    <section className="bg-[#153C3C] w-full py-[150px] h-[500px] text-center">
      <h1 className="px-16 text-[70px] text-white font-bold">
        {title}
      </h1>

      <h3 className="px-16 flex justify-center items-center gap-2">
        <span className="text-[#fffa]">Home</span>
        <ChevronRight className="text-white" />
        <span className="text-white">{currentPage}</span>
      </h3>
    </section>
  );
}