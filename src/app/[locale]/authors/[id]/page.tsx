import { Author } from '@/widgets/Author';
import { IAuthorPageProps } from './interfaces';

function AuthorPage({ params: { id } }: IAuthorPageProps) {
    return (
        <Author id={Number(id)} />
    )
}

export default AuthorPage;