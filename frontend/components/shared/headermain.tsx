"use client"

import { ModeToggle } from "@/components/ui/mode-toggle";
import { Home, Wallet, Gift, Image, Rocket, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {useState } from 'react';
import { Roboto } from "next/font/google";
import NextImage from 'next/image';

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['100', '700']
});

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Concepts clés', href: '/concepts', icon: BookOpen },
  { name: 'Créez votre wallet', href: '/wallet', icon: Wallet },
  { name: 'Vos premières cryptos', href: '/freecrypto', icon: Gift },
  { name: 'Vos Premiers NFTs', href: '/freenft', icon: Image },
  { name: 'Avant d\'investir', href: '/notionsavancees', icon: GraduationCap },
  { name: 'Lancez vous', href: '/get-started', icon: Rocket },
];

const HeaderMain = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="border-b fixed top-0 left-0 right-0 bg-background z-50">
                <div className="container mx-auto px-4 py-2 lg:py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <ModeToggle />
                        </div>

                        {/* Titre central avec lien - version desktop */}
                        <Link 
                            href="/" 
                            className={`${roboto.className} text-xl hidden ml-5 md:block hover:opacity-80 transition-opacity lg:text-2xl`}
                        >
                            <span className="text-2xl font-thin lg:text-3xl">How To </span>
                            <span className="text-2xl font-bold lg:text-3xl">Blockchain</span>
                        </Link>
                        
                        {/* Navigation pour desktop */}
                        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
                            {navigation.map((item) => (
                                <Link 
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-1.5 whitespace-nowrap font-medium transition-colors hover:text-primary
                                        ${pathname === item.href ? 'text-primary' : 'text-muted-foreground'}
                                        text-xs lg:text-sm`}
                                >
                                    <item.icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Version mobile du titre avec lien */}
                        <Link 
                            href="/"
                            className={`${roboto.className} text-lg absolute left-1/2 transform -translate-x-1/2 md:hidden hover:opacity-80 transition-opacity`}
                        >
                            <span className="text-xl font-thin">How To </span>
                            <span className="text-xl font-bold">Blockchain</span>
                        </Link>

                        {/* Bouton burger */}
                        <div className="md:hidden">
                            <button 
                                className="relative focus:outline-none"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 shadow-md">
                                    <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${isOpen ? '-rotate-[45deg]' : 'rotate-0'} origin-center`}>
                                        <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${isOpen ? '-rotate-90 h-[1px] -translate-y-[1px]' : 'rotate-0'} origin-right delay-75`}></div>
                                        <div className="bg-white h-[1px] rounded"></div>
                                        <div className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${isOpen ? '-rotate-90 h-[1px] translate-y-[1px]' : 'rotate-0'} origin-left delay-75`}></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu mobile avec background galaxie */}
            <div className={`fixed inset-0 transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-y-[72px]' : 'translate-y-[-100%]'}`}>
                {/* Background image avec overlay */}
                <div className="absolute inset-0 overflow-hidden">
                    <NextImage
                        src="/images/galaxydrawing.png"
                        alt="Galaxy background"
                        fill
                        className="object-cover"
                        quality={100}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                </div>

                {/* Navigation */}
                <nav className="relative z-10 flex flex-col p-6 pt-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-4 px-4 py-4 text-lg font-medium transition-colors hover:text-primary
                                text-white hover:text-purple-300`}
                        >
                            <item.icon className="h-5 w-5" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Ajustement du spacer pour le header plus petit */}
            <div className="h-[60px] lg:h-[68px]" />
        </>
    );
};

export default HeaderMain;