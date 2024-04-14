import { Category } from '@/widgets/Category';

import { ICategoryPageProps } from './interfaces';

function CategoryPage({ params: { name } }: ICategoryPageProps) {
	return <Category categoryName={name} />;
}

export default CategoryPage;
