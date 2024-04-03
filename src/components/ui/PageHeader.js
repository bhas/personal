

export default function PageHeader({ children }) {
    return (
        <h1 className="mt-10 text-center text-white font-bold mb-3 text-5xl lg:text-6xl font-['Bitter']">
            {children}
        </h1>
    )
}