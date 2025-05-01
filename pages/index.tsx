import Footer from "@/components/ui/homebrew/Footer";
import { Briefcase, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
    name: "Cinerank",
    description:
      "3-tier movie comparison platform, collected over 20,000 user submitted pairwise comparisons",
    year: "July 2024",
  },
  {
    name: "Project Patron",
    description: "Customer rewards and referral platform for local businesses.",
    year: "coming soon",
  },
  {
    name: "Project Together",
    description: "Building better habits through social connection.",
    year: "coming soon",
  },
];

const blogs = [
  {
    name: "Why Low-Code Doesn't Work",
    technology: "and why ceo's love it",
    year: "May 2025",
  },
];

export default function Home() {
  const { theme} = useTheme();
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

        <div className="flex-row flex gap-2 items-center">
          <MapPin color="gray" size={18} />
          <a style={{ color: "gray" }}>Sheffield, England</a>
        </div>

        <div className="flex-row flex gap-2 items-start mb-4 pr-8">
          <Briefcase style={{flexShrink: 0}} className="mt-1" color="gray" size={18} />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Technology Consultant @ PwC",
              1000,
              "First Class Computer Science Graduate @ UoL",
              1000,
              "Young Engineer of the Year 2019",
              1000,
              1,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "18", color: "gray", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>

          </div>
            <Image alt="me" src="/avatar.png" width={90} height={90} className={`mt-8 rounded-full -scale-x-100 border-1 border-white hover:animate-spin ${theme == 'light' ? 'invert' : null}`}/>

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
            the Technology Degree Apprentice program, with a degree in
            Computer Science from the University of Leeds (First Class with Honours).
          </a>
        </div>

        <div className="flex-1">
          <a className="text-xl font-bold">Projects</a>

          {projects.map((project) => (
            <div key={project.name} className="flex flex-col mt-2">
              <div className="flex flex-row justify-between">
                <a>{project.name}</a>

                <a className="text-sm text-gray-400 italic">{project.year}</a>
              </div>

              <a className="text-sm text-gray-400 pr-12">
                {project.description}
              </a>
            </div>
          ))}
        </div>
        <div className="flex-1 items-start mt-8">
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
        </div>

        <div className="flex-1 flex-col mt-8">
          <a className="text-xl font-bold">Career</a>
          {achievements.map((achievement) => (
            <div key={achievement.role} className="flex flex-col mt-2">
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
