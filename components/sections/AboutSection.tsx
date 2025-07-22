'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Trophy, Heart, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { CountUp } from '@/components/animations/CountUp';
import { useLanguage } from '@/hooks/useLanguage';

interface AboutSectionProps {
    scrollToSection?: (sectionId: string) => void;
}

export function AboutSection({ scrollToSection }: AboutSectionProps) {
    const { t } = useLanguage();

    const stats = [
        { number: '750+', label: t('about.stats.projects'), icon: Target },
        { number: '99%', label: t('about.stats.satisfaction'), icon: Heart },
        { number: '20+', label: t('about.stats.experience'), icon: Trophy },
        { number: '85+', label: t('about.stats.team'), icon: Users },
    ];

    const values = [
        {
            icon: <Lightbulb className="text-yellow-500" size={32} />,
            title: 'Innovation First',
            description:
                'We embrace cutting-edge technologies and creative solutions.',
            color: 'from-yellow-500/20 to-orange-500/20',
        },
        {
            icon: <Users className="text-blue-500" size={32} />,
            title: 'Team Collaboration',
            description:
                'Our diverse team works together to achieve extraordinary results.',
            color: 'from-blue-500/20 to-cyan-500/20',
        },
        {
            icon: <Zap className="text-purple-500" size={32} />,
            title: 'Rapid Delivery',
            description:
                'Fast, efficient solutions without compromising on quality.',
            color: 'from-purple-500/20 to-pink-500/20',
        },
        {
            icon: <Trophy className="text-emerald-500" size={32} />,
            title: 'Excellence',
            description:
                'We strive for perfection in every project we undertake.',
            color: 'from-emerald-500/20 to-green-500/20',
        },
    ];

    return (
        <section
            id="about"
            className="py-32 bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-mesh-pattern opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <Badge className="mb-6 bg-violet-100 text-violet-800 px-6 py-3 text-lg font-semibold">
                            {t('about.badge')}
                        </Badge>
                        <AnimatedText
                            text={t('about.title')}
                            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                {t('about.description')}
                            </p>
                        </FadeIn>
                    </ScrollReveal>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={index * 0.1}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="text-center group"
                            >
                                <Card className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800 rounded-3xl">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-2xl w-fit"
                                    >
                                        <stat.icon
                                            className="text-white"
                                            size={32}
                                        />
                                    </motion.div>
                                    <motion.div className="text-4xl font-black text-emerald-600 mb-2">
                                        <CountUp
                                            value={parseInt(
                                                stat.number.replace(/\D/g, ''),
                                            )}
                                            suffix={stat.number.replace(
                                                /\d/g,
                                                '',
                                            )}
                                            delay={0.5 + index * 0.2}
                                        />
                                    </motion.div>
                                    <div className="text-gray-600 dark:text-gray-400 font-semibold">
                                        {stat.label}
                                    </div>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Company Image */}
                    <ScrollReveal direction="left" delay={0.2}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            <img
                                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Our Team at Work"
                                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-transparent rounded-3xl"></div>
                        </motion.div>
                    </ScrollReveal>

                    {/* Office Image */}
                    <ScrollReveal direction="right" delay={0.4}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            <img
                                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Modern Office Space"
                                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/30 to-transparent rounded-3xl"></div>
                        </motion.div>
                    </ScrollReveal>

                    {values.map((value, index) => (
                        <ScrollReveal
                            key={index}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            delay={index * 0.2}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.02,
                                    rotateY: index % 2 === 0 ? 5 : -5,
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <Card
                                    className={`
                                    p-8 h-full bg-gradient-to-br ${value.color} 
                                    border-2 border-white/20 dark:border-gray-700/20 
                                    rounded-3xl hover:shadow-2xl backdrop-blur-sm
                                    dark:bg-gray-800/50
                                `}
                                >
                                    <div className="flex items-start space-x-6">
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 10,
                                            }}
                                            className="flex-shrink-0 p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-lg"
                                        >
                                            {value.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Section */}
                <ScrollReveal direction="up" delay={0.6}>
                    <div className="text-center mt-20">
                        <motion.div
                            animate={{
                                backgroundPosition: [
                                    '0% 50%',
                                    '100% 50%',
                                    '0% 50%',
                                ],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="inline-block bg-gradient-to-r from-emerald-500 via-violet-500 to-blue-500 bg-[length:200%_100%] text-transparent bg-clip-text"
                        >
                            <h3 className="text-3xl font-bold">
                                Ready to transform your vision into reality?
                            </h3>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
