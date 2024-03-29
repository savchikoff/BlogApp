import container from '@/styles/container.module.scss';
import { IPostPageProps } from './interfaces';
import { BlogPost } from '@/widgets/BlogPost';
import { JoinTeam } from '@/widgets/JoinTeam';
import NextPosts from '@/widgets/NextPosts/ui/NextPosts';

function PostPage({ params: { id } }: IPostPageProps) {
    return (
        <div className={container.container}>
            <BlogPost postId={Number(id)} />
            <NextPosts />
            <JoinTeam />
        </div>
    )
}

export default PostPage;