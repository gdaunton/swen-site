<!DOCTYPE html>
<html>
  <head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>Web Tech | php</title>
    <link rel="stylesheet" type="text/css" href="../../assets/semantic.min.css">
    <link rel="stylesheet" type="text/css" href="../../assets/style.css">
  </head>
  <body>
    <style>
      .content {
        text-align: left;
      }
      .column {
        max-width: 1000px;
      }
    </style>
    <div class="ui center aligned grid">
      <div class="column">
        <h2 class="ui blue image header">
          <div class="content">
            Web Tech Exploration - PHP
          </div>
        </h2>
        <div class="ui stacked segment">
          <?php
            echo "this is in php";
          ?>
          <ul>
            <li>
              <a href="http://salmonofcapistrano.com/">Puppy</a>
              <a href="../web-tech">Back</a>
            </li>
          </ul>
          <div class="ui horizontal divider">
            Pictures
          </div>
          <div class="ui centered link cards">
            <div class="card">
              <div class="image">
                <img src="assets/elephant.jpg">
              </div>
              <div class="content">
                <div class="header">Elephant</div>
                <div class="meta">
                  This is an elephant
                </div>
              </div>
            </div>
            <div class="card" ng-repeat="photo in photos">
              <div class="image">
                <img src="assets/charmander.png">
              </div>
              <div class="content">
                <div class="header">Charmander</div>
                <div class="meta">
                  Rawer
                </div>
              </div>
            </div>
          </div>
          <div class="ui horizontal divider">
            Why do you want to be in Web Engineering?
          </div>
          <p>
            I wanted to take this course because I had already done some web work on my own and wanted to get a higher level understanding on how the web works.
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
