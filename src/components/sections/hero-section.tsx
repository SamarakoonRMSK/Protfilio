
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import profile_pic from "../../../public/saman-dev.jpg"
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { AnimatedIcons } from "@/components/animated-icons";
import { Button } from "@/components/ui/button";

const titles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[currentTitleIndex];
      if (isDeleting) {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(fullTitle.substring(0, displayedTitle.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      } else {
        if (displayedTitle.length < fullTitle.length) {
          setDisplayedTitle(fullTitle.substring(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedTitle, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Available for new opportunities
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Kadawatha, Sri Lanka</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground h-24 md:h-28">
              <span>{displayedTitle}</span>
              <span className="animate-ping">|</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
              With expertise in Web3, React, and Machine Learning, I build elegant, efficient, and user-centric digital experiences. I thrive on solving complex problems and turning ideas into reality.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon" className="transition-transform duration-300 hover:scale-110 hover:bg-primary/10">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon" className="transition-transform duration-300 hover:scale-110 hover:bg-primary/10">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a href="mailto:saman.doe@example.com" aria-label="Email">
                <Button variant="outline" size="icon" className="transition-transform duration-300 hover:scale-110 hover:bg-primary/10">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-96 lg:h-[450px] group">
            <AnimatedIcons />
            <Image
              src={profile_pic}
              alt="Saman Dev"
              width={280}
              height={280}
              className="relative z-10 rounded-full border-4 border-background shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/40"
              data-ai-hint="man portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
