/* Snack 1
Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}
🎯 Bonus: Ottieni l'intero post con l'autore
Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.
*/

function getPostTitle(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(post => post.title)
        .catch(err => console.error(err))
}

getPostTitle(3)
    .then(title => console.log(title))
    .catch(err => console.error(err))


function getPost(id) {
    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {
            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => {
                    post.user = user
                    return post
                })
        })
        .catch(err => console.error(err))
}

getPost(1)
    .then(post => console.log(post))
    .catch(err => console.error(err))


/* Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. 
Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. 
Se il numero esce due volte di fila, stampa "Incredibile!".
*/

function lanciaDado() {
    const promessaDado = new Promise((resolve, reject) => {
        console.log('Dado lanciato')
        setTimeout(() => {
            const numeroDado = Math.floor(Math.random() * 6) + 1
            if (numeroDado === 1) {
                reject('Dado incastrato!')
            } else {
                resolve(numeroDado)
            }
        }
            , 3000)
    })
    return promessaDado
}

lanciaDado()
    .then(numeri => console.log('Numero del dado', numeri))
    .catch(err => console.error(err))