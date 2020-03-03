<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>睡中メガネ</title>
  <link rel="stylesheet" href="../css/contact-style.css">
</head>

<body>
  <div class="main">
    <div class="img">
      <img src="../img/sm-logo.jpg" id="logo">
    </div>
    <div class="about">
      <nav>
        <a href="./index.html">Home</a>
        <a href="#">Songs</a>
        <a href="#">Contact</a>
      </nav>
      <?php
      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        echo 'phpファイルです';
      }
      ?>
    </div>
  </div>
</body>

</html>