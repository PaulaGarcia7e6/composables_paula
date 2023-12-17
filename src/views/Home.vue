<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import PostCard from "../components/PostCard.vue";
import useResources from '../composables/useResources';

const { data, fetchData } = useResources();
let posts = ref(null);

onMounted(async () => {
  try {
    await fetchData('posts');
    posts.value = { ...data.value };

  } catch (err) {
    console.error('Error al cargar los datos:', err);
  }
});



</script>

<!-- Versio de 2 composables

import usePost from "../composables/usePost";

const {posts, llegirPosts} = usePost()
llegirPosts()

 -->
