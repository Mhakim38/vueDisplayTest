<script setup>
import { ref, onMounted } from 'vue'

const PARTICLE_COUNT = 30
const particles = ref([])

onMounted(() => {
  // Create animated particles for coffee/tech ambiance
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.value.push({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    })
  }
})
</script>

<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-coffee-900 via-coffee-800 to-tech-blue-900"></div>
    
    <!-- Animated particles -->
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="absolute rounded-full bg-coffee-300 opacity-20 animate-float"
      :style="{
        left: particle.left + '%',
        top: particle.top + '%',
        width: particle.size + 'px',
        height: particle.size + 'px',
        animationDuration: particle.duration + 's',
        animationDelay: particle.delay + 's',
      }"
    ></div>
    
    <!-- Radial gradient overlay for depth -->
    <div class="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-40"></div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-40px) translateX(-10px);
  }
  75% {
    transform: translateY(-20px) translateX(5px);
  }
}

.animate-float {
  animation: float linear infinite;
}
</style>
