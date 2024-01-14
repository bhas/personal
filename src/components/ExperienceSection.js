import { experiences } from "../data/resumeData";
import Card from "./Card";
import HistoryEntry from "./HistoryEntry";



export default function ExperienceSection() {
    const history = experiences.map(experience => 
        <HistoryEntry
            company={experience.company}
            position={experience.position}
            startDate={experience.startDate}
            endDate={experience.endDate}
            type={experience.type}>
            <p>
                {experience.description}
            </p>
        </HistoryEntry>
    );

    return (
        <Card title={"Experience"}>
            {history}
        </Card>
    );
}
