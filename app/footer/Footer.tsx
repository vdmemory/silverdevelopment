import { FadeIn } from '@/components/animations/ScrollReveal';
import { SocialLinks } from '@/components/common/SocialLinks';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { configCompany } from '@/config/configCompany';
import { Rocket, Heart, Zap } from 'lucide-react';

const getFooterLinks = (t: (key: string) => string) => [
    {
        title: t('footer.services.title'),
        items: [
            { title: t('footer.services.software'), key: 'services' },
            { title: t('footer.services.security'), key: 'services' },
            { title: t('footer.services.mobile'), key: 'services' },
            { title: t('footer.services.cloud'), key: 'services' },
        ],
    },
    {
        title: t('footer.company.title'),
        items: [
            { title: t('footer.company.about'), key: 'about' },
            { title: t('footer.company.team'), key: 'team' },
            { title: t('footer.company.projects'), key: 'portfolio' },
            { title: t('footer.company.contact'), key: 'contact' },
        ],
    },
];

interface FooterProps {
    scrollToSection?: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
    const { t, language } = useLanguage();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>

            {/* Floating Icons */}
            <motion.div
                animate={{
                    rotate: 360,
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute top-10 right-20 opacity-20"
            >
                <Rocket size={40} className="text-emerald-500" />
            </motion.div>

            <motion.div
                animate={{
                    rotate: -360,
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                className="absolute bottom-10 left-20 opacity-20"
            >
                <Zap size={35} className="text-violet-500" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <FadeIn>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="mb-8"
                            >
                                <div className="flex items-center mb-6">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-violet-500 rounded-xl flex items-center justify-center mr-4"
                                    >
                                        <Rocket
                                            className="text-white"
                                            size={24}
                                        />
                                    </motion.div>
                                    <h3 className="text-4xl font-black bg-gradient-to-r from-emerald-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                                        {configCompany.name}
                                    </h3>
                                </div>

                                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                                    <p>
                                        {language === 'en'
                                            ? configCompany.infoEng
                                            : configCompany.info}
                                    </p>
                                    <p>
                                        {language === 'en'
                                            ? configCompany.addressEng
                                            : configCompany.address}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <SocialLinks variant="footer" />
                                </div>
                            </motion.div>
                        </FadeIn>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-2">
                        <div className="grid md:grid-cols-2 gap-8">
                            {getFooterLinks(t).map((section, index) => (
                                <FadeIn
                                    key={section.title}
                                    delay={0.2 + index * 0.1}
                                >
                                    <div>
                                        <h4 className="font-bold mb-6 text-white text-xl">
                                            {section.title}
                                        </h4>
                                        <ul className="space-y-4">
                                            {section.items.map(
                                                (item, itemIndex) => (
                                                    <motion.li
                                                        key={item.key}
                                                        whileHover={{
                                                            x: 5,
                                                            color: '#10b981',
                                                        }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                        className="cursor-pointer text-gray-400 hover:text-emerald-400 transition-colors"
                                                    >
                                                        <a
                                                            href={`#${item.key}`}
                                                            onClick={() =>
                                                                scrollToSection?.(
                                                                    item.key,
                                                                )
                                                            }
                                                            className="flex items-center space-x-2"
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                                            <span>
                                                                {item.title}
                                                            </span>
                                                        </a>
                                                    </motion.li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="border-t border-white/10 mt-16 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-2 text-gray-400">
                            <span>
                                © {new Date().getFullYear()}{' '}
                                {configCompany.name}.
                            </span>
                            <span>{t('footer.copyright')}</span>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 text-emerald-400"
                        >
                            <span>Made with</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Heart
                                    className="text-red-500"
                                    size={16}
                                    fill="currentColor"
                                />
                            </motion.div>
                            <span>by {configCompany.name}</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
