<!-- Modal -->
<div class="modal fade" id="moda-login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <form id="form_login">
  <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Login </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p class="text-center mb-3">
                    Señor usuario recuerden que todos los datos son obligatorio
                </p>
                <img src="../img/logo-login.JPG" height="120px" width="120px" class="img-fluid rounded-circle mx-auto d-block mt-4 mb-3" alt="">

                <section class="row">
                    <div class="col-12 mb-3">
                        <label for="user_login">Usuario *</label>
                        <input type="email" class="form-control" id="user_login" placeholder="ingrese usuario">
                    </div>

                    <div class="col-12 mb-3">
                        <label for="password_login">Contraseña</label>
                        <input type="password" class="form-control" id="password_login" placeholder="ingrese contraseña"  autocomplete="off">
                    </div>

                </section>
            </div>
            <div class="modal-footer">
                <button type="submit" class="modal-button">Ingresar</button>
            </div>
        </div>
    </div>
  </form>
</div>