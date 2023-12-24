import React, { useEffect, useState } from "react";
import LatestMenu from "../components/LatestMenu";
import Categories from "../components/LatestCategories";
import ImageSlider from "../components/ImageSlider";
// import Email from "../components/Email";


function Home() {
  // State to track the dimensions of the container
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  // Update container dimensions on window resize
  const updateContainerDimensions = () => {
    setContainerDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);

    // Attach event listener for window resize
    window.addEventListener("resize", updateContainerDimensions);

    // Initial dimensions
    updateContainerDimensions();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerDimensions);
    };
  }, []);

  const slides = [
    { url:  'https://cakeimages.netlify.app/1.jpg', title: 'cake1' },
    { url: 'https://cakeimages.netlify.app/2.jpg', title: 'cake2' },
    { url:  'https://cakeimages.netlify.app/3.jpg', title: 'cake3' }
  ];

  const containerStyle = {
    width: '100%',
    height: '86vh', // 100% of the viewport height
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  };

  return (
    <div className="mt-24">
    <div style={containerStyle}>
      
      <ImageSlider slides={slides} parentWidth={containerDimensions.width} parentHeight={containerDimensions.height} />
      </div>
      {/* <Email /> */}
      <LatestMenu />
      <Categories />
    </div>
  );
}

export default Home;
