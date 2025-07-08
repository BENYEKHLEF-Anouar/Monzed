function Tags({text}) {
    return(
        <div className="bg-gray-700/50 py-1 px-3 rounded-2xl border border-gray-600/50 group-hover:border-purple-500/30 group-hover:bg-purple-600/10 transition-all duration-300">
            <p>{text}</p>
        </div>
    )
}
export default Tags