import "./Project.css";

export default function Project({title, subtitle, children, width, height}) {
    return (
        <div className="project">
            <div className="project-title">{title}</div>
            <div className="project-subtitle">{subtitle}</div>
            <div className="project-content">{children}</div>
        </div>
    )
}