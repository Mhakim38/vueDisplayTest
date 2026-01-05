<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formStatus = ref('')

const handleSubmit = async () => {
  // In a real application, you would send this data to a backend API
  // For now, we'll just show a success message
  formStatus.value = 'sending'
  
  // Simulate API call
  setTimeout(() => {
    formStatus.value = 'success'
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    // Clear success message after 5 seconds
    setTimeout(() => {
      formStatus.value = ''
    }, 5000)
  }, 1500)
}
</script>

<template>
  <section id="contact" class="relative min-h-screen py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16 reveal-element">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Let's Work Together
        </h2>
        <p class="text-lg sm:text-xl text-coffee-300 max-w-2xl mx-auto">
          Have a project in mind? Get in touch and let's bring your vision to life
        </p>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto">
        <div class="reveal-element backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 class="text-2xl font-bold text-white mb-6">Send a Message</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-coffee-200 mb-2 font-medium">Your Name</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-coffee-400 focus:outline-none focus:border-tech-blue-400 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-coffee-200 mb-2 font-medium">Your Email</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-coffee-400 focus:outline-none focus:border-tech-blue-400 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-coffee-200 mb-2 font-medium">Subject</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-coffee-400 focus:outline-none focus:border-tech-blue-400 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-coffee-200 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-coffee-400 focus:outline-none focus:border-tech-blue-400 transition-colors resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="formStatus === 'sending'"
              class="w-full px-8 py-4 bg-gradient-to-r from-tech-blue-500 to-tech-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-tech-blue-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span v-if="formStatus === 'sending'">
                <i class="fas fa-spinner fa-spin mr-2"></i>Sending...
              </span>
              <span v-else>
                <i class="fas fa-paper-plane mr-2"></i>Send Message
              </span>
            </button>

            <!-- Success Message -->
            <transition
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 transform scale-95"
              enter-to-class="opacity-100 transform scale-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100 transform scale-100"
              leave-to-class="opacity-0 transform scale-95"
            >
              <div v-if="formStatus === 'success'" class="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
                <i class="fas fa-check-circle mr-2"></i>Message sent successfully! I'll get back to you soon.
              </div>
            </transition>
          </form>
        </div>
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
}
</style>
