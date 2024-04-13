import rocketIcon from '../assets/icons/rocketIcon.svg';

import post1 from '../assets/posts/post1.webp';
import post2 from '../assets/posts/post2.webp';
import post3 from '../assets/posts/post3.webp';
import post4 from '../assets/posts/post4.webp';
import post5 from '../assets/posts/post5.webp';
import post6 from '../assets/posts/post6.webp';
import post7 from '../assets/posts/post7.webp';

import { Tags } from './tags';
import { Categories } from './categories';

export const blogPosts = [
	{
		id: 1,
		img: post1,
		category: Categories.STARTUP,
		title: 'Design tips for designers that cover everything you need',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '25th March, 2024',
		author: 'Floyd Miles',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.EXPERIENCE, Tags.LIFE],
		rocketIcon,
	},
	{
		id: 2,
		img: post2,
		category: Categories.BUSINESS,
		title: 'How to build rapport with your web design clients',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '26th March, 2024',
		author: 'Dianne Russell',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.EXPERIENCE, Tags.BUSINESS],
		rocketIcon,
	},
	{
		id: 3,
		img: post3,
		category: Categories.STARTUP,
		title: 'Logo design trends to avoid in 2022',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '26th March, 2024',
		author: 'Guy Hawkins',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.SCREEN],
		rocketIcon,
	},
	{
		id: 4,
		img: post4,
		category: Categories.TECHNOLOGY,
		title: '8 Figma design systems you can download for free today',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '24th March, 2024',
		author: 'Robert Fox',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.EXPERIENCE, Tags.LIFE],
		rocketIcon,
	},
	{
		id: 5,
		img: post5,
		category: Categories.ECONOMY,
		title: 'Font sizes in UI design: The complete guide to follow',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '27th March, 2024',
		author: 'Jenny Wilson',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.SCREEN, Tags.MARKETING],
		rocketIcon,
	},
	{
		id: 6,
		img: post6,
		category: Categories.ECONOMY,
		title: 'What did I learn from doing 50+ design sprints?',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '21th March, 2024',
		author: 'Leslie Alexander',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.TECHNOLOGY],
		rocketIcon,
	},
	{
		id: 7,
		img: post7,
		category: Categories.BUSINESS,
		title: 'Ten free foogle fonts that you should use',
		text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
		createdAt: '27th March, 2024',
		author: 'Robert Fox',
		postContent: {
			title:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.',
			bulletPoints: [
				{ id: 1, content: 'Lorem ipsum dolor sit amet' },
				{ id: 2, content: 'Non blandit massa enim nec scelerisque' },
				{ id: 3, content: 'Neque egestas congue quisque egestas' },
			],
		},
		tags: [Tags.TECHNOLOGY, Tags.BUSINESS],
		rocketIcon,
	},
];

export type PostType = (typeof blogPosts)[0];
