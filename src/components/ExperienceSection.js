import HistoryEntry from "./HistoryEntry";



export default function ExperienceSection() {
    return (
        <>
            <HistoryEntry
                company="Maersk"
                position="Software Engineer"
                startDate={new Date(2022, 0, 1)}
                endDate={null}
                description={"Other description."}
            />
            <HistoryEntry
                company="Republica"
                position="Senior System Developer"
                startDate={new Date(2020, 7, 1)}
                endDate={new Date(2022, 0, 1)}
                description={"Some long description about what I did at Republica."}
            />
            <HistoryEntry
                company="Dalux"
                position="Software Engineer"
                startDate={new Date(2017, 5, 1)}
                endDate={new Date(2020, 7, 1)}
                description={"At Dalux I’ve worked as a fullstack developer in a rapidly growing environment. Backend has primarily consisted of C# og SQL and frontend has primarily consisted of Angular, HTML, Typescript og CSS. Additionally, I have been responsible for creating integrations to external systems, migrating customer data, test and maintenance, mentoring juniors developers, refactoring central code, and designing and developing new central systems and functionality in the system. "}
            />
        </>
    );
}
