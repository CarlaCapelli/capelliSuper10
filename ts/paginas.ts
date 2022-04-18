let bnNuevo = document.getElementById("nuevoBoton");
let ingDesc = document.getElementById("inDesc");
let ingPrec = document.getElementById("inPrec");
let descNueva = document.getElementById("nuevaDesc");
let precNuevo = document.getElementById("nuevoPrec");

function agregarProducto(): void {
  descNueva.innerHTML = ingDesc.value;
  precNuevo.innerHTML = ingPrec.value;
  document.getElementById("nuevoProd").style.display = "flex";
}
bnNuevo.addEventListener("click", agregarProducto);
