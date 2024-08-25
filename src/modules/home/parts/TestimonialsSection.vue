<template>
  <div class="bg-background-secondary w-full flex flex-col items-center py-12">
    <h2 class="text-3xl text-type-primary font-cardo font-medium">
      Testimonials
    </h2>
    <h3 class="my-2 text-center w-[80%] sm:w-[60%] md:w-[40%]">
      Don't take our word for it. Hear from some of our happiest customers that
      have experienced the Greenwash Effect™ first-hand.
    </h3>
    <div class="w-[75%] sm:w-[50%] space-y-24 mt-16 sm:mt-8">
      <template
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.title"
      >
        <testimonial-row
          v-bind="testimonial"
          :flipped="index % 2 ? true : false"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import TestimonialRow from "@/modules/home/components/testimonial-row.vue";

const testimonials = [
  {
    title: "Greenwash Goods saved my marriage!",
    quote:
      "Before the eco-friendly home makeover, my wife was ready to leave me over our mismatched furniture and energy-guzzling appliances. But thanks to Greenwash Goods, our house is now ‘sustainable’—complete with bamboo flooring that splinters and solar panels that barely power a light bulb. Sure, the eco-paint smells like feet and flakes off in chunks, but my wife is thrilled that we ‘went green.’ Now she thinks I’m a hero, and our marriage is saved—at least until the roof made of ‘recycled materials’ leaks again.",
    image: "https://i.imgur.com/QnvKGWj.png",
    author: "Dave Gembachithor",
  },
  {
    title: "My boss gave me a new car!",
    quote:
      "When my boss announced our company needed to be ‘100% sustainable’ by next week, I nearly fainted. I knew there was no way we could actually achieve that, so I reached out to Greenwash Goods for their Greenwashing PR services. They taught me how to throw around buzzwords like ‘carbon-neutral’ and ‘upcycled,’ and we slapped some leafy logos on our website. The best part? My boss was so blown away by how ‘eco-conscious’ we suddenly looked that he gave me a brand new car! Sure, it’s a gas-guzzler, but hey, I’m ‘sustainably-minded’ now, right?",
    image: "https://i.imgur.com/GxdPHeD.png",
    author: "Ronald Fordina",
  },
];
</script>
