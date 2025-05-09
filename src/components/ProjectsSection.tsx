
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Code } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Website",
    description: "A full-featured online store with product listings, cart functionality, and checkout process.",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com/ecommerce",
    codeUrl: "https://github.com/username/ecommerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Weather Dashboard",
    description: "A web app that displays current weather and 5-day forecast for any location.",
    tags: ["JavaScript", "API", "CSS"],
    liveUrl: "https://example.com/weather",
    codeUrl: "https://github.com/username/weather",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Task Management App",
    description: "A productivity application that helps users organize and track their daily tasks.",
    tags: ["React", "TailwindCSS", "Firebase"],
    liveUrl: "https://example.com/tasks",
    codeUrl: "https://github.com/username/tasks",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=500&auto=format&fit=crop&q=60",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="inline-block border-b-4 border-primary pb-2">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full border-none shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-secondary text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-between gap-4">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                
                <Button size="sm" className="flex-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
