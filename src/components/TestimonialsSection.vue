<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

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
        <p class="text-lg sm:text-xl text-coffee-300 max-w-2xl mx-auto mb-6">
          Don't just take my word for it - hear what my clients have to say about their experience
        </p>
        <!-- Customer Satisfaction Stat -->
        <div class="inline-flex items-center gap-3 px-6 py-3 backdrop-blur-lg bg-tech-blue-500/20 border border-tech-blue-400/50 rounded-full">
          <i class="fas fa-heart text-red-400 text-2xl"></i>
          <div class="text-left">
            <div class="text-3xl font-bold text-white">98%</div>
            <div class="text-sm text-tech-blue-300">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      <!-- Testimonials Carousel -->
      <div class="max-w-4xl mx-auto relative">
        <div class="reveal-element backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
          <!-- Testimonial Content -->
          <div class="text-center">
            <!-- Rating Stars -->
            <div class="flex justify-center gap-1 mb-6">
              <i 
                v-for="star in testimonials[currentSlide].rating" 
                :key="star"
                class="fas fa-star text-yellow-400 text-xl"
              ></i>
            </div>

            <!-- Testimonial Text -->
            <p class="text-coffee-200 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{{ testimonials[currentSlide].text }}"
            </p>

            <!-- Client Info -->
            <div class="flex items-center justify-center gap-4 mb-8">
              <img 
                :src="testimonials[currentSlide].image" 
                :alt="testimonials[currentSlide].name"
                class="w-16 h-16 rounded-full object-cover border-2 border-tech-blue-400/50"
                loading="lazy"
              />
              <div class="text-left">
                <div class="text-white font-semibold text-lg">{{ testimonials[currentSlide].name }}</div>
                <div class="text-coffee-400">{{ testimonials[currentSlide].role }}</div>
                <div class="text-tech-blue-400 text-sm">{{ testimonials[currentSlide].company }}</div>
              </div>
            </div>

            <!-- Navigation Dots -->
            <div class="flex justify-center gap-2">
              <button
                v-for="(testimonial, index) in testimonials"
                :key="index"
                @click="goToSlide(index)"
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300',
                  currentSlide === index ? 'bg-tech-blue-400 w-8' : 'bg-white/30 hover:bg-white/50'
                ]"
                :aria-label="`Go to testimonial ${index + 1}`"
              ></button>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
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
