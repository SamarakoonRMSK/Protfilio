
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const educationHistory = [
  {
    institution: "University of Colombo School of Computing",
    degree: "B.Sc. in Computer Science",
    years: "2018 - 2022",
  },
  {
    institution: "Royal College, Colombo",
    degree: "GCE Advanced Level",
    years: "2015 - 2017",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary">&gt;</span> cat /var/log/education.log
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              # My academic journey and qualifications.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8">
            {educationHistory.map((edu, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/20 shadow-lg">
                <CardHeader className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 space-y-0">
                  <div className="space-y-1">
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.years}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
