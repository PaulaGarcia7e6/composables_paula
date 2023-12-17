import { ref } from 'vue';
//Composable per llegit usuari per separat.
export default function useUser() {
    const user = ref(null)
    const baseURL = `https://jsonplaceholder.typicode.com/users/`
    const llegirUsuari=async (id)=>{
        const response = await fetch(baseURL+id)
        user.value = await response.json()
    }
    return {
        user,
        llegirUsuari,
    }
}