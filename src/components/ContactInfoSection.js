import Card from "./Card";
import IconLabel from "./IconLabel";
import "./ContactInfoSection.css";



export default function ContactInfoSection() {
    return <>
        <Card>
            <div className="contact-info-container">
                <div>
                    <h1>Bjørn Vinther</h1>
                    <div class="subtitle">Software Engineer</div>
                </div>
                <div className="contact-info">
                    <IconLabel iconClass="fa-solid fa-phone" label="+45 53 56 81 12"/>
                    <IconLabel iconClass="fa-solid fa-envelope" label="g.bvinther@gmail.com"/>
                    <IconLabel iconClass="fa-brands fa-linkedin" label="Bjørn Vinther" url="https://www.linkedin.com/in/bj%C3%B8rn-vinther-402499bb/"/>
                    <IconLabel iconClass="fa-brands fa-github" label="github.com/bhas" url="https://github.com/bhas"/>
                    <IconLabel iconClass="fa-solid fa-location-dot" label="Copenhagen, Denmark"/>
                </div>
            </div>
        </Card>
        <Card>
                <div className="tmp">
                    <IconLabel iconClass="fa-solid fa-phone" label="+45 53 56 81 12"/>
                    <IconLabel iconClass="fa-solid fa-envelope" label="g.bvinther@gmail.com"/>
                    <IconLabel iconClass="fa-brands fa-linkedin" label="Bjørn Vinther" url="https://www.linkedin.com/in/bj%C3%B8rn-vinther-402499bb/"/>
                    <IconLabel iconClass="fa-brands fa-github" label="github.com/bhas" url="https://github.com/bhas"/>
                    <IconLabel iconClass="fa-solid fa-location-dot" label="Copenhagen, Denmark"/>
                </div>
        </Card>
    </>
}