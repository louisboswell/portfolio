import Footer from "@/components/ui/homebrew/Footer";
import { Separator } from "@/components/ui/separator";
import { BriefcaseBusiness, Clapperboard, Coins, Grid3X3, Icon, MapPin, Nut } from "lucide-react";
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
    name: "Acorn Notes",
    description:
      "AI augmented note taking app, turned intelligent assistant. Automatically ingest, categorize and map your knowledge.",
    year: "Coming Soon",
    http: "/",
    icon: Nut
  },
  {
    name: "Coinflip",
    description:
      "Coin flipping simulator, built using Three.js & Next.js. Built to test and learn Three.js for rendering 3D models in web.",
    year: "Oct 2025",
    http: "https://coin-flip-livid.vercel.app/",
    icon: Coins
  },
  {
    name: "Noughts",
    description:
      "Noughts and crosses built in Next.js and Redux Toolkit. Developed in under a day as a refresher.",
    year: "June 2025",
    http: "https://www.noughts.xyz",
    icon: Grid3X3
  },
  {
    name: "Cinerank",
    description:
      "Explorative piece on relative vs absolute methods of ranking media. React & Flask 3-tier application, processed over 20,000 realtime user comparisons.",
    year: "July 2024",
    http: "/BOSWELL-FINAL24.pdf",
    icon: Clapperboard
  },
];

export default function Home() {
  return (
    <main
      className={`${geistSans.variable} ${geistMono.variable} flex justify-center md:w-1/2 w-screen mx-auto px-4`}
    >
      <div className="grid py-8 items-center flex flex-col justify-center">
          <div className="flex flex-row">
          <Image
            src={"/72051071.jpg"}
            alt="Louis Boswell"
            width={64}
            height={64}
            className="round object-cover size-18 mr-4 shadow-xl"
          />     
       <div>
          <h1 className="text-2xl font-bold">Louis Boswell</h1>
          <div className="flex flex-row items-center gap-2 mt-1">
            <BriefcaseBusiness className="size-4 text-muted-foreground"/>
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
                repeat={Infinity}
                className="text-sm font-medium text-muted-foreground"
              />
          </div>
                    <div className="flex flex-row items-center gap-2">
            <MapPin className="size-4 text-muted-foreground"/>
            <h2 className="text-sm font-medium text-muted-foreground">London, England</h2>
          </div>
            </div>
          </div>



          <h1 className="text-lg font-bold mt-8">
            Projects
          </h1>
          <Separator className="mb-2"/>
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
          <a key={project.name} className="flex flex-row justify-between items-center mb-2 gap-4"
          href={project.http}
              rel="noopener noreferrer"
              target="_blank">
                <div className="flex items-center justify-center w-8 h-8 shrink-0">
                  <IconComponent className="w-6 h-6" strokeWidth={2} />
                </div>
            <div className="flex flex-col w-full">
              <p className="text-md font-semibold">{project.name}</p>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            
            <p className="text-xs text-muted-foreground text-nowrap italic">{project.year}</p>
          </a>)})}


          <h1 className="text-lg font-bold mt-8">
            Career
          </h1>
          <Separator className="mb-2"/>

            {achievements.map((achievement) => 
          <div key={achievement.role} className="flex flex-row items-center justify-between mb-2 gap-24">
            <div className="flex flex-col">
              <p className="text-md font-bold">{achievement.role}</p>
              <p className="text-sm text-muted-foreground">{achievement.location}</p>
              </div>
            
            <p className="text-xs text-muted-foreground text-nowrap italic">{achievement.year}</p>
          </div>)}
          <Footer/>
      </div>
      
    </main>
  );
}
