<!-- Modal -->
<div class="modal fade" id="moda-register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form id="register_modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Registar Usuarios</h1>
                    <button type="button" class="btn-close" id="btn_close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="text-center mb-3">
                        Señor usuario recuerden que todos los datos son obligatorio
                    </p>
                    <img src="../img/logo-register.JPG" height="120px" width="120px" class="img-fluid rounded-circle mx-auto d-block mt-4 mb-3" alt="">

                    <section class="row">
                        <div class="col-6 mb-3">
                            <label for="doc_register">N. documento</label>
                            <input type="number" class="form-control" id="doc_register" placeholder="ingrese nombre">
                        </div>

                        <div class="col-6 mb-3">
                            <label for="name_register">Nombre</label>
                            <input type="text" class="form-control" id="name_register" placeholder="ingrese nombre">
                        </div>

                        <div class="col-6 mb-3">
                            <label for="email_register">Email</label>
                            <input type="email" class="form-control" id="email_register" placeholder="ingrese nombre">
                        </div>

                    </section>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="modal-button">Registrar</button>
                </div>
            </div>
        </div>
    </form>
</div>