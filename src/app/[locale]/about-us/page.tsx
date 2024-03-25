import { JoinTeam } from "@/widgets/JoinTeam";
import { AboutUs } from "@/widgets/AboutUs/ui/AboutUs";
import container from "@/styles/container.module.scss";

export default function AboutUsPage() {
    return (
        <div className={container.container}>
            <AboutUs />
            <JoinTeam />
        </div>
    );
}
