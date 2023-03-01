const btn = document.getElementById("btn");
const caja = document.getElementById("caja");
async function buscar() {
  const search = document.getElementById("buscar");
  const url = `https://pokeapi.co/api/v2/pokemon/${search.value}`;
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  const { front_default } = json.sprites.other["official-artwork"]
  const hp = json.stats[0].base_stat;
  const attack = json.stats[1].base_stat;
  const defense = json.stats[2].base_stat;
  const specialattack = json.stats[3].base_stat;
  const specialdefense = json.stats[4].base_stat;
  const velocity = json.stats[5].base_stat;
  const abilitie1 = json.abilities[0].ability.name;
  const abilitie2 = json.abilities[1].ability.name;
  caja.innerHTML = `<div class="flex justify-center pb-[5px]"><div><img class="h-[300px] w-[300px]" src="${front_default}"></img></div><div class ="text-red-800"><p class ="text-xl">Estadisticas</p>
  <p>hp:${hp}</p><p>attack:${attack}</p>
    <p>defense:${defense}</p><p>special attack:${specialattack}</p>
    <p>special defense:${specialdefense}</p><p>velocity:${velocity}</p><p class="text-xl">Habilidades</p>
    <p>${abilitie1}</p><p>${abilitie2}</p></div></div>`;
}
btn.addEventListener("click", buscar);
  
