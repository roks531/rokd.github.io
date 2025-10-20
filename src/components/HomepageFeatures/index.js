import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css'; // Local styles
import recentPosts from '@site/.docusaurus/recent-posts.json'; // Import recent posts
import ParticlesBackground from './ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion'; // For animations
import Typed from 'typed.js'; // Import Typed.js
import Head from '@docusaurus/Head'; // Import Head component for SEO


// Modern Image Gallery with Lightbox
function ImageGallery() {
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

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <div className={styles.galleryGrid}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={styles.galleryItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={() => openLightbox(index)}
          >
            <img src={src} alt={`Adventure ${index + 1}`} className={styles.galleryImage} />
            <div className={styles.galleryOverlay}>
              <span className={styles.viewIcon}>🔍 View</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className={styles.lightboxClose} onClick={closeLightbox}>✕</button>
            <button className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</button>
            <button className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</button>
            
            <motion.img
              key={selectedImageIndex}
              src={images[selectedImageIndex]}
              alt={`Adventure ${selectedImageIndex + 1}`}
              className={styles.lightboxImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            
            <div className={styles.lightboxCounter}>
              {selectedImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
        <Heading as="h2" className={styles.sectionTitle}>Recent Blog Posts</Heading>
        <p className={styles.sectionDescription}>
          Latest insights on tech solutions, projects, and outdoor adventures
        </p>
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
                whileHover={{ y: -8 }}
              >
                <div className="card shadow--md" style={{ height: '100%' }}>
                  <div className="card__header">
                    <a href={post.metadata.permalink} style={{ textDecoration: 'none' }}>
                      <Heading as="h3">{post.metadata.title}</Heading>
                    </a>
                    {/* Render formatted date */}
                    <div style={{ 
                      fontSize: '0.85rem', 
                      color: 'var(--ifm-color-emphasis-600)', 
                      marginTop: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <span>📅</span>
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                  <div className="card__body">
                    <p>{post.metadata.description}</p>
                  </div>
                  <div className="card__footer">
                    <a 
                      href={post.metadata.permalink}
                      className="button button--primary button--sm"
                      style={{ width: '100%' }}
                    >
                      Read More →
                    </a>
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
    <>
    <Head>
      <title>Rok Damjanić - Tech Blog and Adventures</title>
      <meta name="description" content="Welcome to the personal blog of Rok Damjanić, where I share insights on technology, projects, hiking adventures, and more." />
      <meta name="keywords" content="Rok Damjanić, tech blog, software developer, hiking, outdoor adventures, developer blog, programming insights" />
      <meta property="og:title" content="Rok Damjanić - Tech Blog and Adventures" />
      <meta property="og:description" content="Join Rok Damjanić as he shares his experiences in technology, outdoor adventures, and everything in between." />
      <meta property="og:image" content="https://example.com/your-image.jpg" />
      <meta property="og:url" content="https://your-website.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your-twitter-handle" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Person',
          name: 'Rok Damjanić',
          url: 'https://your-website.com',
          image: 'https://example.com/your-image.jpg',
          description: 'Personal blog of Rok Damjanić, tech enthusiast, software developer, and hiker.',
        })}
      </script>
    </Head>

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

        {/* Gallery Section */}
        <div className={styles.gallerySection}>
          <motion.div
            className="text--center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Heading as="h2" className={styles.sectionTitle}>
              Adventure Gallery
            </Heading>
            <p className={styles.sectionDescription}>
              A collection of moments captured during my adventures — from mountain peaks to tech projects. 
              Click any image to explore in full detail.
            </p>
          </motion.div>
          
          <ImageGallery />
        </div>
      </div>
    </section>
  </>
  );
}

