function CTA() {
    return (
        <div className="bg-[#1A1A2E] relative isolate">

            <div
                className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#805ad5] to-[#3b82f6]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">Touch</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    Ready to transform your idea into reality? Let's start your project today.
                </p>
                <div className="mt-10">
                    <a
                        href="#"
                        className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 text-base font-semibold leading-7 text-white shadow-lg shadow-purple-500/20 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </div>
    );
}


export default CTA;