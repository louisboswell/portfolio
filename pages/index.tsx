import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AtSign } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function listItem (item: {role: string, location: string, year: string}) {
  // const offset = "ml-" + index;

  return (
    <li className={"flex justify-between items-center mt-.5"}>
    <div className="flex gap-1">
    {/* <CornerDownRight size={24}/> */}
    <a className="font-bold">
      {item.role}
    </a>
    <AtSign alignmentBaseline="central" size={24} className="p-1"/>
    <a>{item.location}</a>
    </div>

    <a className="text-xs italic text-gray-400">{item.year}</a>
  </li>
  );
}

function listProject (item: {name: string, technology: string, year: string}) {
  return (
    <li>
      <Button variant="ghost" className="flex flex-row justify-between items-center w-full h-auto px-1 py-1 cursor-pointer">
      <div className="flex flex-col items-start">
        <a className="font-bold text-lg">{item.name}</a>
        <a className="text-xs">{item.technology}</a>
      </div>

      <a className="text-xs text-gray-400">{item.year}</a>
      </Button>
    </li>
  );
}

const achievements = [
  { role: "Computer Science", location: "University of Leeds", year: "2020 - 2024" },
  { role: "Technology Consultant", location: "PwC", year: "2020 - current" },
  { role: "Young Engineer of the Year", location: "Big Bang Fair Regional", year: "2019"},
  { role: "Innovation Eward Winner", location: "EES", year: "2019"}
];

const projects = [
  { name: "Project Title 1", technology: "React & Node.js", year: "March 2025" },
  { name: "Project Title 2", technology: "Python & Django", year: "February 2025" },
  { name: "Project Titlegi 3", technology: "Go & Kubernetes", year: "January 2025" }
];


export default function Home() {
  return (
    <div>
      <main
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-start py-24`}
      >
        <div className="flex flex-col min-md:w-1/2">
        <div className="flex flex-row justify-between items-end">
          <a className="font-bold text-5xl subpixel-antialiased">
            louis boswell
          </a>
          <a className="italic text-sm text-gray-400">UK</a>
        </div>


          <Separator className="mb-4"/>
          <a className="font-semibold">Passionate and curious tech enthusiast with a strong foundation in computer science, and a burning desire to keep learning.</a>
          <a className="mt-2">Currently working as a Technology Consultant at PwC after graduating the Technology Degree Apprentice program, with a 1st degree in Computer Science from the University of Leeds.</a>

          <a className="mt-10 font-bold text-2xl">current projects</a>
            <Separator/>
            <ul className="list-none">
              {projects.map((item) => listProject(item))}
            </ul>

            <a className="mt-10 font-bold text-2xl">achievements</a>
            <Separator/>
            <ul className="list-none">
              {achievements.map((item, index) => listItem(item))}
            </ul>
        </div>
      </main>
    </div>
  );
}
