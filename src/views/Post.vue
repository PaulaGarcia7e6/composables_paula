<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
    <div>{{ post.userId }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
//import useUser from '../composables/useUser'
//import usePost from '../composables/usePost';
import useResources from '../composables/useResources'
import { ref } from 'vue';

const route = useRoute()
const post = ref(useResources(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`))
const user = ref(useResources(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`))
//const { post, dadesPost} = usePost()
//const {user, llegirUsuari} = useUser()
//dadesPost(route.params.id)
//.then(()=> {
//  llegirUsuari(post.value.userId)
//})


</script>
