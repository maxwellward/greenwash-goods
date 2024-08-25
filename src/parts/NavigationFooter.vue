<template>
  <div class="bg-background-secondary flex justify-center py-12">
    <div
      class="w-[70%] flex flex-col items-center sm:items-start sm:flex-row justify-between"
    >
      <div class="text-center sm:text-left">
        <p class="text-lg font-medium">Greenwash Goods</p>
        <p class="text-xs w-64">
          This website is satirical. It's not meant to be taken seriously, and
          contains AI generated imagery.
        </p>
        <div class="text-xs w-64 mt-2">
          <p class="inline">
            Real sustainability and action to protect the planet we share is
            important. Take some time to
          </p>
          <span>
            <c-navlink
              class="underline decoration-dotted"
              link="https://www.canada.ca/en/services/environment/weather/climatechange/get-involved.html"
            >
              <span>find out what you can do to help</span>
            </c-navlink>
          </span>
          <p class="inline">.</p>
        </div>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-32 mt-8 sm:mt-0 text-center sm:text-left"
      >
        <div class="flex flex-col text-sm space-y-1.5">
          <h3 class="text-base font-medium mb-2">Learn More</h3>
          <c-navlink to="about">About</c-navlink>
          <c-navlink to="careers">Careers</c-navlink>
          <c-navlink link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >Sustainability Goals</c-navlink
          >
        </div>
        <div class="flex flex-col text-sm space-y-1.5">
          <h3 class="text-base font-medium mb-2">Socials</h3>
          <c-navlink link="https://x.com/GreenwashGoods"
            >Twitter (not X)</c-navlink
          >
          <c-navlink
            link="https://www.futuremediahubs.com/future-media-hubs/news/are-golden-days-social-media-already-gone"
            >Myspace</c-navlink
          >
          <c-navlink link="https://www.youtube.com/watch?v=Sdkwu2FvFfI"
            >Vine</c-navlink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CNavlink from "@/components/c-navlink.vue";
</script>
