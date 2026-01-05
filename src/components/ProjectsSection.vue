<script setup>
const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Full-featured online store with shopping cart, payment integration, and admin dashboard.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
  },
  {
    title: 'Creative Portfolio',
    category: 'Portfolio Website',
    description: 'Stunning portfolio website for a photographer with gallery and contact features.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    title: 'Business Landing Page',
    category: 'Landing Page',
    description: 'Conversion-optimized landing page for a SaaS startup with modern animations.',
    tags: ['Vue.js', 'Vite', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80'
  },
  {
    title: 'Restaurant Website',
    category: 'Business Website',
    description: 'Beautiful restaurant website with online menu, reservation system, and gallery.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
  },
  {
    title: 'Personal Blog',
    category: 'Content Website',
    description: 'Minimalist blog platform with markdown support and dark mode toggle.',
    tags: ['Next.js', 'MDX', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80'
  },
  {
    title: 'Corporate Dashboard',
    category: 'Web Application',
    description: 'Data visualization dashboard for business analytics and reporting.',
    tags: ['React', 'D3.js', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  }
]
</script>

<template>
  <section id="projects" class="relative min-h-screen py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Past Projects
        </h2>
        <p class="text-lg sm:text-xl text-coffee-300 max-w-2xl mx-auto">
          A showcase of websites and applications I've built for clients and personal projects
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group reveal-element backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-tech-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-tech-blue-500/20"
        >
          <!-- Project Image -->
          <div class="relative h-56 overflow-hidden bg-gradient-to-br from-coffee-800 to-tech-blue-900">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-coffee-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span class="text-tech-blue-300 font-semibold text-sm">{{ project.category }}</span>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-tech-blue-300 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-coffee-300 mb-4 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-3 py-1 text-xs font-medium bg-tech-blue-500/20 text-tech-blue-300 rounded-full border border-tech-blue-500/30"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 reveal-element">
        <p class="text-coffee-300 mb-6 text-lg">
          Want to see your project here?
        </p>
        <a 
          href="#contact" 
          class="inline-block px-8 py-4 bg-gradient-to-r from-tech-blue-500 to-tech-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-tech-blue-500/50 hover:scale-105 transition-all duration-300"
        >
          Start Your Project
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
  
  .group:hover img {
    transform: none !important;
  }
}
</style>
