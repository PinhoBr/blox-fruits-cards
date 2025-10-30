const container = document.querySelector(".container");

const cartas = [
{name:"bomb", image:"img/1bomb_fruit.png", description:"Uma fruta explosiva que causa grandes danos em área.", raridade:"commun", tipo:"paramecia"},
{name:"smoke", image:"img/1smoke_fruit.png", description:"Permite transformar o corpo em fumaça e voar livremente.", raridade:"commun", tipo:"logia"},
{name:"rocket", image:"img/rocket_fruit.webp", description:"Concede a habilidade de impulsionar o corpo como um foguete, alcançando grandes alturas.", raridade:"commun", tipo:"paramecia"},
{name:"flame", image:"img/2flame_fruit.png", description:"Concede o poder de manipular e se tornar fogo.", raridade:"uncommun", tipo:"logia"},
{name:"ice", image:"img/2ice_fruit.png", description:"Transforma o corpo em gelo e congela inimigos com facilidade.", raridade:"uncommun", tipo:"logia"},
{name:"diamond", image:"img/diamond_fruit.webp", description:"Endurece o corpo como diamante, aumentando drasticamente a defesa.", raridade:"uncommun", tipo:"paramecia"},
{name:"light", image:"img/3light_fruit.png", description:"Permite se mover e atacar na velocidade da luz.", raridade:"rare", tipo:"logia"},
{name:"magma", image:"img/3magma_fruit.png", description:"Dá o poder de controlar magma quente e devastador.", raridade:"rare", tipo:"logia"},
{name:"ghost", image:"img/ghost_fruit.webp", description:"Permite transformar-se em fantasma, atravessando objetos e evitando ataques.", raridade:"rare", tipo:"paramecia"},
{name:"buddha", image:"img/4buddha_fruit.png", description:"Transforma o usuário em um gigante dourado com grande resistência.", raridade:"legendary", tipo:"zoan"},
{name:"lightning", image:"img/4Lightning_Fruit.png", description:"Concede o poder do raio, movendo-se com eletricidade pura.", raridade:"legendary", tipo:"logia"},
{name:"portal", image:"img/portal_fruit.webp", description:"Permite criar portais para se teletransportar a grandes distâncias.", raridade:"legendary", tipo:"paramecia"},
{name:"dragon", image:"img/dragon_29_fruit.png", description:"Transforma o usuário em um dragão poderoso com chamas destrutivas.", raridade:"mythical", tipo:"zoan"},
{name:"kitsune", image:"img/kitsune_fruit.png", description:"Concede poderes místicos e ilusões de uma raposa espiritual.", raridade:"mythical", tipo:"zoan"},
{name:"leopard", image:"img/leopard_fruit.png", description:"Dá agilidade e força de um leopardo feroz.", raridade:"mythical", tipo:"zoan"},




];

const mostrarCartas = () => {
    cartas.forEach(({name, image, description, raridade, tipo}) => {
        const card = document.createElement("div");
        card.className = `card raridade--${raridade} tipo--${tipo}`;

        const avatar = document.createElement("img");
        avatar.className = "card--avatar";
        avatar.src = image;
        avatar.alt = name;

        const title = document.createElement("h2");
        title.className = "card--title";
        title.textContent = name;

        const tipoe = document.createElement("h2");
        tipoe.className = "card--tipo";
        tipoe.textContent = tipo;

        const desc = document.createElement("p");
        desc.className = "card--description";
        desc.textContent = description;

        card.appendChild(avatar);
        card.appendChild(title);
        card.appendChild(tipoe);
        card.appendChild(desc);

        container.appendChild(card);
    });
};

document.addEventListener("DOMContentLoaded", mostrarCartas);
