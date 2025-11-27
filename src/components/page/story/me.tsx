'use client';

import { OptimizedImage } from "@/components/common/optimized-image";
import { FaLightbulb, FaCode, FaUsers, FaCog, FaChartLine, FaGraduationCap, FaBriefcase, FaRocket, FaGlobe, FaBuilding, FaUserMd, FaBrain, FaDatabase, FaMicrochip, FaServer, FaCloud, FaNetworkWired, FaRobot, FaChartBar, FaHandshake } from 'react-icons/fa';
import { motion } from 'motion/react';

interface Education {
  degree: string;
  icon: string;
}

interface Highlight {
  icon: string;
  text: string;
}

interface Founder {
  id: number;
  name: string;
  title: string;
  role: string;
  description?: string;
  education?: Education[];
  highlights?: Highlight[];
  expertise: string[];
  vision: string;
  image: string;
}

interface AboutSectionProps {
  founders: Founder[];
  lang?: string;
}

function AboutSection({ founders, lang = 'en' }: AboutSectionProps) {
    const getExpertiseIcon = (expertise: string) => {
        switch (expertise.toLowerCase()) {
            case 'system architecture': return <FaCog className="w-4 h-4" />;
            case 'full-stack development': return <FaCode className="w-4 h-4" />;
            case 'business analysis': return <FaChartLine className="w-4 h-4" />;
            case 'project management': return <FaUsers className="w-4 h-4" />;
            default: return <FaCog className="w-4 h-4" />;
        }
    };

    const getEducationIcon = (iconName: string) => {
        switch (iconName) {
            case 'medical': return <FaUserMd className="w-4 h-4" />;
            case 'business': return <FaBriefcase className="w-4 h-4" />;
            case 'code': return <FaCode className="w-4 h-4" />;
            case 'data': return <FaDatabase className="w-4 h-4" />;
            case 'ai': return <FaBrain className="w-4 h-4" />;
            case 'cloud': return <FaCloud className="w-4 h-4" />;
            case 'hardware': return <FaMicrochip className="w-4 h-4" />;
            case 'network': return <FaNetworkWired className="w-4 h-4" />;
            case 'server': return <FaServer className="w-4 h-4" />;
            default: return <FaGraduationCap className="w-4 h-4" />;
        }
    };

    const getHighlightIcon = (iconName: string) => {
        switch (iconName) {
            case 'globe': return <FaGlobe className="w-4 h-4" />;
            case 'building': return <FaBuilding className="w-4 h-4" />;
            case 'rocket': return <FaRocket className="w-4 h-4" />;
            case 'robot': return <FaRobot className="w-4 h-4" />;
            case 'chart': return <FaChartBar className="w-4 h-4" />;
            case 'handshake': return <FaHandshake className="w-4 h-4" />;
            case 'brain': return <FaBrain className="w-4 h-4" />;
            case 'code': return <FaCode className="w-4 h-4" />;
            case 'server': return <FaServer className="w-4 h-4" />;
            default: return <FaRocket className="w-4 h-4" />;
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {lang === 'th' ? 'ผู้ก่อตั้ง' : 'Founders'}
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        {lang === 'th'
                            ? 'ผู้นำที่อยู่เบื้องหลังวิสัยทัศน์ของ UPLIFT Technology'
                            : "The leaders behind UPLIFT Technology's vision"
                        }
                    </p>
                </motion.div>

                {/* Founders Grid */}
                <div className="grid gap-12 lg:gap-16">
                    {founders.map((founder, index) => (
                        <motion.div 
                            key={founder.id}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Profile Image */}
                            <div className={`flex justify-center ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                <motion.div
                                    className="relative"
                                    whileHover={{ scale: 1.05, rotateY: 5 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ perspective: "1000px" }}
                                >
                                    {/* 3D Frame Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-3'} shadow-2xl`} />
                                    <div className={`absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent rounded-2xl transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`} />
                                    
                                    <div className="relative transform translate-x-2 translate-y-2">
                                        <OptimizedImage
                                            src={founder.image}
                                            width={380}
                                            height={380}
                                            alt={founder.name}
                                            className="rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl border-4 border-white dark:border-slate-100"
                                            fallbackSrc={`https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&size=380&background=0175BC&color=fff`}
                                            timeout={10000}
                                        />
                                    </div>
                                    
                                    {/* Floating Badge */}
                                    <div className={`absolute -bottom-4 -right-4 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                                        {founder.title.split(' ')[0]}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                {/* Name & Title */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                            {founder.name}
                                        </span>
                                    </h3>
                                    <p className="text-lg font-medium text-orange-500 mb-1">
                                        {founder.title}
                                    </p>
                                    <p className="text-base text-slate-600 dark:text-slate-400">
                                        {founder.role}
                                    </p>
                                </div>
                        
                                {/* Visual Icon Row - Education (Orange) + Experience (Emerald) */}
                                {(founder.education || founder.highlights) && (
                                    <div className="flex flex-wrap gap-3">
                                        {/* Education Icons - Orange/Amber */}
                                        {founder.education?.map((edu, eduIndex) => (
                                            <div key={`edu-${eduIndex}`} className="group relative">
                                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-full text-white cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200">
                                                    {getEducationIcon(edu.icon)}
                                                </div>
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 shadow-lg">
                                                    {edu.degree}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white" />
                                                </div>
                                            </div>
                                        ))}
                                        {/* Experience/Highlights Icons - Emerald/Teal */}
                                        {founder.highlights?.map((highlight, hIndex) => (
                                            <div key={`hl-${hIndex}`} className="group relative">
                                                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full text-white cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200">
                                                    {getHighlightIcon(highlight.icon)}
                                                </div>
                                                {/* Tooltip */}
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10 shadow-lg max-w-[200px] text-center">
                                                    {highlight.text}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-white" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Fallback to description if no education/highlights */}
                                {(!founder.education || founder.education.length === 0) &&
                                 (!founder.highlights || founder.highlights.length === 0) &&
                                 founder.description && (
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {founder.description}
                                    </p>
                                )}

                                {/* Expertise - Compact Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {founder.expertise.slice(0, 4).map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50"
                                        >
                                            <span className="text-blue-500 dark:text-blue-400">
                                                {getExpertiseIcon(skill)}
                                            </span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Vision Statement - Compact Quote Style */}
                                <div className="relative pl-4 border-l-2 border-blue-500">
                                    <FaLightbulb className="absolute -left-2.5 top-0 w-4 h-4 text-blue-500 bg-slate-50 dark:bg-slate-900" />
                                    <p className="text-sm text-slate-600 dark:text-slate-400 italic line-clamp-3">
                                        &ldquo;{founder.vision.length > 150 ? founder.vision.substring(0, 150) + '...' : founder.vision}&rdquo;
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
