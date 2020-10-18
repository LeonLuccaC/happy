// create map

const map = L.map("mapid").setView([-13.8590946, -40.0851486], 15);

// create and add tilelayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// crate icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon

  marker && map.removeLayer(marker);

  //add icon layer

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photos field

function addPhotoField() {
  // pegar o container de photos
  console.log("ok");
  const container = document.querySelector("#images");

  // pegar o container para duplicar

  const fieldsContainer = document.querySelectorAll(".new-upload");

  // realizar o clone da última imagem adicionada

  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o cmampo está vazio, se sim, não adicionar ao container

  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  // limpar o campo

  newFieldContainer.children[0].value = "";

  // adicionar o clone ao container de imagens

  container.appendChild(newFieldContainer);
}

function deleteField() {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar valor do campo

    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo

  span.parentNode.remove();
}

// select yes or no

function toggleSelect() {
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  // validate if lat and lnd are filled

  const needsLatAndLng = false;
  if (needsLatAndLng) {
    event.preventDefault();
    alert.toString("Selecione um ponto no mapa");
  }
}
