import { Separator } from "@/components/ui/separator";
import { AtSign, CornerDownRight } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dumpText = "Mauris quis posuere purus, at pharetra enim. Curabitur quis sodales lectus. Phasellus iaculis lacus nec ultricies egestas. Maecenas imperdiet mauris gravida tristique tincidunt. Suspendisse elementum a diam nec iaculis. Vivamus suscipit libero metus, rhoncus rhoncus elit fringilla et. Duis ultrices eget felis non tincidunt. Vestibulum ullamcorper posuere consequat. Fusce feugiat eleifend purus ac suscipit. Proin laoreet odio ac metus ullamcorper faucibus. Duis rhoncus mauris quis euismod condimentum. Proin mollis magna diam, et pulvinar turpis aliquet scelerisque."

function listItem (item: {role: string, location: string, year: string}, index: number) {
  return (
    <li className={"flex justify-between mt-1 ml-" + index}>
    <div className="flex gap-1">
    <CornerDownRight size={24}/>
    <a className="font-bold">
      {item.role}
    </a>
    <AtSign alignmentBaseline="central" size={24} className="p-1"/>
    <a>{item.location}</a>
    </div>

    <a className="text-sm italic">{item.year}</a>
  </li>
  );
}

const items = [
  { role: "computer science graduate", location: "university of leeds", year: "graduated july 2024" },
  { role: "technology consultant", location: "pwc", year: "2020 - current" },
  { role: "young engineer of the year", location: "big bang fair", year: "2019"},
  { role: "innovation award winner", location: "ees", year: "2019"}
];


export default function Home() {
  return (
    <div>
      <main
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-start p-24`}
      >
        <div className="flex flex-col w-1/2">
        <div className="flex flex-row justify-between items-end">
          <a className="font-bold text-5xl subpixel-antialiased">
            louis  boswell
          </a>
          <a className="italic text-sm">UK</a>
        </div>


          <Separator className="mb-4"/>
          <a>
            {dumpText}
          </a>

          
            <a className="mt-10 font-bold text-2xl">achievements</a>
            <Separator/>
            <ul className="list-none">
              {items.map((item, index) => listItem(item, index))}
            </ul>
        </div>
      </main>
    </div>
  );
}
