import { Zap, Shield, DollarSign, CircleDot, Rocket, Clock } from 'lucide-react';

const qualityData = [
    {
        icon: <Zap size={32} className="text-white" />,
        stat: "2-3 Weeks",
        statSubtitle: "From concept to launch",
        title: "Lightning Fast Delivery",
        description: "While others take months, we deliver complete solutions in 2-3 weeks through our streamlined process and efficient workflows.",
        gradient: "bg-gradient-to-br from-indigo-500 to-blue-500",
        statColor: "text-blue-400",
    },
    {
        icon: <Shield size={32} className="text-white" />,
        stat: "100% Quality",
        statSubtitle: "Enterprise-grade solutions",
        title: "Premium Quality, Always",
        description: "We never compromise on quality. Every line of code, every design element is crafted to enterprise standards.",
        gradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
        statColor: "text-purple-400",
    },
    {
        icon: <DollarSign size={32} className="text-white" />,
        stat: "50% Less",
        statSubtitle: "Than traditional agencies",
        title: "Unbeatable Value",
        description: "Get more for less. Our efficient process allows us to offer premium services at costs that traditional agencies can't match.",
        gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
        statColor: "text-pink-400",
    },
    {
        icon: <CircleDot size={32} className="text-white" />,
        stat: "360° Service",
        statSubtitle: "End-to-end support",
        title: "Comprehensive Coverage",
        description: "From initial concept and strategy to deployment and ongoing support, we cover every aspect of your project's lifecycle.",
        gradient: "bg-gradient-to-br from-purple-500 to-indigo-500",
        statColor: "text-purple-400",
    },
    {
        icon: <Rocket size={32} className="text-white" />,
        stat: "100% Success",
        statSubtitle: "Guaranteed project delivery",
        title: "Mission Accomplished",
        description: "Our track record speaks for itself. We are committed to delivering on our promises, ensuring your project is a complete success.",
        gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
        statColor: "text-cyan-400",
    },
    {
        icon: <Clock size={32} className="text-white" />,
        stat: "Daily Updates",
        statSubtitle: "Complete transparency",
        title: "Constant Communication",
        description: "Stay in the loop with daily progress reports. We believe in transparent communication to keep you informed every step of the way.",
        gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
        statColor: "text-indigo-400",
    },
];

// function QualityCard(props) {
//     const item = props.item;
// }
const QualityCard = ({ item }) => {
    return (
        <div className="bg-[#242246] rounded-3xl p-8 text-left h-full flex flex-col border border-transparent hover:border-purple-500/50 transition-all duration-300 ease-in-out hover:-translate-y-2">

            <div className={`w-16 h-16 rounded-2xl flex justify-center items-center mb-6 shadow-lg ${item.gradient}`}>
                {item.icon}
            </div>

            <div className="mb-8">
                <h3 className={`text-3xl font-bold ${item.statColor}`}>{item.stat}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.statSubtitle}</p>
            </div>

            <div className="flex-grow">
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
            </div>
        </div>
    );
};


function Qualities() {
    
    return (
        <div className="bg-[#1A1A2E] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        Why We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Different</span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        We've revolutionized the development process. Where others see complexity and long timelines, we see opportunity to deliver faster, better, and more affordably.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-none grid-cols-3 gap-8 sm:mt-20">
                    {qualityData.map((item, index) => (
                        <QualityCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Qualities;