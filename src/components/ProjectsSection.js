import Card from "./Card";

export default function ProjectsSection() {

    return (
        <Card title={"Projects"}>
            <h3>Hack your future</h3>
            {"Who doesn't like games"}

            <h3>Redcross volunteer</h3>
            {"Who doesn't like games"}

            <h3>Master's thesis</h3>
            {"In my thesis I wrote about Visualization of data on the construction site by using Mixed Reality (also known as Augmented Reality). We managed to develop an app where the user could use their phone to view a virtuel 3D model of a building while walking around inside the real building. In order to achieve a sufficient speed and accuracy on the phone, we had to optimize the way we stored and accessed data, as well as develop algorithms to compensate for the inaccuracies of the mobile phone’s sensors."}
        
            <h3>Game jams</h3>
            {"Who doesn't like games"}
        </Card>
    );
}
