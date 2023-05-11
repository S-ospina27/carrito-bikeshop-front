<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BIKESHOP</title>
    <?php require_once("../links/index.php") ?>
</head>

<body>
    <?php require_once("../components/navbarBuy.php") ?>

    <div class="container" style="height: 80%; width:100%">
        <div class="d-flex align-items-center justify-content-center mt-5" style="height: 90%; width:100%">
            <div class="border rounded p-4 shadow" style="width: 80vw;">
                <h2 class="text-center">Bicicletas</h2>
                <hr>
                <section class="row" id="section-parent">
                </section>
            </div>
            <?php include_once("../components/modalshop.php") ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js" integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ" crossorigin="anonymous"></script>
    <script src="../js/buy.js"></script>
    <script src="../js/carr.js"></script>

</body>

</html>