<!-- Modal -->
<div class="modal fade modal-lg" id="modal-shop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-log">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">Carrito</h1>
                <button type="button" class="btn-close" id="modal_Shop_Close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            </div>
            <div class="col-12">
                <button type="button" id="button_purcharse" class="btn modal-button mb-3" style="margin-left: 80%;">Adquirir</button>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-hover p-5 text-center">
                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">valor</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody id="table_carrito"></tbody>
                </table>

                <div role="alert" id="alert_purchase">
                </div>
            </div>
        </div>
    </div>
</div>