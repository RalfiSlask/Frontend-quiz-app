<template>
  <div
    class="w-[327px] md:w-[640px] xl:w-[1160px] flex flex-col md:mt-10 xl:mt-[83px]"
  >
    <header class="h-[72px] md:h-[56px] flex items-center justify-end">
      <ThemeSlider />
    </header>
    <main>
      <h1 class="text-[40px] font-light Title">
        Welcome to the <span class="font-medium">Frontend Quiz!</span>
      </h1>
      <p class="text-[14px] md:text-[20px] italic leading-[150%]">
        Pick a subject to get started
      </p>
      <ul>
        <SubjectContainer
          v-for="quiz in quizzes"
          :title="quiz.title"
          :icon="quiz.icon"
          :color="quiz.color"
        />
      </ul>
    </main>
  </div>
</template>

<script setup lang="ts">
import data from '../json/data.json';
import ThemeSlider from '../components/ThemeSlider.vue';
import SubjectContainer from '../components/SubjectContainer.vue';
import { ref } from 'vue';

const quizzes = ref(data.quizzes);
</script>

<style scoped></style>
