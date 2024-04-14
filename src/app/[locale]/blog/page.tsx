import { Blog } from '@/widgets/Blog';
import { Categories } from '@/widgets/Categories';
import { JoinTeam } from '@/widgets/JoinTeam';

import container from '@/shared/styles/container.module.scss';

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
