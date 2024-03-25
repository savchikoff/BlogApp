import { Hero } from '@/widgets/Hero';
import { PostsHome } from '@/widgets/PostsHome';
import { AboutSection } from '@/widgets/AbouSection';
import container from "@/styles/container.module.scss";
import { Categories } from '@/widgets/Categories';
import { Authors } from '@/widgets/Authors';
import { StorySection } from '@/widgets/StorySection';
import { JoinTeam } from '@/widgets/JoinTeam';
import { Partners } from '@/widgets/Partners';
import { Testimonials } from '@/widgets/Testimonials';

export default function Home() {
	return (
		<>
			<Hero />
			<div className={container.container}>
				<PostsHome />
				<AboutSection />
				<Categories />
				<StorySection />
				<Authors />
				<Partners />
				<Testimonials />
				<JoinTeam />
			</div>
		</>
	);
}
