import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Sidebar from "./components/layouts/sidebar";
import AuthGuard from "./auth-guard";

const poppins = Poppins({
    variable: "--font-poppins",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],

});

export const metadata: Metadata = {
    title: "Sport ON Admin",
    description: "Admin dashboard for Sport ON website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} antialiased`}
            >
                <AuthGuard>
                    <div className="flex min-h-screen bg-white">
                        <Sidebar />
                        <main className="flex-1 min-h-screen ml-80 p-14 bg-[#F9FAFB]">
                            <div className="max-w-6xl mx-auto ">
                                {children}
                            </div>
                        </main>
                    </div>
                </AuthGuard>
            </body>
        </html>
    );
}
