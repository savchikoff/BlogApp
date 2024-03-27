import { ICategoryPageProps } from './interfaces';
import { Category } from '@/widgets/Category';

function CategoryPage({ params: { name } }: ICategoryPageProps) {
    return (
        <Category categoryName={name} />
    )
}

export default CategoryPage;