import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/navbar/Header";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter", // CSS-д ашиглах хувьсагчийн нэр
});

export const metadata: Metadata = {
    title: "Yargaitech — Урт хугацааны систем",
    description:
        "Вэбсайт, AI туслах, автоматжуулалт, SaaS, 3D Web — бизнес тань өсөн тэлэх урт хугацааны системийг инженерчилнэ.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="mn">
            <body
                className={`${inter.variable} bg-background text-foreground font-sans`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
