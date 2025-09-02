
import { Award, Briefcase, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "2+ Years",
    label: "Experience",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    value: "15+",
    label: "Projects Completed",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: "10+",
    label: "Happy Clients",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-12 px-4 md:px-6">
        <div className="space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span className="text-primary">&gt;</span> man ./saman-dev
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate and results-driven developer with a knack for crafting beautiful and functional web applications. I specialize in turning complex ideas into simple, elegant solutions that users love.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
