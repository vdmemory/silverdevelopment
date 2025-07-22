'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { TypeWriter, AnimatedText } from '@/components/animations/TypeWriter';
import { useLanguage } from '@/hooks/useLanguage';
import hero from '@/assets/hero.png';

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
    const { t } = useLanguage();

    const floatingElements = [
        { icon: Sparkles, delay: 0, position: 'top-20 left-10' },
        { icon: Zap, delay: 1, position: 'top-40 right-20' },
        { icon: Rocket, delay: 2, position: 'bottom-40 left-20' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-violet-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-mesh-pattern"></div>

            {/* Floating Icons */}
            {floatingElements.map((element, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${element.position} opacity-20 dark:opacity-10`}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 6,
                        delay: element.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <element.icon size={60} className="text-emerald-500" />
                </motion.div>
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <FadeIn delay={0.2}>
                            <Badge className="mb-6 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 px-6 py-2 text-lg">
                                <Sparkles className="w-5 h-5 mr-2" />
                                {t('hero.badge')}
                            </Badge>
                        </FadeIn>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight">
                                <AnimatedText
                                    text={t('hero.title.transform')}
                                    delay={0.6}
                                />
                                <br />
                                <TypeWriter
                                    text={t('hero.title.innovation')}
                                    delay={1500}
                                    className="gradient-text text-shimmer"
                                />
                            </h1>
                        </motion.div>

                        <ScrollReveal direction="left" delay={0.8}>
                            <p className="text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                                {t('hero.description')}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={1.0}>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="lg"
                                        className="btn-gradient text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25"
                                        onClick={() =>
                                            scrollToSection('contact')
                                        }
                                    >
                                        {t('hero.cta.start')}
                                        <ArrowRight
                                            className="ml-3"
                                            size={24}
                                        />
                                    </Button>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white px-12 py-8 text-xl font-bold rounded-2xl"
                                        onClick={() =>
                                            scrollToSection('portfolio')
                                        }
                                    >
                                        {t('hero.cta.portfolio')}
                                    </Button>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column - Visual Element */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="relative"
                        >
                            {/* Hero Image */}
                            <div className="relative mb-8">
                                <motion.img
                                    // src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    src={hero.src}
                                    alt="Technology Innovation"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full object-cover rounded-3xl"
                                />
                                <div className="absolute inset-0"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-emerald-500 rounded-full mt-2"
                    />
                </div>
            </motion.div>
        </section>
    );
}
