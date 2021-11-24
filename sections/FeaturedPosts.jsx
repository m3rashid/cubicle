import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const ArrowFix = (arrowProps) => { const { carouselState, children, ...restArrowProps } = arrowProps; return (<span {...restArrowProps}>{children}</span>); };

  const arrowStyle = { backgroundClip: 'text', color: 'transparent', background: 'linear-gradient(to right, #EF4444, #F59E0B)' }

  const leftArrow = (
    <ArrowFix>
      <div className="absolute left-0 text-center py-3 px-3 cursor-pointer rounded-full" style={arrowStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
    </ArrowFix>
  );

  const rightArrow = (
    <ArrowFix>
      <div className="absolute right-0 text-center py-3 px-3 cursor-pointer bg-red-500 rounded-full" style={arrowStyle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </ArrowFix>
  );

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 mb-4 px-3">Featured Posts</h2>
      <Carousel infinite customLeftArrow={leftArrow} customRightArrow={rightArrow} responsive={responsive} itemClass="px-3">
        {dataLoaded && featuredPosts.map((post, index) => (
          <FeaturedPostCard key={index} post={post} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
