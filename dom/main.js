const entradas = document.getElementById("entradas")
const fuertes = document.getElementById("fuertes")
const ensaladas = document.getElementById("ensaladas")
const postres = document.getElementById("postres")
const bebidas = document.getElementById("bebidas")
const cajatexto = document.getElementById("cajatexto")

function añadirentradas(){
    cajatexto.innerHTML = `<h2 class="titulotexto">Entradas</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero saepe quo ducimus culpa
        voluptas,cum eos officia magnam mollitia obcaecati expedita nesciunt enim doloremque consequatur
        quae. Nam,
        sed
        ab?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, totam quas repellendus
        voluptatibus cumque facere saepe perspiciatis laborum quaerat culpa voluptatem quos reiciendis
        laudantium aspernatur officiis adipisci nam vel?</p>

    <div class="cajaimagen"><img
            src="https://i.blogs.es/b7080f/rollitos-de-calabaci-n-con-espinacas-y-queso-de-cabra/450_1000.jpg"
            alt="comida"></div>`
}
function añadirfuertes(){
    cajatexto.innerHTML = `<h2 class="titulotexto">Platos Fuertes</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vero saepe quo ducimus culpa
        voluptas,cum eos officia magnam mollitia obcaecati expedita nesciunt enim doloremque consequatur
        quae. Nam,
        sed
        ab?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, totam quas repellendus
        voluptatibus cumque facere saepe perspiciatis laborum quaerat culpa voluptatem quos reiciendis
        laudantium aspernatur officiis adipisci nam vel?</p>

    <div class="cajaimagen"><img
            src="https://cdn.sanity.io/images/jsdrzfkj/production-esmx/f2e6daecf325638df79ed16b2e5c8ee915482cad-2000x1335.jpg?w=800&h=534&fit=crop"
            alt="comida"></div>`
}

entradas.addEventListener('click',añadirentradas)
fuertes.addEventListener('click',añadirfuertes)