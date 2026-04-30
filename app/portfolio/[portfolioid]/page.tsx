import { portfolios } from "@/app/data";
import Image from "next/image";
import webdev from "@/public/web-dev.jpg";
import market from "@/public/market.jpg";
import ProjectInfoCard from "@/components/portfolio/ProjectInfoCard";
import CTA from "@/components/CTA";

type Props = {
  params: Promise<{
    portfolioid: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { portfolioid } = await params;

  const project = portfolios.find((item) => item.id === portfolioid);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-16 pt-10">
        <div className="flex justify-center">
          <Image
            src={project.image}
            width={1200}
            height={600}
            className="rounded-[20px] w-full h-auto object-cover"
            alt="service-image"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-16 py-16 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h3 className="text-[40px] font-bold mb-6">{project.title}</h3>

          <p className="text-[16px] leading-relaxed mb-6 text-gray-700">
            User experience design includes elements of interaction design,
            visual design, information architecture, user research, and other
            disciplines, and is concerned with all facts of overall experience
            delivered use. Following is a short analysis of its constituent
            parts.
          </p>

          <p className="text-[16px] leading-relaxed mb-6 text-gray-700">
            Test your ideas with minimal risk. Test even the most complex ideas,
            involving emerging technologies – like blockchain – with the help of
            our expert team. We’ll help with prediction roadmapping and
            post-PoC Development analysis.
          </p>

          <div className="flex flex-wrap md:flex-nowrap gap-7 py-8">
            <Image
              src={webdev}
              width={350}
              height={250}
              className="rounded-2xl w-full md:w-1/2 object-cover"
              alt="dev image"
            />
            <Image
              src={market}
              width={350}
              height={250}
              className="rounded-2xl w-full md:w-1/2 object-cover"
              alt="marketing image"
            />
          </div>

          <p className="text-[16px] leading-relaxed mb-8 text-gray-700">
            When an unknown printer took a galley of type and scrambled it to
            make a type book. It has survived not only five centuries, but
            also the leap into electronic typesetting essentially unchanged.
          </p>

          <h3 className="text-[28px] font-semibold my-4">Challenge & Solution</h3>
          <p className="text-[16px] leading-relaxed mb-8 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <h3 className="text-[28px] font-semibold my-4">Final Result</h3>
          <p className="text-[16px] leading-relaxed mb-8 text-gray-700">
            For almost 50 years, our team has been progressively building for
            a better future by leveraging international expertise and intelligence.
            In that time, we have delivered some of the most prestigious
            buildings and infrastructure projects.
          </p>
        </div>

        <div className="lg:w-[350px]">
          <div className="sticky top-24">
            <ProjectInfoCard />
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}