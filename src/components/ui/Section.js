

export default function Section({ children, title, className }) {
    return (
        <section className={`flex flex-col px-5 py-10 sm:py-16 odd:bg-slate-900/70 ${className}`}>
            {title && <h2 className="text-white text-4xl sm:text-5xl md:text-5xl mb-6 sm:mb-16 text-center">{title}</h2>}
            <div className="flex flex-col items-stretch lg:m-auto lg:max-w-5xl">
                {children}
            </div>
        </section>
    )
}