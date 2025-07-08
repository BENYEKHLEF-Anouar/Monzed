import { Clock4, Zap, TrendingUp } from 'lucide-react'
import Project from './Project'
import Button from "./Button";

function Works() {
    const projects = [
        { link: "https://starsky.app", title: "Starsky.app", description: "Revolutionary AI-powered SaaS platform that transforms ideas into functional web applications instantly.", tags: ["AI SaaS", "Full-Stack", "Real-time"], Highlight: "Full platform with AI integration" },
        { link: "https://autoshorts.ai", title: "Autoshorts", description: "AI video processing tool that automatically creates viral shorts with effects, captions, and music.", tags: ["AI Video", "Processing", "Automation"], Highlight: "Complex AI video processing" },
        { link: "https://paperclip.pythonanywhere.com/", title: "Paperclip", description: "Digital security platform for monitoring data breaches and protecting digital footprints.", tags: ["Security", "Data Protection", "Monitoring"], Highlight: "Enterprise-grade security" },
    ]
    return (
        <div className="bg-gray-900 py-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white reveal leading-relaxed active">
                    <span className="text-transparent bg-clip-text inline-block bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
                        Real Results
                    </span>, Real Fast
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto reveal leading-relaxed active">
                    See how we've delivered complex, high-performance applications in just weeks, not months. Each project showcases our ability to combine creative design with cutting-edge technology.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 max-w-3xl mx-auto'>
                <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/50">
                    <Clock4 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2" >2-3 Weeks</h3>
                    <p className="text-gray-300">Average Delivery Time</p>
                </div>
                <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/50">
                    <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2" >100%</h3>
                    <p className="text-gray-300">On-Time Delivery</p>
                </div>
                <div className="text-center bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-600/50">
                    <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2" >50%</h3>
                    <p className="text-gray-300">Cost Savings vs Traditional</p>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8'>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        link={project.link}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        highlight={project.Highlight}
                    />
                ))}
            </div>

        <div className="flex flex-col items-center max-w-6xl mx-auto rounded-3xl bg-gradient-to-b from-[#221F44] to-[#17254D] py-16 px-8 text-center mb-10">

                <h2 className="mb-6 text-4xl font-bold text-white">
                    Ready to See Your Project Come to Life?
                </h2>

                <p className="mx-auto mb-10 max-w-3xl text-lg text-slate-300">
                    Join the ranks of successful businesses who chose speed, quality, and affordability.
                </p>

                <button className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3 text-base font-bold text-white transition-transform duration-300 hover:scale-105">
                    Start Your 2-Week Project
                </button>

                {/* <div class="flex justify-center">
                    <Button
                        Text="Start Your Project"
                        Variant="gradient"
                        size="lg"
                    />
                </div> */}
                
            </div>
        </div>
    )
}
export default Works;