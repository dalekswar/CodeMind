import { HeroSection } from './components/hero-section';
import { DirectionsSection } from './components/directions-section';
import { AboutSection } from './components/about-section';
import { ReviewsSection } from './components/reviews-section';

export const AboutUsPage = () => (
  <div className="container">
    <HeroSection />
    <DirectionsSection />
    <AboutSection />
    <ReviewsSection />
  </div>
);
