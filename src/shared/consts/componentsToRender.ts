import { AboutSection } from '@/widgets/AboutSection';
import { Authors } from '@/widgets/Authors';
import { Categories } from '@/widgets/Categories';
import { JoinTeam } from '@/widgets/JoinTeam';
import { Partners } from '@/widgets/Partners';
import { PostsHome } from '@/widgets/PostsHome';
import { StorySection } from '@/widgets/StorySection';
import { Testimonials } from '@/widgets/Testimonials';

export const componentsToRender = [
    { id: 1, component: PostsHome },
    { id: 2, component: AboutSection },
    { id: 3, component: Categories },
    { id: 4, component: StorySection },
    { id: 5, component: Authors },
    { id: 6, component: Partners },
    { id: 7, component: Testimonials },
    { id: 8, component: JoinTeam },
];
