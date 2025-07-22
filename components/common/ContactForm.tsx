import { useLanguage } from '@/hooks/useLanguage';
import { FadeIn } from '@/components/animations/ScrollReveal';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, Sparkles } from 'lucide-react';
import { configCompany } from '@/config/configCompany';

const actionEmail = `https://formsubmit.co/${configCompany.formEmail}`;

export function ContactForm() {
    const { t } = useLanguage();

    return (
        <form action={actionEmail} method="POST" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeIn delay={0.2}>
                    <div className="space-y-2">
                        <label className="text-white font-semibold text-sm">
                            {t('contact.form.firstName')}
                        </label>
                        <Input
                            name="firstName"
                            placeholder={t('contact.form.firstName')}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div className="space-y-2">
                        <label className="text-white font-semibold text-sm">
                            {t('contact.form.lastName')}
                        </label>
                        <Input
                            name="lastName"
                            placeholder={t('contact.form.lastName')}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 focus:border-emerald-500 focus:ring-emerald-500"
                        />
                    </div>
                </FadeIn>
            </div>

            <FadeIn delay={0.4}>
                <div className="space-y-2">
                    <label className="text-white font-semibold text-sm">
                        {t('contact.form.email')}
                    </label>
                    <Input
                        name="email"
                        placeholder={t('contact.form.email')}
                        type="email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                </div>
            </FadeIn>

            <FadeIn delay={0.5}>
                <div className="space-y-2">
                    <label className="text-white font-semibold text-sm">
                        {t('contact.form.company')}
                    </label>
                    <Input
                        name="company"
                        placeholder={t('contact.form.company')}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                </div>
            </FadeIn>

            <FadeIn delay={0.6}>
                <div className="space-y-2">
                    <label className="text-white font-semibold text-sm">
                        Message
                    </label>
                    <Textarea
                        name="message"
                        placeholder={t('contact.form.message')}
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl resize-none focus:border-emerald-500 focus:ring-emerald-500"
                    />
                </div>
            </FadeIn>

            <FadeIn delay={0.7}>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button className="w-full btn-gradient text-white py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 group">
                        <Sparkles
                            className="mr-3 group-hover:animate-spin"
                            size={20}
                        />
                        {t('contact.form.submit')}
                        <Send
                            className="ml-3 group-hover:translate-x-1 transition-transform"
                            size={20}
                        />
                    </Button>
                </motion.div>
            </FadeIn>
        </form>
    );
}
