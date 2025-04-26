import { ExternalLink } from "lucide-react";
import { Button } from "../button";
import ModeToggle from "./ThemeToggle";


const socials = [
    { name: "linkedin", url: "https://www.linkedin.com/in/louis-boswell-4219541b7/" },
    { name: "github", url: "https://github.com/louisboswell" },
    { name: "twitter", url: "https://x.com/louisboswell7" }
  ];
  
function socialLink (social: {name: string, url: string}) {
    // Open item in new window
    function openInNewTab (url: string) {
        window.open(url, "_blank", "noreferrer");
    } 


    return (
        <Button variant="link" onClick={() => openInNewTab(social.url)}>
            <ExternalLink size={18}/>
            <a className="font-semibold text-foreground cursor-pointer">{social.name}</a>
        </Button>
    )
}


export default function Footer () {
    return (
        <div className="flex justify-center flex-col items-center">
            <div className="flex flex-row gap-4">
                {socials.map((social) => socialLink(social))}
            </div>
            <div className="flex flex-row justify-between gap-2 items-center">
            <a className="text-gray-400 text-xs">created by louisboswell1@gmail.com</a>
            <ModeToggle/>
            </div>
        </div>
    );
}