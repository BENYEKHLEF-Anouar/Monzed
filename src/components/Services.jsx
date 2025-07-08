import { Palette, ChevronsLeftRight, Monitor, Sparkles, Rocket,Zap} from 'lucide-react';
import Cards from './Cards'

function Services() {
    const cards = [
        {icon: Palette, title:"Creative Design", description:"Stunning UI/UX that converts visitors into customers with modern, user-centered design thinking.", tags:["UI/UX Design","Brand Identity", "Prototyping", "Visual Systems"], color:"pink" },
        {icon: ChevronsLeftRight , title:"Development", description:"High-performance web and mobile applications built with cutting-edge technology stacks.", tags:["Web Apps","Mobile Apps", "APIs", "Database Design"], color:"blue" },
        {icon: Monitor, title:"Desktop Software", description:"Custom desktop applications, including CRMs and automation tools, to streamline your business operations.", tags:["Custom CRMs","Automation Software", "Business Tools", "Cross-Platform"], color:"orange" },
        {icon: Sparkles, title:"AI Integration", description:"Smart automation and AI-powered features that give your product a competitive edge.", tags:["AI Models","Automation", "Data Processing", "Smart Features"], color:"purple" },
        {icon: Rocket, title:"Launch Strategy", description:"End-to-end deployment and marketing strategy to ensure your product reaches the right audience.", tags:["Deployment","SEO", "Performance", "Analytics"], color:"green" },
        {icon: Zap, title:"Rapid Delivery", description:"Agile development process that delivers working prototypes and final products in record time.", tags:["2-3 Week Delivery","Daily Updates", "Iterative Process", "Fast Feedback"], color:"yellow" },

    ]
    return(
        <div className='bg-gray-800 text-white py-10'>
        <div className="flex flex-col items-center text-center gap-8 py-8">
            <h1 className="text-6xl font-bold ">Everything You Need, <span className="text-[#69a1f9]">Under One Roof</span></h1>
            <p className="w-2/3 text-2xl text-gray-200">From initial concept to market launch, we handle every aspect of your digital product development. No need for multiple agencies or lengthy timelines.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8'>
            {cards.map((card, index) => (
                <Cards
                    key={index}
                    Icon={card.icon}
                    title={card.title}
                    description={card.description}
                    tags={card.tags} 
                    color={card.color}
                />
            ))}
            
        </div>
        </div>
    )
}

export default Services