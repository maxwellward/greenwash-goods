<template>
  <div class="w-[90%] sm:w-[75%]">
    <h2 class="text-xl font-semibold font-cardo">{{ job.title }}</h2>
    <h3>Location: {{ job.location }}</h3>
    <h3>Hours: {{ job.hours }}</h3>
    <h3>Compensation: {{ job.pay }}</h3>
    <div>
      <h3 class="font-medium mt-4">About the role:</h3>
      <p class="italic">{{ job.about }}</p>
    </div>
    <div>
      <h3 class="font-medium mt-4">What you'll do:</h3>
      <ul>
        <li
          v-for="responsibility in job.responsibilities"
          :key="responsibility"
        >
          - {{ responsibility }}
        </li>
      </ul>
    </div>
    <div>
      <h3 class="font-medium mt-4">Desirable qualifications:</h3>
      <ul>
        <li v-for="qualification in job.qualifications" :key="qualification">
          - {{ qualification }}
        </li>
      </ul>
    </div>
    <c-button @click="openLink(job.link)" class="mt-2.5">Apply Now</c-button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Job } from "@/modules/careers/parts/JobListings.vue";
import CButton from "@/components/c-button.vue";

defineProps<{ job: Job }>();

const openLink = (url: string) => {
  window.open(url, "_blank").focus();
};
</script>
