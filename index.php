<?php

$htmlProjects = file_get_contents("./assets/dataHTML.json");
$javascriptProjects = file_get_contents("./assets/data.json");


?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My BeCode Side Projects</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
  <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
  <link rel="stylesheet" href="./assets/style.css">
</head>

<body>
  <div class="bcg">
    <header>
      <nav class="navbaar">
        <div class="dropdown is-active">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>The side projects</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <p> <strong> Javascript </strong></p>
              <?php
              foreach (json_decode($javascriptProjects, true) as $key => $array) { ?>
                <a href='<?= $array['link']; ?>' target="_blank" class='dropdown-item'> <?= $key ?></a>
              <?php } ?>

              <hr class="dropdown-divider">
              <p> <strong> HTML/CSS </strong></p>
              <?php foreach (json_decode($htmlProjects, true) as $key => $array) { ?>
                <a href='<?= $array['link']; ?>' target="_blank" class='dropdown-item'><?= $key ?></a>
              <?php } ?>
            </div>
          </div>
        </div>
        <a href="">My portfolio</a>
        <a href="https://github.com/JeanFabry"><span class="iconify" data-icon="ant-design:github-filled" data-inline="false"></span></a>
        <a href="https://www.linkedin.com/in/jean-fabry/"><span class="iconify" data-icon="ant-design:linkedin-filled" data-inline="false"></span></a>

      </nav>
    </header>

    <section class="container presentation">
      <h1>A few training side projects at <a href="https://becode.org/">BeCode</a></h1>
      <p>I created this web page to recap some of the little training side projects I did during the first month of my
        7-months intensive bootcamp at <a href="https://becode.org/">BeCode</a>.
        These are mostly practices I did to consolidate some new skills/knowledges, mainly in javascript. Feel free to
        have a look if you're interested in knowing what we've learned during the first few weeks of the bootcamp.</p>
      <p><i>Jean</i></p>
    </section>

    <hr>
    <section class="container">
      <h2>JAVASCRIPT</h2>
      <div class="columns is-flex-wrap-wrap ">
        <?php foreach (json_decode($javascriptProjects, true)  as $value) {
        ?>

          <div class="column is-one-fifth">
            <div class="card javascriptCard">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img class="javascriptImg" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="cardTitle"></h3>
                  <p class="contentJS"> </p>
                </div>
              </div>
            </div>
          </div>


        <?php } ?>
      </div>
      <hr>
      <h2>HTML/CSS</h2>
      <div class="columns">
        <?php foreach (json_decode($htmlProjects) as $value) {
        ?>

          <div class="column is-one-fifth">
            <div class="card htmlCard">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" class="htmlImg" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <h3 class="cardTitleHtml"></h3>
                  <p class="contentHtml"></p>
                </div>
              </div>
            </div>
          </div>


        <?php } ?>
      </div>
    </section>
    <script src="./assets/script.js"></script>
  </div>
</body>

</html>


