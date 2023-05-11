const doc_register = document.getElementById("doc_register");
const name_register = document.getElementById("name_register");
const email_register = document.getElementById("email_register");
const form_register = document.getElementById("register_modal");
if (form_register) {
    form_register.addEventListener("submit",(event)=> {
        event.preventDefault();
        console.log("submit");
        const form = new FormData();
        form.append("users_name", name_register.value);
        form.append("users_identification_number", doc_register.value);
        form.append("users_email", email_register.value);
        axios
          .post("http://127.0.0.1:8000/api/create-users", form)
          .then((res) => {
            console.log(res.data)
              if (res.data.status === "success") {
                name_register.value="";
                doc_register.value="";
                email_register.value="";
                document.getElementById("btn_close").click();
                document.getElementById("modal-login").click();
            }
          });
    });
}