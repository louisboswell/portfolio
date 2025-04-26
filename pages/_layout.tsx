import Footer from '@/components/ui/homebrew/Footer';
import Navbar from '@/components/ui/homebrew/Navbar';
import { ReactNode } from 'react';

import { ThemeProvider } from '@/components/ui/homebrew/theme-provider';



export default function RootLayout ({children}: {children: ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning>

            <body>
                <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
                >
        <div className='m-4 flex flex-col justify-center'>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </div>
        </ThemeProvider>
        </body>
        </html>
    );
}