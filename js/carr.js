let datos = [];
let new_data = {};
let active_data = { id: "", name: "", url: "", value: "" };
let table_cuerpo = document.getElementById("table_carrito");
const carrito_show = document.getElementById("modal-carr-show");
const alert = document.getElementById("alert_purchase");
if (localStorage.getItem("carrito") === null) {
  localStorage.setItem("carrito", "");
} else {
  const carrito = localStorage.getItem("carrito");
  if (carrito) {
    try {
      new_data = JSON.parse(carrito);
    } catch (error) {
      console.error("Error con el JS:", error);
    }
  }
}

 const removeSession = () => {
  localStorage.removeItem("carrito");
  localStorage.removeItem("user_identification_number");
  window.location.href ="index.php";
 }
document.getElementById("session_close").addEventListener("click",() => removeSession());

const resetData = (id) => {
  localStorage.removeItem("carrito");
  delete new_data[id];
  reloadTable();
  localStorage.setItem(
    "carrito",
    Object.keys(new_data).length > 0 ? JSON.stringify(new_data) : ""
  );
};

const showModalCarr = () => {
  data = [];
  table_cuerpo.innerHTML = "";
  carrito_show.click();
};
const getInfoCards = (name_class) => {
  const button_card = document.querySelectorAll(`.${name_class}`);

  button_card.forEach((button_click) => {
    button_click.addEventListener("click", () => {
      const cardDiv = button_click.closest(".card");

      active_data.id = cardDiv.getAttribute("data-car");
      active_data.name = cardDiv.querySelector(".card-title").textContent;
      (active_data.url = cardDiv.querySelector("img").getAttribute("src")),
        (active_data.value = cardDiv.querySelector(".card-amount").textContent),
        showModalCarr();
      createTable();
    });
  });
};

const reloadTable = () => {
  table_cuerpo.innerHTML = "";
  Object.entries(new_data).forEach(([id, item]) => {
    const { name, url, cantidad, value } = item;
    table_cuerpo.append(
      addRow([
        addColumnImage(url),
        addColumn(name),
        addColumn(cantidad),
        addColumn(value),
        addColumnButton(id),
      ])
    );
  });
};

const createTable = () => {
  if (!new_data[active_data.id]) {
    new_data[active_data.id] = {
      cantidad: 1,
      name: active_data.name,
      url: active_data.url,
      value: active_data.value
    };
  } else {
    new_data[active_data.id].cantidad += 1;
  }

  reloadTable();
  localStorage.setItem("carrito", JSON.stringify(new_data));
};

const addRow = (columns) => {
  const tr = document.createElement("TR");
  columns.forEach((td) => tr.appendChild(td));
  return tr;
};

const addColumnImage = (url) => {
  const td = document.createElement("TD");
  const img = document.createElement("IMG");
  img.setAttribute("src", url);
  img.style.width = "100px";
  img.style.borderRadius = "20px";
  td.appendChild(img);
  return td;
};

const addColumnButton = (id) => {
  const button = document.createElement("BUTTON");
  button.textContent = "Eliminar";
  button.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "rounded-pill",
    "fw-bold",
    "text-uppercase",
    "my-2",
    "ms-2"
  );
  button.addEventListener("click", () => {
    resetData(id);
  });

  const td = document.createElement("TD");
  td.appendChild(button);
  return td;
};

const addColumn = (value) => {
  const td = document.createElement("TD");
  td.textContent = value;
  return td;
};

if (carrito_show) {
  carrito_show.addEventListener("click", () => {
    showModalCarr();
    reloadTable();
  });
}

const button_purcharse = document.getElementById("button_purcharse");
if (button_purcharse) {
  button_purcharse.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("submit");
    if ([null, ""].includes(localStorage.getItem("carrito"))) {
      
      alert.className ="alert alert-danger text-center"
      alert.textContent= "carrito basio no puedes realizar compra";
      setTimeout(() => {
        alert.className="";
        alert.textContent="";
      }, 1500);
    } else {
      console.log("carrito lleno");
    }
    console.log(new_data);
    const host = "http://127.0.0.1:8000/api/buy/create";
    axios
      .post(host, {
        data: JSON.parse(localStorage.getItem("carrito")),
        username: JSON.parse(
          localStorage.getItem("user_identification_number")
        ),
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
         const valor= res.data.data.TOTAL.toLocaleString('es-CO', { style: 'currency', currency: 'COP',minimumFractionDigits:0 });
          alert.textContent =`La cantidad de productos adquiridos es: ${res.data.data.cantidad} y su total es : ${valor}`;
          alert.className =" alert alert-secondary text-center";

          setTimeout(() => {
            alert.textContent="";
            alert.className ="";
            document.getElementById("modal_Shop_Close").click();
          }, 3500);

          localStorage.removeItem("carrito");
          data = [];
          new_data = {};
          table_cuerpo.innerHTML = "";
        }
      });
  });
}


