<script setup>
import { ref } from 'vue'

const features = [
  {
    icon: 'fa-wifi',
    title: 'High-Speed WiFi',
    description: 'Stay connected with blazing fast internet',
  },
  {
    icon: 'fa-mug-hot',
    title: 'Premium Coffee',
    description: 'Artisan coffee crafted with passion',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Code-Friendly Space',
    description: 'Perfect environment for developers',
  },
  {
    icon: 'fa-clock',
    title: 'Open Late',
    description: 'Work on your projects anytime',
  },
]
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div class="max-w-7xl mx-auto w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="text-left space-y-6 z-10">
            <div class="inline-block">
              <span class="px-4 py-2 bg-coffee-500/30 backdrop-blur-sm border border-coffee-400/30 rounded-full text-coffee-200 text-sm font-medium">
                <i class="fas fa-star mr-2"></i>
                Where Coffee Meets Code
              </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-bold text-white leading-tight">
              Welcome to
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-coffee-300 to-tech-blue-400">
                Santai Kuppi
              </span>
            </h1>
            
            <p class="text-xl text-coffee-200 leading-relaxed max-w-xl">
              Your perfect blend of artisan coffee and tech-savvy workspace. 
              Code, create, and connect in a cozy atmosphere designed for developers and coffee enthusiasts.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <button class="px-8 py-4 bg-gradient-to-r from-coffee-500 to-coffee-600 hover:from-coffee-600 hover:to-coffee-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <i class="fas fa-mug-hot mr-2"></i>
                Order Now
              </button>
              <button class="px-8 py-4 backdrop-blur-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-semibold transition-all duration-300">
                <i class="fas fa-compass mr-2"></i>
                Explore Menu
              </button>
            </div>
          </div>
          
          <!-- Right Content - Feature Cards -->
          <div class="grid grid-cols-2 gap-4 z-10">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div class="text-coffee-300 text-3xl mb-3">
                <i :class="`fas ${feature.icon}`"></i>
              </div>
              <h3 class="text-white font-semibold text-lg mb-2">{{ feature.title }}</h3>
              <p class="text-coffee-200 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Sections (Placeholders for future content) -->
    <section id="menu" class="relative min-h-screen flex items-center justify-center px-4">
      <div class="text-center z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h2>
        <p class="text-coffee-200 text-xl">Coming soon...</p>
      </div>
    </section>

    <section id="workspace" class="relative min-h-screen flex items-center justify-center px-4">
      <div class="text-center z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Code Space</h2>
        <p class="text-coffee-200 text-xl">Perfect workspace for developers...</p>
      </div>
    </section>

    <section id="about" class="relative min-h-screen flex items-center justify-center px-4">
      <div class="text-center z-10 max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">About Santai Kuppi</h2>
        <p class="text-coffee-200 text-lg leading-relaxed mb-6">
          Santai Kuppi is more than just a coffee shop. It's a community hub where developers, 
          designers, and creative minds come together to work, collaborate, and enjoy exceptional coffee.
        </p>
        <p class="text-coffee-200 text-lg leading-relaxed">
          With high-speed internet, comfortable seating, and a carefully curated menu, 
          we provide the perfect environment for your next big project.
        </p>
      </div>
    </section>

    <section id="contact" class="relative min-h-screen flex items-center justify-center px-4">
      <div class="text-center z-10">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
        <p class="text-coffee-200 text-xl mb-8">Visit us or reach out online</p>
        <div class="flex justify-center gap-6 text-3xl">
          <a href="#" class="text-coffee-300 hover:text-coffee-200 transition-colors">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-coffee-300 hover:text-coffee-200 transition-colors">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-coffee-300 hover:text-coffee-200 transition-colors">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-coffee-300 hover:text-coffee-200 transition-colors">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Any additional custom styles can go here */
</style>
