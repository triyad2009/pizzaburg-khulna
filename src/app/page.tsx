'use client';

import HeroSection from '@/components/sections/HeroSection';
import FeaturedMenuSection from '@/components/sections/FeaturedMenuSection';
import MoodToFoodSection from '@/components/sections/MoodToFoodSection';
import BuildYourPizzaSection from '@/components/sections/BuildYourPizzaSection';
import RestaurantExperienceSection from '@/components/sections/RestaurantExperienceSection';
import TableExperienceSection from '@/components/sections/TableExperienceSection';
import OffersSection from '@/components/sections/OffersSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocationSection from '@/components/sections/LocationSection';
import CTASection from '@/components/sections/CTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedMenuSection />
        <MoodToFoodSection />
        <BuildYourPizzaSection />
        <RestaurantExperienceSection />
        <TableExperienceSection />
        <OffersSection />
        <ReviewsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
