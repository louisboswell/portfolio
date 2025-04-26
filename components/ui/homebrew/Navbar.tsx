import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const options = [
    'home',
    'blog',
    'projects',
    'terminal'
]

export default function Navbar () {
    return (
        <div className="flex justify-center w-full">
            <NavigationMenu className="flex items-center">
            <NavigationMenuList>
                {options.map((option) =>                 
                <NavigationMenuItem key={option}>
                <Link href={option != 'home' ? '/' + option : '/'} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <b className="text-lg">{option}</b>
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>)}
            </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}