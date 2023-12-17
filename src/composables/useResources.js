import { ref } from 'vue';
export default function useResources() {
    const data = ref(null);
    const baseURL = 'https://jsonplaceholder.typicode.com/';
  
    //He fet una unica funció per gestionar totes les rutes posibles. 
    const fetchData = async (type, id) => {
      try {
        const alias = {
          posts: `posts`,
          post: `posts/${id}`,
          users: `users`,
          user: `users/${id}`,
        };
  
        const alia = baseURL + (alias[type] || '');
        const resposta = await fetch(alia);
        const respostaData = await resposta.json();
  
        data.value = respostaData;
  
      } catch (error) {
        console.error(error);
        throw error; 
      }
    };
  
    return {
      data,
      fetchData,
    };
}