'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { FadeIn, ScrollReveal } from '@/components/animations/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { motion } from 'framer-motion';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getProjects = (t: (key: string) => string) => [
    {
        title: t('portfolio.ecommerce.title'),
        category: t('portfolio.ecommerce.category'),
        description: t('portfolio.ecommerce.description'),
        image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React', 'Node.js', 'AI', 'E-commerce'],
        color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
        title: t('portfolio.healthcare.title'),
        category: t('portfolio.healthcare.category'),
        description: t('portfolio.healthcare.description'),
        image: 'https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['React Native', 'Healthcare', 'Real-time'],
        color: 'from-emerald-500/20 to-green-500/20',
    },
    {
        title: t('portfolio.financial.title'),
        category: t('portfolio.financial.category'),
        description: t('portfolio.financial.description'),
        image: 'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Vue.js', 'Analytics', 'Dashboard'],
        color: 'from-purple-500/20 to-pink-500/20',
    },
    {
        title: t('portfolio.security.title'),
        category: t('portfolio.security.category'),
        description: t('portfolio.security.description'),
        image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['Python', 'Security', 'AI'],
        color: 'from-red-500/20 to-orange-500/20',
    },
    {
        title: t('portfolio.iot.title'),
        category: t('portfolio.iot.category'),
        description: t('portfolio.iot.description'),
        image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['IoT', 'Smart Home', 'Automation'],
        color: 'from-indigo-500/20 to-blue-500/20',
    },
    {
        title: t('portfolio.cloud.title'),
        category: t('portfolio.cloud.category'),
        description: t('portfolio.cloud.description'),
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['AWS', 'Migration', 'DevOps'],
        color: 'from-yellow-500/20 to-orange-500/20',
    },
];

export function PortfolioSection() {
    const { t } = useLanguage();

    return (
        <section
            id="portfolio"
            className="py-32 bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-mesh-pattern opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <Badge className="mb-6 bg-blue-100 text-blue-800 px-6 py-3 text-lg font-semibold">
                            {t('portfolio.badge')}
                        </Badge>
                        <AnimatedText
                            text={t('portfolio.title')}
                            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                {t('portfolio.description')}
                            </p>
                        </FadeIn>
                    </ScrollReveal>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {getProjects(t).map((project, index) => (
                        <ScrollReveal
                            key={index}
                            direction="up"
                            delay={index * 0.1}
                        >
                            <motion.div
                                whileHover={{
                                    y: -20,
                                    scale: 1.03,
                                    rotateX: 5,
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
                                    overflow-hidden h-full bg-gradient-to-br ${project.color}
                                    border-2 border-white/20 dark:border-gray-700/20 
                                    rounded-3xl hover:shadow-2xl backdrop-blur-sm
                                    dark:bg-gray-800/50
                                `}
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden rounded-t-3xl">
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-56 object-cover"
                                        />

                                        {/* Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                                        >
                                            <div className="flex space-x-4">
                                                <Button
                                                    size="sm"
                                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                                >
                                                    <Play
                                                        size={16}
                                                        className="mr-2"
                                                    />
                                                    Demo
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="border-white/30 text-white hover:bg-white/20"
                                                >
                                                    <Github
                                                        size={16}
                                                        className="mr-2"
                                                    />
                                                    Code
                                                </Button>
                                            </div>
                                        </motion.div>

                                        {/* Category Badge */}
                                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 font-semibold">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    {/* Content */}
                                    <CardHeader className="p-8">
                                        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                                            {project.description}
                                        </CardDescription>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(
                                                (tag, tagIndex) => (
                                                    <motion.span
                                                        key={tagIndex}
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        className="px-3 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ),
                                            )}
                                        </div>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
