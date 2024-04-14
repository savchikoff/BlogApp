import { BlogPost } from '@/widgets/BlogPost';
import { JoinTeam } from '@/widgets/JoinTeam';
import NextPosts from '@/widgets/NextPosts/ui/NextPosts';

import { IPostPageProps } from './interfaces';

import container from '@/shared/styles/container.module.scss';

function PostPage({ params: { id } }: IPostPageProps) {
	return (
		<div className={container.container}>
			<BlogPost postId={Number(id)} />
			<NextPosts postId={Number(id)} />
			<JoinTeam />
		</div>
	);
}

export default PostPage;
