'use client';

import { Slide } from 'react-awesome-reveal';

import styles from './PrivacyContent.module.scss';

function PrivacyContent() {
	return (
		<article
			data-cy="privacy-content"
			className={styles.privacyContentContainer}
		>
			<div className={styles.privacyContentWrapper}>
				<Slide>
					<h1 className={styles.privacyContentHeading}>
						Lorem ipsum dolor sit amet
					</h1>
					<p className={styles.privacyContentText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
						sem. At risus viverra adipiscing at in tellus. Sociis natoque
						penatibus et magnis dis parturient montes. Ridiculus mus mauris
						vitae ultricies leo. Neque egestas congue quisque egestas diam.
						Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
						facilisi morbi tempus iaculis urna. Lorem sed risus ultricies
						tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat
						velit. Orci eu lobortis elementum nibh. Ipsum suspendisse ultrices
						gravida dictum fusce ut placerat orci nulla. Neque convallis a cras
						semper auctor neque vitae tempus quam.
					</p>
				</Slide>
				<Slide direction="right">
					<h3 className={styles.privacyContentSubHeading}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</h3>
					<p className={styles.privacyContentText}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
						blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
						At risus viverra adipiscing at in tellus. Sociis natoque penatibus
						et magnis dis parturient montes. Ridiculus mus mauris vitae
						ultricies leo. Neque egestas congue quisque egestas diam. Risus in
						hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi
						tempus iaculis urna. Lorem sed risus ultricies tristique nulla
						aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
						lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum
						fusce ut placerat orci nulla. Neque convallis a cras semper auctor
						neque vitae tempus quam.
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
						blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
						At risus viverra adipiscing at in tellus. Sociis natoque penatibus
						et magnis dis parturient montes. Ridiculus mus mauris vitae
						ultricies leo. Neque egestas congue quisque egestas diam. Risus in
						hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi
						tempus iaculis urna. Lorem sed risus ultricies tristique nulla
						aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu
						lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum
						fusce ut placerat orci nulla. Neque convallis a cras semper auctor
						neque vitae tempus quam.
					</p>
				</Slide>
			</div>
		</article>
	);
}

export default PrivacyContent;
