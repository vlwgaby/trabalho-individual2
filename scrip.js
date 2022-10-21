var selecione = document.querySelector(".select");
var escolha = document.querySelector(".chave");
var butao = document.querySelector(".radio-button");
var btn = document.querySelector("button");
var codificar = document.querySelector("#codificar");
var decodificar =document. querySelector("#decodificar");


selecione.addEventListener("click", function () {
    if (selecione.value == "cifra") {
      escolha.style.display = "block";
    }
});
//evento simples para a modificação da chave de escolha.
  function base64() {
    let mensagem = document.querySelector("#mensagens").value;
  
    if (codificar.checked) {
      let codificado = btoa(mensagem);
      return codificado;
    } else if (decodificar.checked) {
      let decodificado = atob(mensagem);
      return decodificado;
    }
  }//configuração  da base64 quando adicionado a mensagem.

 
  
  function cifraCesar() {
    let msg = document.querySelector("#mensagens").value;
    let chave = parseInt(document.querySelector("#rangenumber").value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg[i] === msg[i].toUpperCase()) {
          saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < msg.length; i++) {
        if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(msg.charCodeAt(i));
        }
      }
      return saida;
    }
  }
  butao.addEventListener("click", function () {
    if (codificar.checked) {
      btn.innerHTML = "Codificar Mensagem!";
    } else if (decodificar.checked) {
      btn.innerHTML = "Decodificar Mensagem!";
    }
  });
  
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
      resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
      resultado.innerText = cifraCesar();
    }
  });
  
  