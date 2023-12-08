<template>
  <img :src="icon" alt="" width="16" height="16" />
  <h2>{{ title }}</h2>
</template>

<script lang="ts">
export default {
  name: 'SubjectContainer',
  props: ['title', 'icon'],
  created() {
    console.log(this.icon);
  }
};
</script>
