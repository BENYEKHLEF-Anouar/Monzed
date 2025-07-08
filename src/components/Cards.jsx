import Tags from "./Tags"
// import {clsx} from "clsx"

function Cards({Icon, title, description, tags, color}) {
    const colorVariants = {
        blue: {text:"text-blue-400", gradient:"bg-gradient-to-br from-blue-600 to-indigo-600"},
        orange: {text:"text-orange-400", gradient:"bg-gradient-to-br from-orange-500 to-red-500"},
        purple: {text:"text-purple-400", gradient:"bg-gradient-to-br from-purple-600 to-blue-600"},
        yellow: {text:"text-yellow-400", gradient:"bg-gradient-to-br from-yellow-500 to-orange-500"},
        pink: {text:"text-pink-400", gradient:"bg-gradient-to-br from-pink-600 to-purple-600"},
        green: {text:"text-green-400", gradient:"bg-gradient-to-br from-green-600 to-teal-600"},
        // autres couleurs
        };
    return(
        <div className="group flex flex-col gap-5 bg-gray-900/90 p-8 rounded-lg shadow-xl hover:shadow-2xl border border-gray-600/50 hover:border-purple-500/50 hover:-translate-y-4 transition-all duration-500 backdrop-blur-sm ">
            <div className={`${colorVariants[color].gradient} w-16 h-16 rounded-2xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {Icon && <Icon />}    
            </div>
            <h3 className={`${colorVariants[color].text}  text-2xl font-bold mb-4 group-hover:text-white transition-colors`} >{title}</h3>
            <p className="text-gray-300">{description}</p>
            <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
                {tags.map((tag) => (
                    <Tags text={tag}/>
                ))}
            </div>
            
        </div>
    )
}

export default Cards