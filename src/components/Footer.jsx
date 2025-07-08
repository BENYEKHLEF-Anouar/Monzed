
import {
    Mail,
    MapPin,
    MessageSquare,
    Wand2,
    Building2,
    BrainCircuit,
    Globe,
    Smartphone,
    Monitor,
    PenTool,
    Zap,
    Star,
    Heart,
} from 'lucide-react';


const servicesLinks = [
    { icon: <BrainCircuit size={16} />, name: 'AI Development', href: '#' },
    { icon: <Globe size={16} />, name: 'Web Development', href: '#' },
    { icon: <Smartphone size={16} />, name: 'Mobile Apps', href: '#' },
    { icon: <Monitor size={16} />, name: 'Desktop Software', href: '#' },
    { icon: <PenTool size={16} />, name: 'UI/UX Design', href: '#' },
    { icon: <Zap size={16} />, name: '3D Design', href: '#' },
    { icon: <Star size={16} />, name: 'Rebranding', href: '#' },
];


const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Work', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Blog', href: '#' },
];


const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Sitemap', href: '#' },
];


function Footer() {
    return (
        <footer className="bg-[#1A1A2E]">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

                    <div className="lg:col-span-5">

                        {/* <h2 className="text-2xl font-bold text-white">
                            MON<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">Z</span>ED
                        </h2> */}

                        <img src="../../public/logo1.png" className="h-6" alt="Logo" />

                        <p className="mt-4 text-base leading-relaxed text-slate-400">
                            We turn your ideas into reality. Professional development, design, and digital transformation services powered by <a href="#" className="font-semibold text-purple-400 hover:text-purple-300">Starsky AI</a> and creativity.
                        </p>

                        <ul className="mt-8 space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 pt-1">
                                    <Mail className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500">Email us at</span>
                                    <a href="mailto:team@monzed.com" className="block text-base text-slate-200 hover:text-white">team@monzed.com</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 pt-1">
                                    <MapPin className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500">Location</span>
                                    <p className="text-base text-slate-200">Clermont-Ferrand, France</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="flex-shrink-0 pt-1">
                                    <MessageSquare className="h-5 w-5 text-purple-400" />
                                </div>
                                <div>
                                    <span className="text-sm text-slate-500">Need help?</span>
                                    <a href="#" className="block text-base text-slate-200 hover:text-white">Contact Support</a>
                                </div>
                            </li>
                        </ul>
                        
                    </div>

                    <div className="hidden lg:block lg:col-span-1"></div>

                    <div className="lg:col-span-3">
                        <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                            <Wand2 size={18} className="text-purple-400" />
                            Our Services
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="flex items-center gap-3 text-base text-slate-400 hover:text-white transition-colors">
                                        <span className="text-slate-500">{link.icon}</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                            <Building2 size={18} className="text-purple-400" />
                            COMPANY
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base text-slate-400 hover:text-white transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-800 pt-8 sm:flex sm:items-center sm:justify-between">
                    <div className="flex space-x-6 sm:order-2">
                        {legalLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-sm text-slate-500 hover:text-slate-300">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:order-1 sm:mt-0">
                        © {new Date().getFullYear()} Monzed. All rights reserved. Crafted with <Heart className="inline-block h-4 w-4 fill-red-500 text-red-500" /> and <a href="#" className="font-semibold text-purple-400 hover:text-purple-300">Starsky AI</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;