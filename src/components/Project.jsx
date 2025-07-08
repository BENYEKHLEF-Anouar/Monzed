import Button from "./Button";
import Tags from "./Tags";
import {Globe, ExternalLink} from "lucide-react"

function Project({ link, title, description, tags, highlight }) {
  return (
    <div className="bg-gray-800/80 text-white rounded-xl shadow-xl hover:shadow-2xl border border-gray-600/50 hover:border-purple-500/50 hover:-translate-y-4 transition-all duration-500 backdrop-blur-sm">
      <div className="h-48 bg-gray-700/50 overflow-hidden relative rounded-t-xl">
        <iframe
          src={link}
          className="w-full h-full border-0 transition-transform duration-300"
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          style={{ zoom: 0.25, pointerEvents: 'none' }}
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
            <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
            {tags.map((tag, index) => (
            <Tags key={index} text={tag} />
            ))}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
            <div className="bg-blue-600/10 rounded-lg border border-blue-400/20 p-4">
                <p className="text-sm text-blue-300 font-medium">Project Highlight</p>
                <p>{highlight}</p>
            </div>
            <Button 
                Text="View Live Project"
                LeftIcon={()=> <Globe size={18}/>}
                RightIcon={()=> <ExternalLink size={18}/>}
                Variant="gradient"
                size="md"
            />
      </div>
      
     
    </div>
  );
}

export default Project;
