

function Button({Text,LeftIcon, RightIcon, Variant, size}){
    const basic = "flex items-center gap-4 rounded-xl text-white font-bold"
    const variantClasses = {
        gradient : "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:scale-105 transition duration-75 ",
        normal : "bg-[#1D2636] border-2 border-gray-500 hover:border-purple-400 transition",

    } 
    const sizeClasses = {
        sm: 'py-2 px-6 text-sm',
        md: 'py-2 px-10 text-base',
        lg: 'py-3 px-6 text-lg',
    };
    return(
        <button className={`${basic} ${variantClasses[Variant]} ${sizeClasses[size]}`}>
            {LeftIcon && <LeftIcon />}
            {Text}
            {RightIcon && <RightIcon />}
        </button>
    );
}
export default Button;