import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Local styles
import recentPosts from '@site/.docusaurus/recent-posts.json'; // Import recent posts
import ParticlesBackground from './ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import Typed from 'typed.js'; // Import Typed.js

// Image Carousel
function ImageCarousel() {
  const images = [
    '/img/index_page/DSC07939.jpg',
    '/img/index_page/DSC08325.JPG',
    '/img/index_page/DSC09816.JPG',
    '/img/index_page/DSC08049.jpg',
    '/img/index_page/DSC09127.JPG',
    '/img/index_page/DSC09880.JPG',
    '/img/index_page/DSC09775.JPG',
    '/img/index_page/DSC07954.jpg',
    '/img/index_page/DSC07752.jpg',
    '/img/index_page/DSC09246.JPG',
    '/img/index_page/DSC08720.JPG',
    '/img/index_page/DSC09403.JPG',
    '/img/index_page/DSC09383.JPG',
    '/img/index_page/DSC09130.JPG',
    '/img/index_page/DSC08249.jpg',
    '/img/index_page/DSC09390.JPG',
    '/img/index_page/DSC09565.jpg',
    '/img/index_page/DSC09446.JPG',
    '/img/index_page/DSC09298.JPG',
    '/img/index_page/DSC08849.JPG',
    '/img/index_page/DSC09524.JPG',
    '/img/index_page/DSC09750.JPG',
    '/img/index_page/DSC09802.JPG',
    '/img/index_page/DSC07960.jpg',
    '/img/index_page/DSC09625.JPG',
    '/img/index_page/DSC07979.jpg',
    '/img/index_page/DSC09495.JPG',
    '/img/index_page/DSC08515.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change every 3 seconds
    }
    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  // Handle manual navigation
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Pause/Resume Autoplay
  const toggleAutoplay = () => setIsPlaying((prev) => !prev);

  return (
    <div className={styles.carouselContainer}>
      {/* Main Image */}
      <div className={styles.imageWrapper}>
        <AnimatePresence>
          {images.map((src, index) => (
            index === currentIndex && (
              <motion.img
                key={src}
                src={src}
                alt={`Slide ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.carouselImage}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '15px',  // Round edges
                  zIndex: 0,
                }}
              />
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button className={styles.prev} onClick={handlePrev}>❮</button>
      <button className={styles.next} onClick={handleNext}>❯</button>

      {/* Pause/Resume Button */}
      <button onClick={toggleAutoplay} className={styles.pauseButton}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Thumbnail Gallery */}
      <div className={styles.thumbnailGallery}>
        <div className={styles.thumbnailWrapper}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index)}
              className={clsx(styles.thumbnail, {
                [styles.activeThumbnail]: index === currentIndex,
              })}
              style={{
                width: '80px',
                height: '60px',
                objectFit: 'cover',
                margin: '5px',
                cursor: 'pointer',
                borderRadius: '4px',
                border: index === currentIndex ? '2px solid #007BFF' : '1px solid gray',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


// Recent Posts Component
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
          {posts.map((post, index) => {
            // Format the date to only include the date part
            const formattedDate = new Date(post.metadata.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
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
                    {/* Render formatted date */}
                    <p style={{ fontSize: '0.9rem', color: 'gray', marginTop: '0.5rem' }}>
                      {formattedDate}
                    </p>
                  </div>
                  <div className="card__body">
                    <p>{post.metadata.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// Main Homepage Component
// Main Homepage Component
export default function HomepageFeatures() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Welcome to My Page!'],
      typeSpeed: 30,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: false,
    };

    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <section className={styles.features}>
      {/* Include the ParticlesBackground component */}
      <ParticlesBackground />
      
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="text--center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading as="h1" className={styles.heroTitle}>
            <span ref={typedElementRef}></span> {/* Typewriter effect */}
          </Heading>
          <p className={styles.heroDescription}>
            Here, I share my experiences and knowledge from the tech world, covering the projects I work on, and solutions I’ve found useful. It’s a mix of practical insights and things I want to keep handy for future reference – and maybe you’ll find them helpful too.
            Beyond tech, I also write about my outdoor adventures – especially hiking and exploring mountains. If you’re into nature or looking for ideas for your next trip, you might enjoy those posts as well.
            This site is just a personal space to share the things I’m passionate about, both in technology and the great outdoors. Hope you find something here that sparks your interest!
          </p>
        </motion.div>

        {/* Recent Posts Section */}
        <div style={{ marginTop: '4rem' }}>
          <RecentPosts posts={recentPosts} />
        </div>

        {/* New Section for Image Carousel */}
        <div className="text--center" style={{ margin: '2rem 0' }}>
          <Heading as="h2">A Glimpse of My / Our Adventures</Heading>
          <p>
            Explore some of the moments I've captured during my adventures. These images showcase the beauty of both nature and sports, capturing snapshots of hiking, outdoor activities, and some of the work I do. Feel free to browse and enjoy!
          </p>
        </div>

        {/* Image Carousel */}
        <div className="text--center" style={{ margin: '2rem 0' }}>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}

