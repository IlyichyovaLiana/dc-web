const ApiEndpoints = {
  getHeroBannerEndpoint: () =>
    `hero_banner/${process.env.NEXT_PUBLIC_HERO_BANNER_ID}`,
  getFeaturesEndpoint: () => `features/${process.env.NEXT_PUBLIC_FEATURES_ID}`,
  getAboutEndpoint: () => `about/${process.env.NEXT_PUBLIC_ABOUT_ID}`,
  getCounterEndpoint: () => `counter/${process.env.NEXT_PUBLIC_COUNTER_ID}`,
  getServicesEndpoint: () => `services/${process.env.NEXT_PUBLIC_SERVICES_ID}`,
  getTestimonialsEndpoint: () =>
    `testimonials/${process.env.NEXT_PUBLIC_TESTIMONIALS_ID}`,
  getPopularQuestionsEndpoint: () =>
    `popular_questions/${process.env.NEXT_PUBLIC_POPULAR_QUESTIONS_ID}`,
  getBMIEndpoint: () => `bmi/${process.env.NEXT_PUBLIC_BMI_ID}`,
  getGlobalEndpoint: () => `global/${process.env.NEXT_PUBLIC_GLOBAL_ID}`,
  getTelegramEndpoint: () => `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`,
};

export default ApiEndpoints;
