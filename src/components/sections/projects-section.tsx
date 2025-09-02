import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { TerminalCard } from "@/components/terminal-card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product management, user authentication, and a Stripe-integrated checkout process. Built with Next.js, Firebase, and Tailwind CSS.",
    image: "https://picsum.photos/800/600?random=1",
    github: "https://github.com",
    live: "https://example.com",
    aiHint: "online store",
    tags: ["Next.js", "Firebase", "Stripe", "Tailwind"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with drag-and-drop boards, real-time updates via WebSockets, and notification features. Powered by React and Node.js.",
    image: "https://picsum.photos/800/600?random=2",
    github: "https://github.com",
    live: "https://example.com",
    aiHint: "kanban board",
    tags: ["React", "Node.js", "WebSockets"],
  },
  {
    title: "Portfolio Generator",
    description: "A web app that allows users to generate a personal portfolio website by filling out a simple form, with customizable templates and easy deployment options.",
    image: "https://picsum.photos/800/600?random=3",
    github: "https://github.com",
    live: "https://example.com",
    aiHint: "portfolio website",
    tags: ["React", "AI", "Next.js"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary">&gt;</span> ls -R projects
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              # Here are some of the projects I'm proud of.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
               <TerminalCard key={index} title={`${project.title.toLowerCase().replace(/\s+/g, "-")}.proj`}>
                <div className="space-y-4">
                  <div className="group relative overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="aspect-video w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex items-center gap-2">
                    <FolderGit2 className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex items-center gap-4 pt-2">
                    <Button variant="outline" asChild className="w-full">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild className="w-full">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </TerminalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
