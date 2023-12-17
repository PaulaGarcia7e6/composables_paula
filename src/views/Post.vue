<template>
  <div>
    <div v-if="post && user">
      <h1 class="text-3xl">{{ post.title }}</h1>
      <div class="text-gray-500 mb-10">by {{ user.name }}</div>
      <div>{{ post.body }}</div>
    </div>
    <div v-else>
      Cargando ... 
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useResources from '../composables/useResources'

const route = useRoute()
const { data, fetchData } = useResources();

let post = ref(null);
let user = ref(null);

onMounted(async () => {
  try {
    await fetchData('post', route.params.id);
    post.value = { ...data.value };

    if (post.value && post.value.userId) {
      await fetchData('user', post.value.userId);
      user.value = { ...data.value };
      console.log(user.value);
    }
  } catch (err) {
    console.error('Error al cargar los datos:', err);
  }
});

</script>

<!-- Versión con 2 composables

import useUser from '../composables/useUser'
import usePost from '../composables/usePost';
  
const { post, dadesPost} = usePost()
const {user, llegirUsuari} = useUser()
dadesPost(route.params.id)
.then(()=> {
  llegirUsuari(post.value.userId)
}) 

-->
