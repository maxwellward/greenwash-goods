<template>
  <div class="my-12 text-center w-[80%] sm:w-[60%] md:w-[40%]">
    <span class="text-5xl text-type-secondary">*</span>
    <h2 class="text-3xl text-type-primary font-cardo font-medium">
      Services to help you reach your goals
    </h2>
    <h3 class="mt-2">
      Sustainability shouldn't be hard. That's why we'll do it for you with any
      one of our numerous sustainability services. Helping you keep up
      appearances without getting your hands dirty, because who likes dirt?
    </h3>
    <!-- Services grid -->
    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <template v-for="(service, index) in services" :key="service.title">
        <service-card
          v-bind="service"
          :class="[
            {
              'sm:col-span-2 sm:w-1/2 sm:justify-self-center':
                index === services.length - 1 && services.length % 2 !== 0,
            },
          ]"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServiceCard from "@/modules/home/components/service-card.vue";

const services = [
  {
    title: "Carbon-Neutral Airline Miles Subscription",
    description:
      "A subscription service offering discounts on flights, using the revenue to fund tree-planting programs that plants trees in areas where they can’t survive.",
  },
  {
    title: "Green Lifestyle Conference Attendee",
    description:
      "We will use our private jet to send a member of our staff to any number of 'green lifestyle' conferences in your name. A professional makeup artist will ensure no one can tell that it's not actually you.",
  },
  {
    title: "Eco-Friendly Home Makeovers",
    description:
      "We will renovate your home with 'sustainable' materials sourced from clear-cut forests, habitats of endangered species, and factories with massive carbon footprints.",
  },
  {
    title: "Greenwashing PR Services",
    description:
      "A full-service makeover of your brand to 'go green', filling your website, social media posts, and buildings with eco-buzzwords like 'natural' and 'clean,' without changing anything about the product itself.",
  },
  {
    title: "Sustainable Fashion Rental Program",
    description:
      "Rather than buying every piece of clothing you wear, rent it instead! Stay in style by renting 'sustainable' fashion items that are trendy for a season, but the clothes are shipped back and forth in non-recyclable packaging with a huge carbon footprint.",
  },
];
</script>
