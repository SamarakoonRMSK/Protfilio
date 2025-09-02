
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Briefcase, Code, Download, GraduationCap, Home, Layers, Mail, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home", icon: Home, command: "cd ~" },
  { href: "#about", label: "About", icon: User, command: "man ./saman-dev" },
  { href: "#education", label: "Education", icon: GraduationCap, command: "cat /var/log/education.log" },
  { href: "#experience", label: "Experience", icon: Briefcase, command: "cd /work/experience" },
  { href: "#skills", label: "Skills", icon: Code, command: "./show-skills" },
  { href: "#projects", label: "Projects", icon: Layers, command: "ls -R projects" },
  { href: "#contact", label: "Contact", icon: Mail, command: "mail saman-dev" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement);
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(`#${section.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const closeSheet = () => setSheetOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-lg backdrop-blur-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
          <span className="text-primary">&gt; $</span>
          <span>saman-dev</span>
          <div className="flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/10 px-2 py-0.5 text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/80 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            ONLINE
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeLink === link.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
           <Button variant="outline" asChild className="ml-4">
            <a href="/saman-dev-cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1a1b26] text-[#c0caf5] border-l-[#1a1b26] font-mono">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex h-full flex-col p-6">
                 <div className="mb-8 flex items-center justify-between">
                   <p className="font-bold text-lg">[saman-dev@portfolio ~]$</p>
                   <Button variant="ghost" size="icon" onClick={closeSheet} className="text-[#c0caf5] hover:bg-[#292e42] hover:text-white">
                     <X className="h-6 w-6" />
                     <span className="sr-only">Close navigation menu</span>
                   </Button>
                 </div>
                <nav className="flex flex-col items-start gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-3 text-base text-[#c0caf5] hover:text-primary transition-colors duration-200"
                      onClick={closeSheet}
                    >
                      <span className="text-primary">$</span>
                      <span className="w-full">{link.command}</span>
                    </Link>
                  ))}
                  <Button variant="outline" asChild className="mt-4 w-full bg-transparent border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                    <a href="/saman-dev-cv.pdf" download>
                      <Download className="mr-2 h-4 w-4" />
                      download-cv.sh
                    </a>
                  </Button>
                   <p className="mt-auto text-sm text-muted-foreground/50"># Press Esc or the close button to exit</p>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
