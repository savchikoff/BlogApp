export interface IPaginationProps {
	postsPerPage: number;
	totalPosts: number;
	paginate: (page: number) => void;
	prevPageText: string;
	nextPageText: string;
}
