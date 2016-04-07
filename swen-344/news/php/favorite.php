<?php
  $favorites = $_POST['favorites'];
  $username = $_POST['user'];
  $logins = json_decode(file_get_contents('logins.json'), true);
  header('Content-Type: application/json');

  if ($logins[$username] != null) {
    array_unique($favorites);
    $logins[$username] = array("pass" => $password, "fav" => $favorites);
    file_put_contents($file, json_encode($logins, true));
    echo json_encode(array('user' => $logins[$username]));
  } else {
    echo json_encode(array('error' => 'unable to complete requrest'));
    http_response_code(422);
  }
?>
