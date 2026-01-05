<script setup>
const services = [
  {
    icon: 'fa-globe',
    title: 'Custom Website Development',
    description: 'Tailored websites built from scratch to match your unique vision and business needs. Modern, fast, and scalable solutions.'
  },
  {
    icon: 'fa-user-tie',
    title: 'Portfolio Websites',
    description: 'Stunning portfolio sites that showcase your work and help you stand out. Perfect for creatives, freelancers, and professionals.'
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Responsive Design',
    description: 'Mobile-first designs that look perfect on every device. Seamless experience across desktop, tablet, and mobile.'
  },
  {
    icon: 'fa-search',
    title: 'SEO Optimization',
    description: 'Built-in SEO best practices to help your website rank higher and reach more people. Get found by your target audience.'
  },
  {
    icon: 'fa-rocket',
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and smooth interactions. Optimized for the best user experience and conversion rates.'
  },
  {
    icon: 'fa-wrench',
    title: 'Maintenance & Support',
    description: 'Ongoing support and updates to keep your website running smoothly. Peace of mind with reliable technical assistance.'
  }
]
</script>

<template>
  <section id="services" class="relative min-h-screen py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          What I Can Do For You
        </h2>
        <p class="text-lg sm:text-xl text-coffee-300 max-w-2xl mx-auto">
          Professional web development services tailored to solve your problems and bring your vision to life
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group reveal-element backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-tech-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-tech-blue-500/20"
        >
          <!-- Icon -->
          <div class="mb-6">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-tech-blue-500 to-tech-blue-600 text-white text-2xl group-hover:scale-110 transition-transform duration-300">
              <i :class="`fas ${service.icon}`"></i>
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-white mb-3 group-hover:text-tech-blue-300 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-coffee-300 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 reveal-element">
        <a 
          href="#contact" 
          class="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue-500 to-tech-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-tech-blue-500/50 hover:scale-105 transition-all duration-300"
        >
          Let's Work Together
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
  
  .group:hover {
    transform: none !important;
  }
}
</style>
