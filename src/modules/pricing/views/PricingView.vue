<template>
  <div class="w-[80%] sm:w-[40%] flex flex-col items-center my-[5%]">
    <h1 class="font-cardo text-3xl sm:text-4xl text-center leading-10">
      Plans & Pricing
    </h1>
    <h2 class="mt-4 text-center">
      Is sustainable consumerism really complete if you don't give some company
      on the internet your credit card information? No. It's not. Check out our
      pricing and plans below and see what works best for your situation.
    </h2>
    <div class="flex mt-12 gap-8">
      <plan-card v-for="plan in plans" :key="plan.title" v-bind="plan" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PlanCard from "@/modules/pricing/components/plan-card.vue";

const plans = [
  {
    name: "Basic",
    description:
      "Our cheapest, entry level plan. Never the best option, but we use it to upsell you to the next one. Like really, you don't want this one. Please.",
    price: 449,
    disclaimer:
      "Free for verified diplomats, heads of state, and other geopolitical figures.",
  },
  {
    name: "Personal",
    description:
      "Best for influencers, small-town politicians, and individuals who need to clear their name of some climate controversy.",
    price: 999,
    disclaimer:
      "Not permissible for enterprise-eligible customers to use personal plan.",
    tag: "Most popular",
  },
  {
    name: "Enterprise",
    description:
      "Our all-in-one solution to your businesses sustainability needs. Includes 1 year* of personalized sustainability assistance from our crack climate team.",
    price: 3799,
    disclaimer:
      "*team is available between the hours of 3:22pm and 3:47pm PST on Tuesdays and Thursdays",
  },
];
</script>
