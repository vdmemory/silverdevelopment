'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, Smartphone, Cloud, Database, Cpu } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, FadeIn } from '@/components/animations/ScrollReveal';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { useLanguage } from '@/hooks/useLanguage';

export function ServicesSection() {
    const { t } = useLanguage();

    const services = [
        {
            icon: <Code2 className="text-emerald-600" size={48} />,
            title: t('services.software.title'),
            description: t('services.software.description'),
            color: 'from-emerald-500/10 to-emerald-600/10',
            borderColor: 'border-emerald-200 dark:border-emerald-800',
        },
        {
            icon: <Shield className="text-violet-600" size={48} />,
            title: t('services.security.title'),
            description: t('services.security.description'),
            color: 'from-violet-500/10 to-violet-600/10',
            borderColor: 'border-violet-200 dark:border-violet-800',
        },
        {
            icon: <Smartphone className="text-blue-600" size={48} />,
            title: t('services.mobile.title'),
            description: t('services.mobile.description'),
            color: 'from-blue-500/10 to-blue-600/10',
            borderColor: 'border-blue-200 dark:border-blue-800',
        },
        {
            icon: <Cloud className="text-orange-600" size={48} />,
            title: t('services.cloud.title'),
            description: t('services.cloud.description'),
            color: 'from-orange-500/10 to-orange-600/10',
            borderColor: 'border-orange-200 dark:border-orange-800',
        },
        {
            icon: <Database className="text-pink-600" size={48} />,
            title: 'Data Analytics',
            description:
                'Advanced data processing and analytics solutions for business intelligence.',
            color: 'from-pink-500/10 to-pink-600/10',
            borderColor: 'border-pink-200 dark:border-pink-800',
        },
        {
            icon: <Cpu className="text-indigo-600" size={48} />,
            title: 'AI Solutions',
            description:
                'Cutting-edge artificial intelligence and machine learning implementations.',
            color: 'from-indigo-500/10 to-indigo-600/10',
            borderColor: 'border-indigo-200 dark:border-indigo-800',
        },
    ];

    return (
        <section
            id="services"
            className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500 via-violet-500 to-blue-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-6 py-3 text-lg font-semibold">
                            {t('services.badge')}
                        </Badge>
                        <AnimatedText
                            text={t('services.title')}
                            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                {t('services.description')}
                            </p>
                        </FadeIn>
                    </ScrollReveal>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={index * 0.15}
                        >
                            <motion.div
                                whileHover={{
                                    y: -15,
                                    scale: 1.03,
                                    rotateY: 5,
                                }}
                                transition={{
                                    duration: 0.4,
                                    type: 'spring',
                                    stiffness: 300,
                                }}
                                className="group h-full"
                            >
                                <Card
                                    className={`
                                    card-hover h-full bg-gradient-to-br ${service.color} 
                                    border-2 ${service.borderColor} rounded-3xl p-8
                                    hover:shadow-2xl hover:shadow-emerald-500/10
                                    dark:bg-gray-800/50 backdrop-blur-sm
                                `}
                                >
                                    <CardHeader className="text-center pb-6">
                                        <motion.div
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 10,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="mx-auto mb-6 p-4 bg-white dark:bg-gray-700 rounded-2xl shadow-lg group-hover:shadow-xl w-fit"
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
