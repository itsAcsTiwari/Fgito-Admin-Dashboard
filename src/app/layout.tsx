import { QueryProvider, SideBarNav } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Admin web",
  description: "To manage fgito data",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header className="sticky text-center top-0 w-full h-16 bg-white">
          Header
        </header>
        <QueryProvider>
          <main className="overflow-hidden">
            <div className="mx-auto flex min-h-[calc(100vh-130px)] flex-1 xl:max-w-screen-2xl xl:px-4 xl:pt-4">
              <SideBarNav />
              <div
                aria-label="tables"
                className="bg-blue-300 flex flex-1 lg:divide-x"
              >
                {children}
              </div>
            </div>
          </main>
        </QueryProvider>
        <footer className="h-16 bg-white flex items-center">
          Footer © Novasie
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
