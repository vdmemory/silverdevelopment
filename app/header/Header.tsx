'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/app/header/Navigation';
import { MobileMenu } from '@/app/header/MobileMenu';
import { useEffect, useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { configCompany } from '@/config/configCompany';
import logo from '../../assets/logo.png';

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
    isMenuOpen?: boolean;
    setIsMenuOpen?: (isOpen: boolean) => void;
}

export function Header({
    scrollToSection,
    isMenuOpen,
    setIsMenuOpen,
}: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl border-b border-emerald-200/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center cursor-pointer group"
                        onClick={() => scrollToSection?.('home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={logo.src}
                                alt="Company Logo"
                                className="w-12 h-12 rounded-xl"
                            />
                        </motion.div>
                        <div className="ml-4">
                            <span className="text-3xl font-black bg-gradient-to-r from-emerald-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                                {configCompany.name}
                            </span>
                            <motion.div
                                animate={{ width: ['0%', '100%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="h-0.5 bg-gradient-to-r from-emerald-500 to-violet-500 rounded-full"
                            />
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <Navigation scrollToSection={scrollToSection} />

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsMenuOpen?.(!isMenuOpen)}
                            className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-violet-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <motion.div
                                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>
                </div>
            </div>

            <MobileMenu
                scrollToSection={scrollToSection}
                isMenuOpen={isMenuOpen}
            />
        </motion.nav>
    );
}
