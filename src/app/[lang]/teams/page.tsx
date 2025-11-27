import React from "react";
import Nav from "@/components/basic/nav/resnav";
import Footer from "@/components/layout/footer/footer";
import AboutSection from "@/components/page/story/me";
import AgileSection from "@/components/page/teams/agile-section";
import MembersCarousel from "@/components/page/teams/members-carousel";
import { Mail, Users, ArrowRight } from 'lucide-react';
import { AnimateEffect } from "@/components/common/animate-effect";

// Dynamic import of team data
const getTeamsData = async (locale: string) => {
    try {
        const teamsData = await import(`@/data/teams/${locale}.json`);
        return teamsData.default;
    } catch {
        // Fallback to English if locale file doesn't exist
        const teamsData = await import(`@/data/teams/en.json`);
        return teamsData.default;
    }
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const teamsData = await getTeamsData(lang);

    return {
        title: teamsData.title,
        description: teamsData.description,
        openGraph: {
            title: teamsData.title,
            description: teamsData.description,
            url: `https://uplifttech.store/${lang}/teams`,
            type: 'website',
            images: [
                {
                    url: '/og/teams.jpg',
                    width: 1200,
                    height: 630,
                    alt: lang === 'th' ? 'UPLIFT ทีมงาน' : 'UPLIFT Team',
                },
            ],
        },
        alternates: {
            canonical: `/${lang}/teams`,
            languages: {
                en: '/en/teams',
                th: '/th/teams',
            },
        },
    };
}

const TeamsPage = async ({ params }: { params: Promise<{ lang: string }> }) => {
    const { lang } = await params;
    const teamsData = await getTeamsData(lang);

    return (
        <>
            <Nav />
            <main className="relative w-full overflow-x-hidden">
                {/* Hero Section - Modern Design */}
                <section className="relative py-28 md:py-36 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-cyan-50 dark:from-slate-900 dark:via-blue-950/30 dark:to-slate-900" />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/3 rounded-full blur-3xl" />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <AnimateEffect index={0}>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-8">
                                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                                    {lang === 'th' ? 'ทีมงานของเรา' : 'Our Team'}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                    {teamsData.hero.title}
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
                                {teamsData.hero.subtitle}
                            </p>

                            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                                {teamsData.hero.description}
                            </p>
                        </AnimateEffect>
                    </div>

                    {/* Curved Divider */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-slate-50 dark:fill-slate-900" />
                        </svg>
                    </div>
                </section>

                {/* Founders Section */}
                <AboutSection founders={teamsData.founders} lang={lang} />

                {/* Curved Divider between Founders and Team Members */}
                {teamsData.members && teamsData.members.length > 0 && (
                    <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
                        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                            <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" className="fill-white dark:fill-slate-900" />
                        </svg>
                    </div>
                )}

                {/* Team Members Carousel */}
                {teamsData.members && teamsData.members.length > 0 && (
                    <MembersCarousel members={teamsData.members} lang={lang} />
                )}

                {/* Agile Methodology Section */}
                <AgileSection lang={lang} />

                {/* Join Our Team CTA - Enhanced from home page */}
                <section className="relative py-24 bg-background overflow-hidden">
                    {/* Animated background patterns */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />

                        {/* Glowing tech lines */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rotate-45 animate-pulse" />
                            <div className="absolute top-3/4 right-1/4 w-40 sm:w-64 md:w-80 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent -rotate-45 animate-pulse delay-1000" />
                            <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-64 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rotate-90 animate-pulse delay-2000" />
                        </div>

                        {/* Abstract geometric shapes */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-blue-500 rounded-full animate-spin-slow" />
                            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-purple-500 rounded-lg rotate-45 animate-bounce-slow" />
                            <div className="absolute top-1/2 right-10 sm:right-20 md:right-40 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse" />
                        </div>
                    </div>

                    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
                        {/* Main CTA Card */}
                        <div className="relative bg-gray-900 dark:bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/20 mx-auto max-w-5xl overflow-hidden">
                            {/* Metallic sheen overlay */}
                            <div className="absolute inset-0 dark:hidden pointer-events-none rounded-2xl sm:rounded-3xl" />

                            <div className="relative z-10 text-center space-y-6 sm:space-y-8">
                                {/* Headline */}
                                <div className="space-y-3 sm:space-y-4">
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-gray-900 leading-tight px-2 sm:px-0">
                                        {lang === 'th' ? 'ร่วมสร้าง' : 'Join Us to Build'}{" "}
                                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 dark:from-blue-600 dark:via-purple-600 dark:to-cyan-600 bg-clip-text text-transparent">
                                            {lang === 'th' ? 'นวัตกรรม' : 'Innovation'}
                                        </span>
                                        <br />
                                        {lang === 'th' ? 'ไปด้วยกัน' : 'Together'}
                                    </h2>

                                    <p className="text-base sm:text-lg md:text-xl text-neutral-300 dark:text-gray-700 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                                        {lang === 'th'
                                            ? 'เรามองหาคนเก่งที่พร้อมสร้างนวัตกรรมและเติบโตไปด้วยกัน ร่วมเป็นส่วนหนึ่งของทีมที่กำลังเปลี่ยนแปลงโลกเทคโนโลยี'
                                            : 'We\'re looking for talented individuals ready to innovate and grow with us. Join a team that\'s changing the world of technology'
                                        }
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                                    <a
                                        href="mailto:careers@uplifttechbiz.com"
                                        className="w-full sm:w-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group min-w-0"
                                    >
                                        <Mail className="text-gray-900 dark:text-white group-hover:animate-bounce flex-shrink-0 h-5 w-5" />
                                        <span className="truncate">{lang === 'th' ? 'ส่งใบสมัคร' : 'Send Application'}</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0 h-5 w-5" />
                                    </a>

                                    <a
                                        href="mailto:uplifttechbiz@gmail.com"
                                        className="w-full sm:w-auto border-2 border-neutral-600 dark:border-gray-700 text-white dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-white dark:hover:border-gray-900 hover:bg-white/10 dark:hover:bg-gray-900/10 transition-all duration-300 min-w-0"
                                    >
                                        <span className="truncate">{lang === 'th' ? 'สอบถามข้อมูลเพิ่มเติม' : 'Ask for More Info'}</span>
                                    </a>
                                </div>

                                {/* Trust indicators */}
                                <div className="pt-6 sm:pt-8 border-t border-neutral-700 dark:border-gray-300">
                                    <p className="text-sm text-neutral-400 dark:text-gray-600 mb-3 sm:mb-4 px-2 sm:px-0">
                                        {lang === 'th' ? 'เติบโตไปกับบริษัทเทคโนโลยีอันดับต้นของประเทศ' : 'Grow with Thailand\'s leading technology company'}
                                    </p>
                                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
                                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-neutral-500 dark:text-gray-500">REMOTE</div>
                                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-neutral-500 dark:text-gray-500">FLEXIBLE</div>
                                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-neutral-500 dark:text-gray-500">GROWTH</div>
                                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-neutral-500 dark:text-gray-500">INNOVATION</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default TeamsPage;