


export default function FeatureItem({ title, description, icon}) {
    return (
        <div className="flex- flex-col bg-gray-700 p-2 m-2 rounded w-64">
            {/* <img src={feature.image} alt={feature.title} /> */}
            <h2 className="text-xl">{title}</h2>
            <div>{description}</div>
        </div>
    );
}