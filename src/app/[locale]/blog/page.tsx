import container from "@/shared/styles/container.module.scss";
import { JoinTeam } from "@/widgets/JoinTeam";
import { Categories } from "@/widgets/Categories";
import { Blog } from "@/widgets/Blog";

export default function BlogPage() {
    return (
        <>
            <Blog />
            <div className={container.container}>
                <Categories />
                <JoinTeam />
            </div>
        </>
    );
}
