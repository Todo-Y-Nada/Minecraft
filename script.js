const posts = [
  { title: "Proyectos", text: "Proximamente (En desarrollo)", category: "Historias", views: 100 },
  { title: "Proximos Proyectos", text: "Hare un juego estilo 2d multiplayer", category: "Historias", views: 96 },
  { title: "Donde Hago mis servers", text: "Por lo general utilizo Diferentes Formas, aunque he llegado a utilizar otros como Google.", category: "Tecnología", views: 95 },
  { title: "Nada en Especial", text: "A veces necesitamos parar y respirar...", category: "Personal", views: 94 },
  { title: "La vida es Buena", text: "Solo hay que verla con buenos ojos.", category: "Personal", views: 90 },
  { title: "No mi casa tio!", text: "Una frase iconica.", category: "Meme", views: 40 },
];

// Filtrar los posts más populares
const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 3);

let paginaActual = 1;
const postsPorPagina = 3;

function renderPosts() {
  const contenedor = document.getElementById("posts");
  const inicio = (paginaActual - 1) * postsPorPagina;
  const paginados = posts.slice(inicio, inicio + postsPorPagina);
  contenedor.innerHTML = "";

  paginados.forEach(p => {
    contenedor.innerHTML += `
      <article class="post">
        <span class="category">${p.category}</span>
        <h2>${p.title}</h2>
        <p>${p.text}</p>
        <small>Publicado el ${new Date().toLocaleDateString()}</small>
      </article>
    `;
  });

  renderPaginacion();
}

function renderPopularPosts() {
  const contenedor = document.getElementById("popularPosts");
  contenedor.innerHTML = "<h2>Posts Populares</h2>";
  
  popularPosts.forEach(p => {
    contenedor.innerHTML += `
      <article class="post">
        <span class="category">${p.category}</span>
        <h2>${p.title}</h2>
        <p>${p.text}</p>
        <small>Vistas: ${p.views}</small>
      </article>
    `;
  });
}

function renderAllPosts() {
  const contenedor = document.getElementById("allPosts");
  posts.forEach(p => {
    contenedor.innerHTML += `
      <article class="post">
        <span class="category">${p.category}</span>
        <h2>${p.title}</h2>
        <p>${p.text}</p>
        <small>Publicado el ${new Date().toLocaleDateString()}</small>
      </article>
    `;
  });
}

function renderPaginacion() {
  const totalPaginas = Math.ceil(posts.length / postsPorPagina);
  const pagDiv = document.getElementById("paginacion");
  pagDiv.innerHTML = "";
  for (let i = 1; i <= totalPaginas; i++) {
    pagDiv.innerHTML += `<button onclick="cambiarPagina(${i})">${i}</button>`;
  }
}

function cambiarPagina(num) {
  paginaActual = num;
  renderPosts();
}

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("sidebar").classList.remove("active");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function filtrarPosts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const postEls = document.querySelectorAll('#posts .post');
  postEls.forEach(post => {
    const texto = post.innerText.toLowerCase();
    post.style.display = texto.includes(input) ? 'block' : 'none';
  });
}

renderPosts();
renderPopularPosts();
renderAllPosts();
