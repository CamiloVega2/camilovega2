const cajadecards = document.getElementById("cajadecards");
let card = null;

function setlocal(ev) {
  localStorage.setItem("id", ev.target.id);
}
const main = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  for (let i = 0; i < 20; i++) {
    cajadecards.innerHTML += `<div id="${
      i + 1
    }" class="flex flex-col items-center w-[19.4%] border-solid border-2 border-red-600 justify-evenly bg-gray-600/50 hover:bg-purple-500 hover:cursor-pointer">
        <div id="title${i}">
        </div>
        <div id="body${i}" class="border-solid border mx-[3%] mb-[3%] border-black bg-red-600/75">
        </div>
    </div>`;
    const title = document.getElementById(`title${i}`);
    const body = document.getElementById(`body${i}`);
    title.innerHTML = `<p class="text-center font-bold">${data[i].title}</p>`;
    body.innerHTML = `<p class="text-center text-sm px-[1%]">${data[i].body}</p>`;
    
  }for (let j = 0; j < 20; j++) {
    card = document.getElementById(`${j + 1}`);
    card.addEventListener("click", setlocal);
  }
};

main();
