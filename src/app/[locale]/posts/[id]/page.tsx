import { Category } from '@/widgets/Category';
import { IPostPageProps } from './interfaces';

function PostPage({ params: { id } }: IPostPageProps) {
    return (
        <div>{id}</div>
    )
}

export default PostPage;