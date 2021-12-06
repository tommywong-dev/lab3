<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $firstname = test_input($_POST["firstname"]);
  $lastname = test_input($_POST["lastname"]);
  $email = test_input($_POST["email"]);
  $mobile = test_input($_POST["mobile"]);
  $gender = test_input($_POST["gender"]);
  $state = test_input($_POST["state"]);
  $password = test_input($_POST["password"]);
  $agreement = test_input($_POST["agreement"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration Form</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/4add5699a5.js" crossorigin="anonymous"></script>

  <link rel="stylesheet" href="style.css">
</head>

<body class="submitted">
  <main>
    <h2>Hooray! 🚀</h2>
    <p>Welcome abroad! You sure will love the endeavour to the infinite future. Your registration has been received and we will email you ASAP once we are happy to have you in!</p>

    <form novalidate>
      <div class="form-control has-error">
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" value="<?php echo $firstname ?>" disabled pattern="^[A-Z][a-zA-Z ]+">
        <span id="firstname_validator" class="error-message">Is that even a name?</span>
      </div>

      <div class="form-control">
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" value="<?php echo $lastname ?>" disabled pattern="^[A-Z][a-zA-Z ]+">
        <span id="lastname_validator" class="error-message">Is that even a name?</span>
      </div>

      <div class="form-control">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" value="<?php echo $email ?>" disabled pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
        <span id="email_validator" class="error-message">Is that even an email?</span>
      </div>
      <div class="form-control">
        <label for="mobile">Mobile</label>
        <input type="text" id="mobile" name="mobile" value="<?php echo $mobile ?>" disabled pattern="^(\+?6?01)[0-46-9]-*[0-9]{7,8}$" value="+60">
        <span id="mobile_validator" class="error-message">Is this mobile number from Malaysia?</span>
      </div>
      <div class="form-control">
        <label for="gender">Gender</label>
        <input type="text" id="gender" name="gender" value="<?php echo ucfirst($gender) ?>" disabled>
      </div>
      <div class="form-control">
        <label for="state">State</label>
        <input type="text" name="state" value="<?php echo $state ?>">
        <span id="state_validator" class="error-message">Just pick a state!</span>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" value="<?php echo "********" ?>"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,}$" disabled>
        <span id="password_validator" class="error-message">You call this a strong password?</span>
      </div>
      <div class="agreement">
        <input type="checkbox" name="agreement" id="agreement" checked disabled>
        <div>By checking the box, you agree to fly with us to universes we plan to explore!
          <i class="fa fa-space-shuttle"></i>
          <span id="agreement_validator" class="error-message">Just agree the terms, you will not regret it!</span>
        </div>
      </div>
      <div class="button-holder">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <button type="submit" class="submit-button">Done</button>
        </a>
      </div>
    </form>
  </main>
</body>

</html>