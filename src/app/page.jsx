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
import { getServerSideData } from "@/services";
import { ApiEndpoints } from "@/utils";

export async function generateMetadata() {
  const global = await getServerSideData(ApiEndpoints.getGlobalEndpoint());

  return {
    title: global?.subName,
    icons: {
      icon: "/favicon2.ico",
    },
    description: global?.metadata,
  };
}

export default async function Home() {
  const [
    global,
    services,
    heroBanner,
    features,
    about,
    counter,
    testimonials,
    popularQuestions,
    bmi,
  ] = await Promise.all([
    getServerSideData(ApiEndpoints.getGlobalEndpoint()),
    getServerSideData(ApiEndpoints.getServicesEndpoint()),
    getServerSideData(ApiEndpoints.getHeroBannerEndpoint()),
    getServerSideData(ApiEndpoints.getFeaturesEndpoint()),
    getServerSideData(ApiEndpoints.getAboutEndpoint()),
    getServerSideData(ApiEndpoints.getCounterEndpoint()),
    getServerSideData(ApiEndpoints.getTestimonialsEndpoint()),
    getServerSideData(ApiEndpoints.getPopularQuestionsEndpoint()),
    getServerSideData(ApiEndpoints.getBMIEndpoint()),
  ]);

  return (
    <main id="main">
      <HeroBanner heroBannerData={heroBanner} />
      <Features featuresData={features} />
      <About aboutData={about} />
      <Counter counterData={counter} />
      <Services servicesData={services} />
      <Testimonial testimonialsData={testimonials} />
      <PopularQuestions popularQuestionsData={popularQuestions} />
      <BMI bmiData={bmi} />
      <ContactUs />
    </main>
  );
}
