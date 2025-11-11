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
            {/* <Navbar/> */}
            <main className="">{children}</main>
            {/* <Footer/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
