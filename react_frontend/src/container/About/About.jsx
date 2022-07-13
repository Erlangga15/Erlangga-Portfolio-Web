import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const About = () => {
	const abouts = [
		{ title: 'Web Development', description: 'I am a web developer with 2 years of experience in web development', imgUrl: images.about01 },
		{ title: 'Fullstack Developer', description: 'I am developing a website with the usual stack used is the MERN stack and am currently developing a web using serverless technology', imgUrl: images.about02},
		{ title: 'System Analysis', description: 'I am developing a company management system by analyzing the company\'s system requirements to produce an ideal application system', imgUrl: images.about03},
	];

	return (
		<>
			<h2 className="head-text">
				"A <span>successful</span> website does three things:<br />
				It <span>attracts</span> the right kinds of visitors.<br />
				<span>Guides</span> them to the main services or product you offer.<br />
				<span>Collects</span> contact details for future ongoing relations"
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: 'tween' }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default About;
