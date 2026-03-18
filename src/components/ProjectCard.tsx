import Image from 'next/image';
import { Project } from '../types/project';


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#222831] rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <Image 
        src={project.imageUrl} 
        alt={project.title} 
        width={600} 
        height={300} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-[#393E46] text-sm px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          See on GitHub
        </a>
      </div>
    </div>
  );
}