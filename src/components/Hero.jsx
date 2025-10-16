const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          Elevate Every Step with Our Premium Footwear: Unrivaled Comfort, Exceptional Style, and Lasting Durability for Your Daily Adventures. Discover Why We're the Ultimate Choice for Footwear Excellence.
        </p>

        {/* Buttons just below the text */}
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Learn More</button>
        </div>

        {/* Brand icons below the buttons */}
        <div className="shopping">
          <p>Available Now On</p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="Flipkart Logo" />
            <img src="/images/amazon.png" alt="Amazon Logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
       <img src="/images/shoe_image.png" alt="Shoe" />
      </div>
    </main>
  );
};

export default Hero;
