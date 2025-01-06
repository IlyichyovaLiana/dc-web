"use client";

import {
  HeroBanner,
  Features,
  About,
  Counter,
  Services,
  Testimonial,
  PopularQuestions,
  BMI,
  ContactUs,
} from "@/components";

export default function Home() {
  return (
    <main id="main">
      <HeroBanner />
      <Features />
      <About />
      <Counter />
      <Services />
      <Testimonial />
      <PopularQuestions />
      <BMI />
      <ContactUs />
    </main>
  );
}
