import container from '@/styles/container.module.scss';
import { IAuthorProps } from './interfaces'
import AuthorHeader from './AuthorHeader/AuthorHeader';
import AuthorPosts from './AuthorPosts/AuthorPosts';
import { authors } from '@/shared/consts/authors';

export function Author({ id }: IAuthorProps) {
    const author = authors.filter(author => author.id === id)[0];
    const { name, img } = author;
    return (
        <>
            <AuthorHeader name={name} img={img} />
            <div className={container.container}>
                <AuthorPosts authorName={name} />
            </div>
        </>
    )
}
