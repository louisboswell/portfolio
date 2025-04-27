import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Apple, Bike, Book, Circle, CircleCheck, Coffee, Dumbbell, Film, Flower, Gamepad, Globe, Heart, IceCream, Laptop, PawPrint, PenTool, Scissors } from "lucide-react";
import { ReactElement } from "react";

interface LoyaltyCard {
    name: string,
    address: string,
    icon: ReactElement,
    service: string,

    required: number,
    completed: number,

    gradientClass: string,
}

const loyaltyCards: LoyaltyCard[] = [
    {
        name: 'Bean & Brew',
        address: '123 Coffee Lane, Downtown',
        icon: <Coffee />,
        service: 'coffee',
        gradientClass: 'bg-gradient-to-r from-amber-950 to-yellow-950',
        required: 8,
        completed: 3
    },
    {
        name: 'FitPulse Gym',
        address: 'Level 2, Wellness Center, Riverside',
        icon: <Dumbbell />,
        service: 'gym session',
        gradientClass: 'bg-gradient-to-r from-green-950 to-lime-950',
        required: 20,
        completed: 12
    },
    {
        name: 'Bloom & Petal',
        address: '45 Rose Street, Old Town',
        icon: <Flower />,
        service: 'bouquet purchase',
        gradientClass: 'bg-gradient-to-r from-pink-950 to-rose-950',
        required: 6,
        completed: 2
    },
    {
        name: 'Pixel Paradise',
        address: 'Arcade Plaza, Midtown',
        icon: <Gamepad />,
        service: 'game token',
        gradientClass: 'bg-gradient-to-r from-indigo-950 to-blue-900',
        required: 10,
        completed: 7
    },
    {
        name: 'Page Turners',
        address: '12 Library Lane, Book District',
        icon: <Book />,
        service: 'book purchase',
        gradientClass: 'bg-gradient-to-r from-yellow-900 to-amber-800',
        required: 5,
        completed: 1
    },
    {
        name: 'Glow Spa',
        address: '3 Serenity Blvd, Uptown',
        icon: <Heart />,
        service: 'spa treatment',
        gradientClass: 'bg-gradient-to-r from-rose-900 to-pink-800',
        required: 4,
        completed: 2
    },
    {
        name: 'CineMagic',
        address: 'Movie Hub, Central Park',
        icon: <Film />,
        service: 'movie ticket',
        gradientClass: 'bg-gradient-to-r from-gray-900 to-slate-800',
        required: 10,
        completed: 6
    },
    {
        name: 'Pedal Power',
        address: 'Cycle Lane, Riverside',
        icon: <Bike />,
        service: 'bike rental',
        gradientClass: 'bg-gradient-to-r from-lime-900 to-green-800',
        required: 12,
        completed: 5
    },
    {
        name: 'Sweet Tooth',
        address: '89 Dessert Drive, Midtown',
        icon: <IceCream />,
        service: 'dessert purchase',
        gradientClass: 'bg-gradient-to-r from-rose-950 to-fuchsia-900',
        required: 7,
        completed: 4
    },
    {
        name: 'Tech Haven',
        address: '5 Silicon Street, Tech Park',
        icon: <Laptop />,
        service: 'gadget repair',
        gradientClass: 'bg-gradient-to-r from-slate-950 to-gray-900',
        required: 3,
        completed: 1
    },
    {
        name: 'Urban Ink',
        address: 'Tattoo Alley, Downtown',
        icon: <PenTool />,
        service: 'tattoo session',
        gradientClass: 'bg-gradient-to-r from-neutral-950 to-zinc-900',
        required: 5,
        completed: 2
    },
    {
        name: 'Fresh Bites',
        address: 'Market Square, East End',
        icon: <Apple />,
        service: 'organic purchase',
        gradientClass: 'bg-gradient-to-r from-emerald-950 to-teal-900',
        required: 9,
        completed: 3
    },
    {
        name: 'Wanderlust Travels',
        address: 'Suite 10, Explorer Building, Uptown',
        icon: <Globe />,
        service: 'travel booking',
        gradientClass: 'bg-gradient-to-r from-cyan-950 to-sky-900',
        required: 2,
        completed: 1
    },
    {
        name: 'Paws & Claws',
        address: 'Pet Street, Suburbia',
        icon: <PawPrint />,
        service: 'pet grooming',
        gradientClass: 'bg-gradient-to-r from-orange-950 to-amber-900',
        required: 6,
        completed: 4
    }
];



function displayCard (card: LoyaltyCard) {
    return (
        <Card className={`${card.gradientClass} border shadow-2x w-90 inline-flex mt-8`}>
            <CardHeader>
                <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col">
                <CardTitle className="text-xl text-shadow-xl/30">
                    {card.name}
                </CardTitle>
                <CardDescription>
                {card.address}
                </CardDescription>
                </div>
                    {card.icon}
                </div>
            </CardHeader>
            <Separator/>
            <CardContent>
                <CardTitle className="">
                    Reward Progress
                </CardTitle>

                <CardDescription className="text-sm mt-1">
                    {`You are ${card.required - card.completed} ${card.service}s away from a free ${card.service}.`}
                </CardDescription>

                <div className={`grid grid-cols-8 gap-4 mt-4`}>
                    {Array.from({ length: card.required }, (_, index) => 
                        <div key={index}>
                            {index >= card.completed ? 
                            <Circle strokeWidth={3} size={24}/> 
                            : 
                            <CircleCheck strokeWidth={3} size={24}/>}
                        </div>
                    )}
                </div>
            </CardContent>
            <Separator/>
            <CardContent>
                <div className="flex flex-row justify-between">
                    <Button variant="outline" className="cursor-pointer">
                        Close
                    </Button>

                    <Button variant="default" className="cursor-pointer">
                        View Referal Code
                    </Button>
                </div>
            </CardContent>

        </Card>
    );
}


export default function CardMaker () {

    const demo: LoyaltyCard = {
        'name': 'Gentleman Fox',
        'address': 'Near Tram Stop, Hillsborough',
        'icon': <Scissors/>,
        'service': 'haircut',
        'gradientClass': 'bg-gradient-to-r from-blue-900 to-purple-600',
        'required': 16,
        'completed': 10
    };

    return (
        <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center text-center">
            <a className="text-8xl font-bold text-wrap mx-60 mt-10">
                Customer rewards and referrals made easy
            </a>

            <a className="text-xl text-gray-300 font-bold mt-8">
                Upgrade your simple loyalty card and start reaching more customers today
            </a>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 max-w-6xl">
            {displayCard(demo)}

            {loyaltyCards.map((card) => displayCard(card))}
        </div>
        </div>
    );
}
