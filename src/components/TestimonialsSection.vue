<script setup>
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Photographer',
    company: 'SJ Photography',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Working with Santai Kuppi was an absolute pleasure. The portfolio website exceeded my expectations and I\'ve seen a 40% increase in client inquiries since launch!'
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    company: 'Chen\'s Bistro',
    image: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    text: 'Professional, creative, and responsive. Our new website perfectly captures our restaurant\'s ambiance. Customers love the online reservation system!'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    company: 'TechFlow Solutions',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'The landing page delivered exceptional results. Our conversion rate improved by 60%. Highly recommend for anyone looking for quality web development!'
  },
  {
    name: 'David Thompson',
    role: 'Freelance Designer',
    company: 'DT Creative',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Fast turnaround, beautiful design, and great communication throughout the project. My portfolio site has helped me land several high-profile clients.'
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Director',
    company: 'GrowthHub',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'Outstanding work! The website is not only visually stunning but also optimized for performance and SEO. Couldn\'t be happier with the results.'
  },
  {
    name: 'James Wilson',
    role: 'Business Consultant',
    company: 'Wilson & Associates',
    image: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    text: 'Incredible attention to detail and a true understanding of what businesses need online. The website has become our best marketing tool.'
  }
]
</script>

<template>
  <section id="testimonials" class="relative min-h-screen py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Client Testimonials
        </h2>
        <p class="text-lg sm:text-xl text-coffee-300 max-w-2xl mx-auto">
          Don't just take my word for it - hear what my clients have to say about their experience
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="reveal-element backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-tech-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-tech-blue-500/20 flex flex-col"
        >
          <!-- Rating Stars -->
          <div class="flex gap-1 mb-4">
            <i 
              v-for="star in testimonial.rating" 
              :key="star"
              class="fas fa-star text-yellow-400"
            ></i>
          </div>

          <!-- Testimonial Text -->
          <p class="text-coffee-200 leading-relaxed mb-6 flex-grow italic">
            "{{ testimonial.text }}"
          </p>

          <!-- Client Info -->
          <div class="flex items-center gap-4 pt-4 border-t border-white/10">
            <img 
              :src="testimonial.image" 
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover border-2 border-tech-blue-400/50"
              loading="lazy"
            />
            <div>
              <div class="text-white font-semibold">{{ testimonial.name }}</div>
              <div class="text-coffee-400 text-sm">{{ testimonial.role }}</div>
              <div class="text-tech-blue-400 text-xs">{{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 reveal-element">
        <p class="text-coffee-300 mb-6 text-lg">
          Ready to join these happy clients?
        </p>
        <a 
          href="#contact" 
          class="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue-500 to-tech-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-tech-blue-500/50 hover:scale-105 transition-all duration-300"
        >
          Let's Get Started
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-element {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal-element.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  .reveal-element {
    opacity: 1;
    transform: none;
    transition: none;
  }
  
  .reveal-element:hover {
    transform: none !important;
  }
}
</style>
