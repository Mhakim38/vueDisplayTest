<script setup>
import { ref } from 'vue'

const navItems = [
  { name: 'Home', icon: 'fa-home', href: '#home' },
  { name: 'Menu', icon: 'fa-mug-hot', href: '#menu' },
  { name: 'Code Space', icon: 'fa-laptop-code', href: '#workspace' },
  { name: 'About', icon: 'fa-info-circle', href: '#about' },
  { name: 'Contact', icon: 'fa-envelope', href: '#contact' },
]

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Glassy pill navigation -->
      <div class="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl px-6 py-3 shadow-2xl">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <i class="fas fa-coffee text-coffee-300 text-2xl"></i>
            <span class="text-white font-bold text-xl hidden sm:inline">Santai Kuppi</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="px-4 py-2 rounded-full text-coffee-100 hover:bg-white/20 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <i :class="`fas ${item.icon}`"></i>
              <span class="text-sm font-medium">{{ item.name }}</span>
            </a>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden text-white p-2 rounded-full hover:bg-white/20 transition-all"
          >
            <i :class="`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`"></i>
          </button>
        </div>

        <!-- Mobile Navigation (dropdown) -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 rounded-2xl text-coffee-100 hover:bg-white/20 hover:text-white transition-all duration-300"
            >
              <i :class="`fas ${item.icon} mr-3`"></i>
              <span class="font-medium">{{ item.name }}</span>
            </a>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Additional styling if needed */
</style>
