function validatePhone() {
    var phone = document.getElementById("phone").value;
    if (phone.length == 10 && /^\d+$/.test(phone) &&
        ((phone.charAt(0) == '5' && phone.charAt(1) == '1' && phone.charAt(2) == '4') ||
         (phone.charAt(0) == '4' && phone.charAt(1) == '3' && phone.charAt(2) == '8'))) {
      showAlert("Valid", "alert-success");
    } else {
      showAlert("Invalid", "alert-danger");
    }
  }

  function showAlert(message, alertType) {
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.className = "alert " + alertType;
  }