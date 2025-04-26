import Footer from '@/components/ui/homebrew/Footer';
import Navbar from '@/components/ui/homebrew/Navbar';
import { ReactNode } from 'react';

export default function RootLayout ({children}: {children: ReactNode}) {
    return (
        <div className='m-4 flex flex-col'>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </div>
    );
}