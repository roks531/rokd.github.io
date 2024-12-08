import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Local styles
import recentPosts from '@site/.docusaurus/recent-posts.json'; // Import recent posts

import { motion } from 'framer-motion'; // For animations
import { useEffect, useRef } from 'react'; // For hooks
import Typed from 'typed.js'; // Import Typed.js

// Images
import slika1_naslovna from '@site/static/img/logo.png';
import slika2_naslovna from '@site/static/img/logo.png'; 

// Features list
const FeatureList = [
  // {
  //   title: 'Tech Insights',
  //   Image: slika1_naslovna,
  //   description: 'Explore coding tips, projects, and solutions for tech challenges.',
  //   animationClass: 'move-tech',
  // },
  // {
  //   title: 'Outdoor Adventures',
  //   Image: slika2_naslovna,
  //   description: 'Experience the beauty of the outdoors through my hiking journeys.',
  //   animationClass: 'move-nature',
  // },
];

// Feature component
function Feature({ Image, title, description, animationClass }) {
  return (
    <motion.div
      className={clsx('col col--6 col--offset-3')}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="text--center">
        <motion.img
          className={`${styles.featureImage} ${animationClass}`}
          src={Image}
          alt={title}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

// Recent posts component
function RecentPosts({ posts }) {
  return (
    <div className="recent-posts">
      <motion.div
        className="text--center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Heading as="h2">Recent Posts</Heading>
      </motion.div>

      <div className="container">
        <div className="row">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="col col--4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * index }}
            >
              <div className="card shadow--md">
                <div className="card__header">
                  <a href={post.metadata.permalink} style={{ textDecoration: 'none' }}>
                    <Heading as="h3">{post.metadata.title}</Heading>
                  </a>
                </div>
                <div className="card__body">
                  <p>{post.metadata.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Main component
export default function HomepageFeatures() {
  // Create a reference for the element where you want the typewriter effect
  const typedElementRef = useRef(null);

  // Initialize typed.js inside useEffect
  useEffect(() => {
    const options = {
      strings: ['Welcome to My Space'], // The text you want to type
      typeSpeed: 70, // Speed of typing (in ms)
      backSpeed: 50, // Speed of erasing (in ms)
      backDelay: 1000, // Delay before erasing starts (in ms)
      startDelay: 500, // Delay before typing starts (in ms)
      loop: false, // Set to true for continuous typing
    };

    // Create a new Typed.js instance on the element referenced by typedElementRef
    const typed = new Typed(typedElementRef.current, options);

    // Cleanup the Typed.js instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="text--center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" className={styles.heroTitle}>
            <span ref={typedElementRef}></span> {/* Typewriter effect will be applied here */}
          </Heading>
          <p className={styles.heroDescription}>
            Here, I share my experiences and knowledge from the tech world, covering the projects I work on, and solutions I’ve found useful. It’s a mix of practical insights and things I want to keep handy for future reference – and maybe you’ll find them helpful too.

            Beyond tech, I also write about my outdoor adventures – especially hiking and exploring mountains. If you’re into nature or looking for ideas for your next trip, you might enjoy those posts as well.

            This site is just a personal space to share the things I’m passionate about, both in technology and the great outdoors. Hope you find something here that sparks your interest!
          </p>
        </motion.div>

        {/* Features */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* Recent Posts */}
        <RecentPosts posts={recentPosts} />
      </div>
    </section>
  );
}
