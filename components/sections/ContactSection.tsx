'use client';

import {
    FadeIn,
    ScrollReveal,
    SlideIn,
} from '@/components/animations/ScrollReveal';
import { Badge } from '@/components/ui/badge';
import { AnimatedText } from '@/components/animations/TypeWriter';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { ContactForm } from '@/components/common/ContactForm';
import { configCompany } from '@/config/configCompany';
import { Language } from '@/types/language';

const getContacts = (t: (key: string) => string, language: Language) => [
    {
        icon: <Mail className="text-emerald-500" size={28} />,
        title: t('contact.email.title'),
        content: configCompany.email,
        color: 'from-emerald-500/10 to-green-500/10',
    },
    {
        icon: <Phone className="text-blue-500" size={28} />,
        title: t('contact.phone.title'),
        content: configCompany.phone,
        color: 'from-blue-500/10 to-cyan-500/10',
    },
    {
        icon: <MapPin className="text-violet-500" size={28} />,
        title: t('contact.address.title'),
        content:
            language === 'en'
                ? configCompany.addressEng
                : configCompany.address,
        color: 'from-violet-500/10 to-purple-500/10',
    },
];

export function ContactSection() {
    const { t, language } = useLanguage();

    return (
        <section
            id="contact"
            className="py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-mesh-pattern opacity-20"></div>

            {/* Floating Elements */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-500/20 to-violet-500/20 rounded-full blur-xl"
            />

            <motion.div
                animate={{
                    rotate: -360,
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-full blur-xl"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <ScrollReveal direction="up">
                        <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-6 py-3 text-lg font-semibold">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {t('contact.badge')}
                        </Badge>
                        <AnimatedText
                            text={t('contact.title')}
                            className="text-3xl md:text-5xl font-black text-white mb-8"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                {t('contact.description')}
                            </p>
                        </FadeIn>
                    </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 items-start">
                    {/* Contact Info - Left Side */}
                    <div className="lg:col-span-2 space-y-8">
                        <SlideIn direction="left">
                            <div className="space-y-8">
                                {getContacts(t, language).map(
                                    (contact, index) => (
                                        <ScrollReveal
                                            key={index}
                                            direction="left"
                                            delay={index * 0.2}
                                        >
                                            <motion.div
                                                whileHover={{
                                                    x: 10,
                                                    scale: 1.02,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Card
                                                    className={`
                                                p-6 bg-gradient-to-br ${contact.color} 
                                                border-2 border-white/10 rounded-2xl
                                                hover:border-emerald-500/30 transition-all duration-300
                                                backdrop-blur-sm
                                            `}
                                                >
                                                    <div className="flex items-start space-x-4">
                                                        <motion.div
                                                            whileHover={{
                                                                scale: 1.2,
                                                                rotate: 10,
                                                            }}
                                                            className="flex-shrink-0 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                                                        >
                                                            {contact.icon}
                                                        </motion.div>
                                                        <div>
                                                            <h3 className="font-bold text-black text-lg mb-2">
                                                                {contact.title}
                                                            </h3>
                                                            <p className="text-gray-600 leading-relaxed">
                                                                {
                                                                    contact.content
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Card>
                                            </motion.div>
                                        </ScrollReveal>
                                    ),
                                )}
                            </div>
                        </SlideIn>

                        {/* Additional Info */}
                        <ScrollReveal direction="left" delay={0.6}>
                            <Card className="p-8 bg-gradient-to-br from-emerald-500/10 to-violet-500/10 border-2 border-white/10 rounded-2xl backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-black mb-4">
                                    Why Choose Us?
                                </h3>
                                <ul className="space-y-3 text-gray-600">
                                    <motion.li
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                        <span>24/7 Support Available</span>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                                        <span>Free Initial Consultation</span>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span>Rapid Response Time</span>
                                    </motion.li>
                                </ul>
                            </Card>
                        </ScrollReveal>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-3">
                        <SlideIn direction="right">
                            <Card className="bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                                <CardHeader className="text-center pb-8">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="mx-auto mb-4 p-4 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-2xl w-fit"
                                    >
                                        <Send
                                            className="text-white"
                                            size={32}
                                        />
                                    </motion.div>
                                    <CardTitle className="text-3xl font-bold text-white">
                                        {t('contact.form.title')}
                                    </CardTitle>
                                    <CardDescription className="text-gray-300 text-lg">
                                        {t('contact.form.description')}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </SlideIn>
                    </div>
                </div>

                {/* Bottom Section */}
                <ScrollReveal direction="up" delay={0.8}>
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
                            className="inline-block bg-gradient-to-r from-emerald-400 via-violet-400 to-blue-400 bg-[length:200%_100%] text-transparent bg-clip-text"
                        >
                            <h3 className="text-3xl font-bold">
                                Let's build something amazing together!
                            </h3>
                        </motion.div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
