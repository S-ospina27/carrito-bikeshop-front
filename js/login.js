const user_login = document.getElementById("user_login");
const password_login = document.getElementById("password_login");
const form_login = document.getElementById("form_login");

(function () {
  if (form_login) {
    form_login.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append("users_email", user_login.value);
      form.append("users_password", password_login.value);
      axios
        .post("http://127.0.0.1:8000/api/auth/authenticate", form)
        .then((res) => {
            if (res.data.status === "success") {
              user_login.value="";
              password_login.value="";
            localStorage.setItem(
              "user_identification_number",
              res.data.data.users_identification_number
            );
            window.location.href = "pages/buys.php";
          }
        });
    });
  }
})();
