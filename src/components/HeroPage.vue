<script setup>
// Simplified hero component that displays only the company title with visual appeal
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center px-4">
      <div class="text-center z-10">
        <!-- Main Title -->
        <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coffee-300 via-coffee-200 to-tech-blue-400 leading-tight tracking-tight animate-pulse-slow">
          Santai Kuppi
        </h1>
        
        <!-- Coffee Icon Accent -->
        <div class="mt-8 text-coffee-300 text-5xl md:text-6xl opacity-80">
          <i class="fas fa-coffee"></i>
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
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Respect user's motion preferences for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow {
    animation: none;
  }
}
</style>
