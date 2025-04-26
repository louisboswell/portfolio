// import { Button } from "@/components/ui/button";
import { Minus, Square, X } from "lucide-react";
import { Ubuntu_Mono } from "next/font/google";

// import { VT323 } from "next/font/google";
import { Noto_Sans_Mono } from "next/font/google";

const ubuntu_bold = Ubuntu_Mono({
    weight: ['700'],
});

const ubuntu_regular = Ubuntu_Mono({
    weight: ['400']
});

const terminal_font = Noto_Sans_Mono({
    weight: ['400']
})

const text = [
    'Line 1',
    'Line 2',
    'Line 3'
]

const navigation = [
    'home',
    'projects',
    'blog',
    'terminal'
]

function NavigationButton (name: string) {
    return (
        <div key={name} className="hover:bg-white hover:text-black hover:animate-caret-blink hover:cursor-pointer">
            <a className={terminal_font.className}>
                {name}
            </a>
        </div>
    );
}

export default function Terminal () {
    return (
        <div className="w-full h-150 my-10 select-none">
            <div className="bg-grey border rounded-t-2xl h-10 flex justify-between items-center">
                <a className={`ml-4 font-bold flex flex-row items-center gap-2 ${terminal_font.className}`}>
                    {/* <SquareTerminal size={18}/> */}
                    {'louis-boswell > portfolio'}
                </a>

                <div className="flex flex-row gap-1 items-center mr-2">
                    <div className="mt-2">
                        <Minus size={18}/>
                    </div>
                    <Square size={16}/>
                    <X size={18}/>
                </div>
            </div>
            <div className="bg-black border rounded-b-2xl h-100 m-auto">
                <div className="flex-row flex justify-center mt-2 gap-4">
                    {navigation.map((item) => NavigationButton(item))}
                </div>
            </div>

        </div>
    );
}