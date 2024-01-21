import { badges } from "../../data/resumeData";
import Badge from "../Badge";
import Card from "../Card";
import "./SkillsSection.css";


export default function SkillsSection() {
    return <>
      <Card title={"Skills"}>
        <b>Backend</b>
        <div>
          <Badge badge={badges.dotnet}/>
          <Badge badge={badges.csharp}/>
          <Badge badge={badges.go}/>
          <Badge badge={badges.sql}/>
        </div>

        <b>Frontend</b>
        <div>
          <Badge badge={badges.react}/>
          <Badge badge={badges.vue}/>
          <Badge badge={badges.angular}/>
          <Badge badge={badges.typescript}/>
          <Badge badge={badges.javascript}/>
          <Badge badge={badges.css}/>
          <Badge badge={badges.d3}/>
          <Badge badge={badges.bootstrap}/>
        </div>

        <b>DevOps</b>
        <div>
          <Badge badge={badges.azure}/>
          <Badge badge={badges.aws}/>
          <Badge badge={badges.azureDevOps}/>
          <Badge badge={badges.githubActions}/>
          <Badge badge={badges.kafka}/>
          {/* <Badge label="Terraform"/>
          <Badge label="Docker"/>
          <Badge label="Kubernetes"/> */}
        </div>

        <b>Other</b>
        <div>
          <Badge badge={badges.github}/>
          <Badge badge={badges.jira}/>
          <Badge badge={badges.unity}/>
        </div>
      </Card>
    </>
}