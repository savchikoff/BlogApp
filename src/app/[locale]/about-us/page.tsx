import { JoinTeam } from '@/widgets/JoinTeam';
import { AboutUs } from '@/widgets/AboutUs';
import container from '@/shared/styles/container.module.scss';
import { Authors } from '@/widgets/Authors';

export default function AboutUsPage() {
	return (
		<div className={container.container}>
			<AboutUs />
			<Authors />
			<JoinTeam />
		</div>
	);
}
