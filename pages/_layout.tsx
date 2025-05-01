
// import Navbar from '@/components/ui/homebrew/Navbar';
import { ReactNode } from "react";

import { ThemeProvider } from "@/components/ui/homebrew/theme-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex px-10 flex-col h-screen justify-between">
            {/* <Navbar/> */}
            <main className="">{children}</main>
            {/* <Footer/> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
