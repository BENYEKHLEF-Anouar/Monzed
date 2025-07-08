import { Rocket, Star, Sparkles, ArrowRight, Play} from "lucide-react";
 import Button from "./Button";
function Hero(){

    return(
        <div className="flex-1 w-full flex flex-col justify-center items-center bg-primary text-white py-6 px-6">
            <div className="flex justify-center text-purple-300 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm px-4 py-2 gap-4 border border-purple-500/30 rounded-full shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <Rocket className="w-5 h-5 animate-pulse text-purple-400" />
                <p>Creative Development Agency</p>
                <span className="flex justify-center items-center space-x-1 border-l border-purple-500/30 pl-3">
                    <Star className="text-yellow-400 fill-current h-3 w-3" />
                    <Star className="text-yellow-400 fill-current h-3 w-3" />
                    <Star className="text-yellow-400 fill-current h-3 w-3" />
                    <Star className="text-yellow-400 fill-current h-3 w-3" />
                    <Star className="text-yellow-400 fill-current h-3 w-3" />
                    </span>
            </div>
            <p className="max-w-full flex flex-col items-center text-white gap-4 py-3 font-bold text-3xl md:text-5xl lg:text-7xl mt-5">
                <span className="">Design & Build</span>
                <span className="text-[#63A4FA]">In Weeks</span>
                <span className="text-1xl md:text-2xl lg:text-3xl font-normal text-gray-300">Not Months</span>
            </p>
            <p className="py-3 text-xl md:text-2xl text-gray-300 text-center font-light max-w-4xl mx-auto" >
                We're the creative development agency that transforms your vision into reality with
                <span className="font-semibold text-purple-400"> premium quality</span>, 
                <span className="font-semibold text-blue-400"> lightning speed</span>, and 
                <span className="font-semibold text-indigo-400"> unbeatable value</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center p-3">
                <Button
                    Text="Start Your Project"
                    LeftIcon={()=> <Sparkles size={18}/>}
                    RightIcon={()=> <ArrowRight size={18}/>}
                    Variant="gradient"
                    size="md"
                    
                />
                <Button
                    Text="See Our Speed "
                    LeftIcon={()=> <Play size={18}/>}
                    Variant="normal"
                    size="md"
                />
            </div>
        </div>
    );
}
export default Hero;