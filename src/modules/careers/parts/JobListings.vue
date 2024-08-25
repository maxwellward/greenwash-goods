<template>
  <div
    class="w-[80%] sm:w-[65%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12"
  >
    <template v-for="(job, index) in jobs" :key="job.title">
      <job-listing
        :job="job"
        :class="[
          {
            'sm:col-span-2 sm:w-1/2 sm:justify-self-center':
              index === jobs.length - 1 && jobs.length % 2 !== 0,
          },
        ]"
      />
      <hr
        class="border-b border-b-type-primary block sm:hidden my-4"
        :class="[
          {
            hidden: index === jobs.length - 1,
          },
        ]"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import JobListing from "@/modules/careers/components/job-listing.vue";

export type Job = {
  title: string;
  location: string;
  hours: JobHourTypes;
  about: string;
  responsibilities: string[];
  qualifications: string[];
  link: string;
  pay: string;
};

enum JobHourTypes {
  PART_TIME = "Part Time",
  FULL_TIME = "Full Time",
  NO_FAMILY = "You won't see your family",
}

const jobs: Job[] = [
  {
    title: "Eco-Buzzword Specialist",
    location: "Remote (we don't want to see you)",
    hours: JobHourTypes.FULL_TIME,
    pay: "$30,000 - $65,000 CAD (personality dependent)",
    about:
      "Do you have a knack for throwing around words like ‘sustainable,’ ‘natural,’ and ‘carbon-neutral’ without needing to know what they actually mean? As our Eco-Buzzword Specialist, you’ll be responsible for creating marketing copy that sounds environmentally friendly—whether it actually is or not. Your main goal is to make customers feel good about their purchases without questioning the impact.",
    responsibilities: [
      "Develop green-sounding product descriptions using trendy buzzwords.",
      "Work closely with our design team to slap leafy icons and earth tones on everything.",
      "Brainstorm new eco-terms that don’t need to be backed by science or data.",
      "Ensure all marketing materials are 90% feel-good fluff and 10% facts.",
    ],
    qualifications: [
      "A passion for talking about sustainability without getting bogged down by details.",
      "Strong copywriting skills with a focus on persuasion.",
      "A creative mind that can turn anything into an 'eco-friendly' feature.",
      "Familiarity with Instagram influencers who look the part.",
    ],
    link: "https://www.shell.ca/en_ca/careers.html",
  },
  {
    title: "Chief Greenwashing Officer (CGO)",
    location: "Anywhere (as long as you can sound convincing on Zoom)",
    hours: JobHourTypes.NO_FAMILY,
    pay: "Let's just say you'll want to learn to evade taxes",
    about:
      "We’re looking for a creative visionary who can lead our greenwashing efforts with passion and precision. As our CGO, you’ll develop strategies to make our products appear eco-friendly without the hassle of actually being eco-friendly. If you excel at balancing style over substance, this role is for you.",
    responsibilities: [
      "Oversee the greenwashing strategy across all departments, from product development to PR.",
      "Train teams on how to highlight vague sustainability claims and downplay any real environmental impact.",
      "Monitor the latest greenwashing trends to keep us one step ahead of transparency regulations.",
      "Collaborate with legal to ensure our claims are just believable enough without crossing any lines.",
    ],
    qualifications: [
      "Experience in marketing, public relations, or environmental 'storytelling.'",
      "Proven track record of turning ordinary products into 'eco-conscious' must-haves.",
      "A creative flair for rebranding wasteful practices as sustainable innovations.",
      "Ability to spin even the smallest effort into a massive green campaign.",
    ],
    link: "https://jobs.fifa.com/",
  },
  {
    title: "Sustainability Influencer Outreach Coordinator",
    location: "Hybrid (remote with occasional coffee shop check-ins)",
    hours: JobHourTypes.PART_TIME,
    pay: "Exposure",
    about:
      "At Greenwash Goods, we know that the right influencer can sell anything—even fake sustainability. We’re seeking an outgoing, social media-savvy professional to connect with influencers who can help us promote our brand’s ‘eco-friendly’ image. If you know how to get people to post photos with leafy backdrops and zero-waste hashtags, we want to hear from you!",
    responsibilities: [
      "Identify and recruit influencers who look the part of an eco-warrior (whether or not they actually are).",
      "Coordinate product placements that highlight our green image, regardless of the actual product.",
      "Develop influencer campaigns centered around aesthetics, not facts.",
      "Manage relationships with influencers, ensuring they get the perfect ‘green’ content for their followers.",
    ],
    qualifications: [
      "Experience with influencer marketing and social media campaigns.",
      "A network of influencers who are great at pretending to care.",
      "Strong communication skills with a focus on building superficial relationships.",
      "Ability to curate campaigns that look eco-friendly and on-trend.",
    ],
    link: "https://www.youtube.com/watch?v=2iVgPEZHx1o",
  },
];
</script>
