import HistoryEntry from "./HistoryEntry";



export default function EducationSection() {
    return (
        <>
            <HistoryEntry
                company="DTU"
                position="Master of Science in Engineering"
                startDate={new Date(2017, 6, 1)}
                endDate={new Date(2015, 7, 1)}
                description={"I studied Digital media technologies with a focus on game development and 3D graphics. I got an A for my thesis where I developed new ways of visualizing data on the construction site using Mixed Reality. The project was created in collaboration with Dalux."}
            />
        </>
    );
}
