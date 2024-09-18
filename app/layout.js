import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = localFont({
    src: "./fonts/NeueMontreal-Light.woff2",
    variable: "--font-montreal",
    weight: "100",
});

export const metadata = {
    title: "Henriquez.dev",
    description: "Henriquez.dev",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} antialiased`}
            >
                <div className="container mx-auto flex flex-col items-center justify-start mt-2 sm:border-stone-900 sm:border sm:border-solid sm:rounded-3xl overflow-hidden">
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
