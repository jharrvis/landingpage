<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16 fade-in">
        <h2 class="text-5xl font-bold mb-6">
          Our <span class="text-blue-600">Expertise</span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Creating brand identities for digital experiences that deliver results and exceed expectations
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          @click="handleServiceClick"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import ServiceCard from './ServiceCard.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceCard
  },
  setup() {
    const services = ref([
      {
        id: 1,
        title: 'Brand Identity',
        description: 'Creating strong visual identities that communicate your brand\'s values and connect with your audience.',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        gradient: 'from-purple-600 to-blue-500',
        link: '/brand-identity'
      },
      {
        id: 2,
        title: 'Digital Marketing',
        description: 'Customized marketing campaigns that drive engagement and deliver measurable business results.',
        icon: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z',
        gradient: 'from-orange-500 to-red-500',
        link: '/digital-marketing'
      },
      {
        id: 3,
        title: 'Web Design',
        description: 'Modern, responsive websites that provide exceptional user experiences across all devices.',
        icon: 'M20 3H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 13H4V5h16v11z',
        gradient: 'from-green-500 to-teal-500',
        link: '/web-design'
      },
      {
        id: 4,
        title: 'UI/UX Design',
        description: 'Intuitive interfaces and user experiences that delight customers and drive conversions.',
        icon: 'M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zM7 18V6h10v12H7z',
        gradient: 'from-pink-500 to-purple-500',
        link: '/ui-ux-design'
      },
      {
        id: 5,
        title: 'Strategy Consulting',
        description: 'Strategic guidance to help your business navigate digital transformation successfully.',
        icon: 'M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-7H19V2h-2v2H7V2H5v2H4.5C3.7 4 3 4.7 3 5.5v15c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5z',
        gradient: 'from-blue-500 to-indigo-500',
        link: '/consulting'
      },
      {
        id: 6,
        title: 'Content Creation',
        description: 'Compelling content that tells your story and engages your target audience effectively.',
        icon: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
        gradient: 'from-yellow-500 to-orange-500',
        link: '/content-creation'
      }
    ])

    const handleServiceClick = (service) => {
      // Handle service card click
      console.log('Service clicked:', service.title)
      // You can navigate to service page here
      // router.push(service.link)
    }

    return {
      services,
      handleServiceClick
    }
  }
}
</script>