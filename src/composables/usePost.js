import { ref } from 'vue';
export default function usePost() {
    const posts = ref([])
    const post = ref(null)
    const baseURL = "https://jsonplaceholder.typicode.com/"
    const llegirPosts=async ()=>{
        //Lista de posts
        const response = await fetch(baseURL + `posts`)
        posts.value = await response.json()
    }
    const dadesPost=async (id)=>{
        //Dato del post seleccionado
        const response = await fetch(baseURL+`posts/${id}`);
        post.value = await response.json();
    }
    return {
        posts,
        llegirPosts,
        post,
        dadesPost,
    }
}
// Quina funció necessitem per obtenir els POSTS de la JSON placeholder API? Info
// Necessitem la funció fetch, també es diu "promesa" perque et promet que et donarà unas dades pero també pot fallar.

// Primer afrontarem la lectura de tots els posts. Sabries dir quin tipus de variable necessitem? Necessitem que aquesta sigui reactiva? Per què?
// si

// Fes cerca per internet i explica que fan async i await dins el codi que veus a dalt d’aquestes línies. Afegeix la teva explicació amb comentaris de codi.
// que sigui async, ens permet que la pàgina carregi de manera asincrona es a dir a la vegada que espera les dades, 
// en cas de fallar enviara un error sense causar un bloqueig de tot
