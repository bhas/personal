
export default function Card({ title, children }) {
    return (
        <div className="flex flex-col bg-white rounded drop-shadow m-2 px-8 py-10">
            <h2 className="text-purple-900 mt-0 text-xl">{title}</h2>
            <div className="flex flex-col items-stretch justify-items-stretch flex-1">
                {children}
            </div>
        </div>
    )
}