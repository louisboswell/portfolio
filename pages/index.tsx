import Footer from "@/components/ui/homebrew/Footer";
import { Briefcase, MapPin } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const achievements = [
  { role: "Technology Consultant", location: "PwC", year: "2020 - current" },
  {
    role: "Computer Science",
    location: "University of Leeds",
    year: "2020 - 2024",
  },
  {
    role: "Young Engineer of the Year",
    location: "Big Bang Fair Regional",
    year: "2019",
  },
  // { role: "Innovation Eward Winner", location: "EES", year: "2019" },
];

const projects = [
  {
    name: "Noughts",
    description:
      "Noughts and crosses built in Next.js and Redux Toolkit. Developed in under a day as a refresher.",
    year: "June 2025",
    http: "https://www.noughts.xyz",
  },
  {
    name: "Zombie Shooter",
    description:
      "Top down pixel zombie shooter demo built in Godot - with 15 unique weapons, 5 consumables & wave-based scaling difficulty.",
    year: "August 2024",
    http: "https://www.github.com/louisboswell/zombie-shooter",
  },
  {
    name: "Cinerank",
    description:
      "React js and Flask serverless function 3-tier application, processed and calculated over 20,000 realtime user comparisons - cumulating in an explorative piece on relative vs absolute methods of ranking media. Received 76% grade.",
    year: "July 2024",
    http: "/BOSWELL-FINAL24.pdf",
  },
];

export default function Home() {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} flex justify-center`}
    >
      <div className="min-lg:w-1/2 justify-start flex-col mt-8">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col">
            <div className="mt-8 mb-4">
              <a className="text-2xl font-bold">Louis Boswell</a>
            </div>

            <div className="flex-row flex gap-2 items-center text-sm">
              <MapPin color="gray" size={14} />
              <a style={{ color: "gray" }}>Sheffield, England</a>
            </div>

            <div className="flex-row flex gap-2 items-start mb-4 pr-8 text-sm">
              <Briefcase
                style={{ flexShrink: 0 }}
                className="mt-1"
                color="gray"
                size={14}
              />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Technology Consultant @ PwC",
                  1000,
                  "First Class Computer Science Grad",
                  1000,
                  "Young Engineer of the Year 2019",
                  1000,
                  1,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "18",
                  color: "gray",
                  display: "inline-block",
                }}
                repeat={Infinity}
              />
            </div>
          </div>
          {/* <Image alt="me" src="/avatar.png" width={90} height={90} className={`mt-8 rounded-full -scale-x-100 border-1 border-white hover:animate-spin ${theme == 'light' ? 'invert' : null}`}/> */}
        </div>
        <div className="italic mb-2">
          <a>
            Passionate tech enthusiast with a strong foundation in computer
            science, and a burning desire to learn.
          </a>
        </div>

        <div className="mb-8">
          <a>
            Currently working as a Technology Consultant at PwC after graduating
            the Technology Degree Apprentice program, with a degree in Computer
            Science from the University of Leeds (First Class with Honours).
          </a>
        </div>

        <div className="flex-1">
          <a className="text-xl font-bold">Projects</a>

          {projects.map((project) => (
            <a
              key={project.name}
              className="flex flex-col mt-2 hover:bg-primary-foreground rounded-lg px-2"
              href={project.http!}
              rel="noopener noreferrer"
              target="_blank"
            >
              <a className="flex flex-row justify-between">
                <a>{project.name}</a>

                <a className="text-sm text-gray-400 italic">{project.year}</a>
              </a>

              <a className="text-sm text-gray-400 pr-12">
                {project.description}
              </a>
            </a>
          ))}
        </div>
        {/* <div className="flex-1 items-start mt-8">
          <a className="text-xl font-bold">Blog</a>
          {blogs.map((blog) => (
            <div key={blog.name} className="flex flex-col mt-2">
              <a>{blog.name}</a>
              <div className="flex flex-row justify-between">
                <a className="text-sm text-gray-400">{blog.technology}</a>
                <a className="text-sm text-gray-400 italic">{blog.year}</a>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex-1 flex-col mt-8">
          <a className="text-xl font-bold">Career</a>
          {achievements.map((achievement) => (
            <div key={achievement.role} className="flex flex-col mt-2 px-2">
              <a>{achievement.role}</a>
              <div className="flex flex-row justify-between">
                <a className="text-sm text-gray-400">{achievement.location}</a>
                <a className="text-sm text-gray-400 italic">
                  {achievement.year}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </main>
  );
}
