import { AboutUs } from '@/widgets/AboutUs';
import { Authors } from '@/widgets/Authors';
import { JoinTeam } from '@/widgets/JoinTeam';

import container from '@/shared/styles/container.module.scss';

export default function AboutUsPage() {
	return (
		<div className={container.container}>
			<AboutUs />
			<Authors />
			<JoinTeam />
		</div>
	);
}
