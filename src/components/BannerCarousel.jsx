import React, { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';
import bannerOne from '../assets/new-assets/hero-home/siet1.jpg';
import bannerTwo from '../assets/new-assets/hero-home/siet2.jpg';
import bannerThree from '../assets/new-assets/hero-home/siet3.jpg';
import bannerFour from '../assets/new-assets/campus/siet-panchkula-building.jpg';

const banners = [
  {
    id: 1,
    image: bannerOne,
    title: 'Campus Front View',
    subtitle: 'A modern learning environment built for practical engineering education.'
  },
  {
    id: 2,
    image: bannerTwo,
    title: 'Innovation-Oriented Spaces',
    subtitle: 'Project labs and maker spaces where ideas become prototypes.'
  },
  {
    id: 3,
    image: bannerThree,
    title: 'Academic Life at SIET',
    subtitle: 'Collaborative classrooms with faculty-led mentorship and peer learning.'
  },
  {
    id: 4,
    image: bannerFour,
    title: 'Green & Connected Campus',
    subtitle: 'Open spaces, smart classrooms, and modern facilities in one place.'
  }
];

const BannerCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
    setIsLoading(true);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
    setIsLoading(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollReveal>
      <section className="banner-section" aria-label="Campus banner images">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Institute Gallery</h2>
            <div className="title-underline"></div>
          </div>

          <div className="banner-carousel">
            {isLoading && <div className="banner-skeleton" aria-hidden="true"></div>}
            {banners.map((banner, index) => (
              <article
                key={banner.id}
                className={`banner-slide ${index === activeIndex ? 'active' : ''}`}
                aria-hidden={index !== activeIndex}
              >
                <img
                  src={banner.image}
                  alt={banner.title}
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                />
                <div className="banner-overlay"></div>
                <div className="banner-content">
                  <h3>{banner.title}</h3>
                  <p>{banner.subtitle}</p>
                </div>
              </article>
            ))}

            <button type="button" className="banner-arrow banner-arrow-left" onClick={handlePrev} aria-label="Previous banner">
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" className="banner-arrow banner-arrow-right" onClick={handleNext} aria-label="Next banner">
              <span aria-hidden="true">›</span>
            </button>

            <div className="banner-controls">
              {banners.map((banner, index) => (
                <button
                  type="button"
                  key={banner.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsLoading(true);
                  }}
                  className={`banner-dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to banner ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default BannerCarousel;
