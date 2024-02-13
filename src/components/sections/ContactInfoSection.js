import Card from "../Card";
import IconLabel from "../IconLabel";
import "./ContactInfoSection.css";



export default function ContactInfoSection() {
    return <>
        <div className="tmp">
            <IconLabel iconClass="fa-solid fa-at" label="g.bvinther@gmail.com"/>
            <IconLabel iconClass="fa-brands fa-linkedin" label="Bjørn Vinther" url="https://www.linkedin.com/in/bj%C3%B8rn-vinther-402499bb/"/>
            <IconLabel iconClass="fa-brands fa-github" label="github.com/bhas" url="https://github.com/bhas"/>
            <IconLabel iconClass="fa-solid fa-location-dot" label="Copenhagen, Denmark"/>
        </div>
    </>
}