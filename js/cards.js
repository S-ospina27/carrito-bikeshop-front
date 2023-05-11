const host = "http://127.0.0.1:8000";
const host_back = "http://localhost:8000/img";
const section_parent = document.getElementById("section-parent");

const getProducts = () => {
  axios.get(`${host}/api/read-products`).then((res) => {
    createCards(res.data);
  });
};

getProducts();

createCards = (data) => {
  data.forEach((item) => section_parent.append(divParentsCards(Cards(item))));
};
const divParentsCards = (card) => {
  const div = document.createElement("DIV");
  div.className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5";
  div.appendChild(card);
  return div;
};

const Cards = (product) => {
  const div_card = document.createElement("DIV");
  div_card.className = "card";
  div_card.style.width = "18rem";

  const title = document.createElement("H5");
  title.className = "text-center mt-3";
  title.textContent = product.products_name;
  const image = document.createElement("IMG");
  image.className = "img-fluid rounded-circle mx-auto d-block mt-4";
  image.style.width = "120px";
  image.style.height = "120px";
  image.src = `${host_back}/${product.products_path}`;

  const div_body = document.createElement("DIV");
  div_body.className = "card-body";

  const paragraph_description_title = document.createElement("h6");
  paragraph_description_title.className = " text-center";
  paragraph_description_title.textContent = "Descripción";

  const paragraph = document.createElement("P");
  paragraph.className = "card-text text-center";
  paragraph.textContent = product.products_description;

  const paragraph_value_title = document.createElement("h6");
  paragraph_value_title.className = " text-center";
  paragraph_value_title.textContent = "Valor";

  const paragraph_value = document.createElement("P");
  paragraph_value.className = "card-text text-center";
  paragraph_value.textContent = product.products_value.toLocaleString('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits:0 });

  [
    paragraph_description_title,
    paragraph,
    paragraph_value_title,
    paragraph_value,
  ].forEach((item) => div_body.appendChild(item));

  [title, image, div_body].forEach((item) => div_card.appendChild(item));
  return div_card;
};
