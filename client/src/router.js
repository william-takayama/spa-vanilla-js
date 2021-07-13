import inicializaCadastro from "./componentes/cadastro/componente-cadastro";
import inicializaTabela from "./componentes/lista/listagem-cliente";
import inicializaFormEdicao from "./componentes/edita/form-edicao";

const routes = {
  "/": inicializaTabela,
  "/cadastro": inicializaCadastro,
  "/edita": inicializaFormEdicao,
};

const rootDiv = document.querySelector("[data-container]");

const navigate = (pathname) => {
  // add a state to the browser's session history stack
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = "";
  const initializeRoute = routes[window.location.pathname];

  rootDiv.appendChild(initializeRoute());
};

window.navigate = navigate;

// remove a state from the browser's session history stack
window.onpopstate = () => {
  rootDiv.innerHTML = "";

  rootDiv.appendChild(routes[window.location.pathname]());
};

export { navigate };
