import { useEffect, useState } from "react";
import IconLink from "../ui/IconLink";
import { formatDate, formatTimeElapsed } from "../../utilities/DateUtilities";
import { companies } from "../../data/resumeData";
import TimelineItem from "./TimelineItem";



export default function Timeline() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isSmallDevice = screenWidth < 768;
    return (
        <div className="grid gap-x-2 leading-7" style={{ gridTemplateColumns: isSmallDevice ? "auto 20px auto" : "50% 20px 50%" }}>
            <Line />
            <TimelineItem
                company={companies.hyf.name}
                dateText={"Oct 2023 - Present"}
                secondary
                type="Volunteering"
                startDate={companies.hyf.startDate}
                endDate={companies.hyf.endDate}
                href="/experience"
                alignRight={isSmallDevice}>
                <p>
                    I'm currently Volunteering as a teacher and mentor for HackYourFuture Denmark where we
                    teach students web development.
                    Topics includes <Highlight>Javascript</Highlight>, <Highlight>CSS</Highlight>, <Highlight>React</Highlight>, and <Highlight>SQL</Highlight> among others.
                </p>
            </TimelineItem>

            <TimelineItem company={companies.maersk.name}
                dateText={"Aug 2021 - Jan 2024"}
                startDate={companies.maersk.startDate}
                endDate={companies.maersk.endDate}
                href="/experience"
                type="Software Engineer" alignRight
            >
                <p>
                    Maersk Supply Chain Platform is used to operate the supply chains of some of the worlds largest retailers.
                </p>
                <p className="mt-3">
                    Here I'm leading the standardizing of integrations between our platform and customer systems by developing a <Highlight>C#/.NET</Highlight> microservice.
                    Using technologies such as <Highlight>Kafka</Highlight> and <Highlight>Kubernetes</Highlight>, our microservice efficiently retrieves data from many sources and seamlessly transforms it into a uniform format,
                    greatly decreasing the time it takes to onboard new customers.
                </p>

            </TimelineItem>
            <TimelineItem company={companies.republica.name}
                startDate={companies.republica.startDate}
                endDate={companies.republica.endDate}
                dateText={"Dec 2017 - Jan 2019"}
                type="Senior System Developer"
                href="/experience"
                alignRight={isSmallDevice}>
                At Republica I was responsible for the development of their platform used for managing photos and product specifications for more than a million products.
                We developed the platform as a single page application in <Highlight>React</Highlight> with multiple microservices written in <Highlight>C#/.NET</Highlight>.
            </TimelineItem>
            <TimelineItem company={companies.dalux.name}
                startDate={companies.dalux.startDate}
                endDate={companies.dalux.endDate}
                href="/experience"
                dateText={"Dec 2017 - Jan 2019"}
                type="Software Engineer" alignRight>
                I started my professional career as a fullstack developer at Dalux where I was responsible for the development of their facility management system. 
                Here I learned to do frontend development in <Highlight>Angular</Highlight> and backend development in <Highlight>C#/.NET</Highlight>.
            </TimelineItem>
            <TimelineItem company={companies.dtu.name}
                startDate={companies.dtu.endDate}
                secondary
                href="/experience"
                dateText={"Dec 2017"}
                type="Master Studies" alignRight={isSmallDevice}>
                After 2 years of debugging and refactoring, I finally graduated from the Technical University of Denmark with a Master's degree in Engineering.
            </TimelineItem>
        </div>
    );
}

function Line() {
    const width = 20;
    return (
        <svg height={40} width={width} className="col-start-2 self-center">
            <line x1={width / 2} y1="0" x2={width / 2} y2="100%" stroke="white" strokeDasharray={8} strokeWidth={3} />
        </svg>
    )
}

function Highlight({ children }) {
    return <span className="text-blue-400">{children}</span>
}