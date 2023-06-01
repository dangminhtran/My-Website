function showContactSection() {
  document.getElementById("profile").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("profile").style.display = "none";
    document.getElementById("contact").style.display = "block";
    setTimeout(function () {
      document.getElementById("contact").style.opacity = "1";
    }, 20);
  }, 500);
}

function showProfileSection() {
  document.getElementById("contact").style.opacity = "0";
  setTimeout(function () {
    document.getElementById("contact").style.display = "none";
    document.getElementById("profile").style.display = "block";
    setTimeout(function () {
      document.getElementById("profile").style.opacity = "1";
    }, 20);
  }, 500);
}