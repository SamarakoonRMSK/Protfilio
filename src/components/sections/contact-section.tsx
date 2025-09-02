
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Briefcase, CheckCircle2, Clock, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { handleSubmit } from "@/app/actions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TerminalCard } from "@/components/terminal-card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "Project Discussion",
      message: "",
    },
  });

  const onFormSubmit = async (data: FormValues) => {
    // @ts-ignore
    const result = await handleSubmit(data);
    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20 relative">
        <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#888888_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 dark:bg-[radial-gradient(#333333_1px,transparent_1px)]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <TerminalCard title="message-form.tsx" className="h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Send className="w-5 h-5 text-primary" />
                  <h3 className="font-mono text-lg font-bold text-foreground">$ compose_message()</h3>
                </div>
                <p className="font-mono text-sm text-muted-foreground mb-6">// Fill out the form and I'll respond ASAP</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6 font-mono">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">const name = *</FormLabel>
                            <FormControl>
                              <Input placeholder="'Your Name'" {...field} className="bg-background/50 border-border/30" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">const email = *</FormLabel>
                            <FormControl>
                              <Input placeholder="'your@email.com'" {...field} className="bg-background/50 border-border/30" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                     <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-muted-foreground">const subject = *</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-background/50 border-border/30" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">const message = *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="'Tell me about your project...'"
                              className="min-h-[120px] bg-background/50 border-border/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-primary/20 text-primary hover:bg-primary/30 border-2 border-primary" disabled={form.formState.isSubmitting}>
                      <span className="font-mono">$ {form.formState.isSubmitting ? "sending_message()..." : "send_message()"}</span>
                    </Button>
                  </form>
                </Form>
              </TerminalCard>
            </div>

            <div className="space-y-8">
              <TerminalCard title="$ mail --to-lahiru --priority-high" badgeText="ACTIVE" badgeVariant="secondary" className="bg-green-500/5">
                <div className="flex items-start gap-4">
                    <Mail className="w-8 h-8 text-accent mt-1" />
                    <div>
                        <h3 className="font-mono font-bold text-foreground">Email</h3>
                        <a href="mailto:balahirulakshan@gmail.com" className="font-mono text-accent hover:underline">balahirulakshan@gmail.com</a>
                        <p className="font-mono text-sm text-muted-foreground mt-1">// Drop me a message anytime</p>
                    </div>
                </div>
              </TerminalCard>

              <TerminalCard title="$ call --number-+94711837836" badgeText="AVAILABLE" badgeVariant="secondary" className="bg-blue-500/5">
                <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-accent mt-1" />
                    <div>
                        <h3 className="font-mono font-bold text-foreground">Phone</h3>
                        <a href="tel:+94711837836" className="font-mono text-accent hover:underline">+94 71 183 7836</a>
                        <p className="font-mono text-sm text-muted-foreground mt-1">// Available for calls</p>
                    </div>
                </div>
              </TerminalCard>
              
              <TerminalCard title="$ locate --remote-friendly" badgeText="REMOTE_OK" badgeVariant="secondary" className="bg-purple-500/5">
                 <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-accent mt-1" />
                    <div>
                        <h3 className="font-mono font-bold text-foreground">Location</h3>
                        <p className="font-mono text-accent">Kadawatha, Sri Lanka</p>
                        <p className="font-mono text-sm text-muted-foreground mt-1">// Based in Sri Lanka, Open to remote work</p>
                    </div>
                </div>
              </TerminalCard>

              <TerminalCard title="$ cat sla.json">
                <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <Clock className="w-16 h-16 text-primary animate-spin-slow" style={{animationDuration: '10s'}}/>
                      <Clock className="w-8 h-8 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h3 className="font-mono font-bold text-green-400 text-lg">Response SLA</h3>
                    <p className="font-mono text-sm text-muted-foreground mt-2">// Guaranteed response within 24 hours. For urgent projects, call directly.</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <Badge variant="outline">IST (GMT+5:30)</Badge>
                        <Badge variant="secondary" className="bg-green-500/10 text-green-400">99.9% Uptime</Badge>
                    </div>
                </div>
              </TerminalCard>
            </div>
          </div>
          <div className="mt-12 text-center">
             <div className="inline-flex items-center gap-3 font-mono p-3 rounded-md bg-card/50 border border-border/20">
                <Terminal className="w-5 h-5 text-green-400" />
                <span>Contact system initialized. Ready to receive messages!</span>
                <span className="w-2 h-4 bg-green-400 animate-ping"></span>
             </div>
          </div>
        </div>
    </section>
  );
}
