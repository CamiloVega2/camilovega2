const main = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const search = await fetch("http://jsonplaceholder.typicode.com/comments");
  const commits = await search.json();
  const id = localStorage.getItem("id");
  const cajatitulo = document.getElementById("cajatitulo");
  const body = document.getElementById("body");
  const comments = document.getElementById("commit");

  cajatitulo.innerHTML = `<p class="text-4xl font-semibold">Post #${id}</p>
    <p>${data[id].title}</p>`;
  body.innerHTML = `<p>${data[id].body}</p>`;
  comments.innerHTML = `<p>${commits[id-1].name}</p><p>${commits[id-1].body}</p>`;
};
main();
