import CardComponent from "@/components/cardComponent";
import projectData from "@/data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 underline ml-1">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <CardComponent
            key={index}
            title={project.title}
            description={project.description}
            content={project.content}
            footer={project.footer}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}