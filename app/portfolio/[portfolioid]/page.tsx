import { portfolios } from "@/app/data";

export default function ProjectDetails({ params }) {
  const project = portfolios.find(
    (item) => item.id === params.id
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="px-16 py-16">
      <h1 className="text-4xl font-bold mb-6">
        {portfolios.title}
      </h1>

      <img src={portfolios.image} alt={portfolios.title} />

      <p className="mt-6">{portfolios.description}</p>
    </div>
  );
}