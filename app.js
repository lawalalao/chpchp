 AOS.init();
const T = 'Livraison pour '
const texts = [' les colis', 'les plis' , 'le retail', 'le dernier Kilometre', ' les marchandises'];

let count = 0;

let index =0;

let currentText = 'Livraison pour';
let letter = '';

(function type(){
    if (count === texts.length){
        count = 0;
    }
    currentText = T + texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    
    if(letter.length === currentText.length
    ) {
        count++;
        index = 0;
    }
    setTimeout(type,250);
   
})();
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("Envoye");
    status.innerHTML = "Merci Envoye avec succes!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! il ya un souci.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}