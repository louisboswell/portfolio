import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Circle, CircleCheck, Coffee, Dumbbell, Flower, Gamepad, Scissors } from "lucide-react";
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
    }
];


function displayCard (card: LoyaltyCard) {
    return (
        <Card className={`w-90 ${card.gradientClass} border-0 shadow-2x`}>
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
        <div>
        <div className="flex flex-col justify-center text-center">
            <a className="text-8xl font-bold text-wrap mx-60 mt-10">
                Customer rewards and referrals made easy
            </a>

            <a className="text-xl text-gray-300 font-bold mt-8">
                Upgrade your simple loyalty card and start reaching more customers today
            </a>
        </div>
        <div className="flex flex-row mb-10 justify-center mx-24 gap-4 items-start mt-8">
            {displayCard(demo)}

            {loyaltyCards.map((card) => displayCard(card))}
        </div>
        </div>
    );
}
