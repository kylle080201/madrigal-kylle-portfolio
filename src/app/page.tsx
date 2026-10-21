import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
      {children}
    </h2>
  );
}

// Cached so the page can be prerendered (Cache Components is on by default).
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 sm:px-6">
        <section className="flex flex-col gap-6 py-20 sm:py-28">
          <Avatar className="size-16">
            <AvatarFallback className="text-lg">{site.initials}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.name}
            </h1>
            <p className="text-xl text-muted-foreground">{site.role}</p>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed">{site.bio}</p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {site.location}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className={cn(buttonVariants({ size: "lg" }), "px-4")}
            >
              View projects
            </a>
            <a
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
            >
              <Mail />
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="flex scroll-mt-20 flex-col gap-6 py-12">
          <SectionHeading>About</SectionHeading>
          <p className="max-w-2xl leading-relaxed">{site.about}</p>
          <div className="flex flex-wrap gap-2">
            {site.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section id="projects" className="flex scroll-mt-20 flex-col gap-6 py-12">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-wrap content-start gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </CardContent>
                <CardFooter className="gap-2">
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      Live
                      <ArrowUpRight />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                      Code
                      <ArrowUpRight />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="flex scroll-mt-20 flex-col gap-6 py-12">
          <SectionHeading>Contact</SectionHeading>
          <p className="max-w-2xl leading-relaxed">
            I&apos;m open to new opportunities and collaborations. The best way
            to reach me is by email.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className={cn(buttonVariants({ size: "lg" }), "px-4")}
            >
              <Mail />
              {site.email}
            </a>
            {site.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
              >
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-4xl px-4 pb-10 sm:px-6">
        <Separator className="mb-6" />
        <p className="text-sm text-muted-foreground">
          © <CurrentYear /> {site.name}. Built with Next.js and
          shadcn/ui.
        </p>
      </footer>
    </>
  );
}
