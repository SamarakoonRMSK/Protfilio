
import { Briefcase } from "lucide-react";
import { TerminalCard } from "@/components/terminal-card";
import { Badge } from "@/components/ui/badge";

const workHistory = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    years: "2022 - Present",
    description: [
        "Led the development of end-to-end web solutions for diverse clients, from startups to established businesses.",
        "Engineered RESTful APIs and integrated third-party services to build scalable back-end systems.",
        "Crafted responsive and interactive user interfaces using React, Next.js, and Tailwind CSS.",
        "Managed project timelines, client communication, and deliverables to ensure successful project completion."
    ]
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary">&gt;</span> cd /work/experience
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              # My professional journey and contributions.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8">
            {workHistory.map((job, index) => (
              <TerminalCard key={index} title={`job-${index}.log`} badgeText={job.company} badgeVariant="secondary">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  <Badge variant="outline">{job.years}</Badge>
                </div>
                <div className="mt-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground font-mono text-sm">
                        {job.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
              </TerminalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
