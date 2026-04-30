import { portfolios } from "@/app/data";
import Image from "next/image";
import webdev from "@/public/web-dev.jpg";
import market from "@/public/market.jpg";
import ProjectInfoCard from "@/components/portfolio/ProjectInfoCard";

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
    <div className="w-[90%] mb-30">
      <Image
        src={project.image}
        className="rounded-[10px]"
        alt="service-image"
      />
      <h3 className="text-[30px] my-3">{project.title}</h3>
      <p className="text-[16px] mb-3">
        User experience design includes elements of interaction design, visual
        design, informati architecture, user research, and other disciplines,
        and is concerned with all facts of overall experience delivered use
        Following is a short analysis of its constituent parts. Graphic
        treatment interface elements is perceived as the visual design. Graphic
        treatment interface elements is perceived
      </p>
      <p className="text-[16px] mb-3">
        Test your ideas with minimal risk. Test even the most complex ideas,
        involving emerging technologies – like blockchain – with the help of our
        expert Outsourceo team. We’ll help a prediction roadmapping and post-PoC
        Development analysis{" "}
      </p>
      <div className=" flex gap-7 py-6">
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
      <p className="text-[16px] mb-3">
        When an unknown printer took a galley of type and scrambled it to make a
        type book. It has leap survive not only five centurie, but also the leap
        into electronic typesetting essentiall dolor unchange Lorem ipsum dolor
        sit amet consec tetur adipis icing elit.
      </p>

      <h3 className="text-[25px] my-3">Challenge & solution </h3>
      <p className="text-[16px] mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud ullamco laboris nisi ut aliquip ex commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate.
      </p>
      <h3 className="text-[25px] my-3">Final result</h3>
      <p className="text-[16px] mb-3">
        For almost 50 years Leighton Asia, one of the region’s largest and most
        respected constr companies, has been progressively building for a better
        future by leveraging international expertise intelligence. In that time
        Leighton has delivered some of Asia’s prestigious buildings and
        infrastructure projects. prestigious buildings and
        transformational.{" "}
      </p>
      <ProjectInfoCard />
    </div>
  );
}
