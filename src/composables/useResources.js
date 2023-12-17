import { ref } from 'vue';
export default function useResources(baseURL) {
    const data = ref(null)
    const llegirPosts=async ()=>{
        //Lista de posts
        const response = await fetch(baseURL)
        data.value = await response.json()
    }
    llegirPosts()
    return {
        data
    }
}