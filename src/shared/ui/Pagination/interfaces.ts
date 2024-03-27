export interface IPaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (page: number) => void;
}