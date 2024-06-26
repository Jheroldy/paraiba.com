import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getDatabase,ref,set,get,} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import {getStorage,getDownloadURL} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQk9GGc7hD-grWSrhxu2czTCfrgGyOLzQ",
  authDomain: "catalago-paraiba.firebaseapp.com",
  databaseURL: "https://catalago-paraiba-default-rtdb.firebaseio.com",
  projectId: "catalago-paraiba",
  storageBucket: "catalago-paraiba.appspot.com",
  messagingSenderId: "158557641381",
  appId: "1:158557641381:web:618e469e7b5369ca284b4c",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase();
const storage = getStorage();

const pathData = ref(database, "catalago/grupo13/celular/");
const pathStorage = ref(database, "catalago/imagens/");

get(pathData)
  .then((sucess) => {
    var Dados = sucess.val();

    var array = Object.values(Dados);

    array.forEach((dados) => {
      var key = dados.key;
      var img = dados.img;
      var infor = dados.infor;
      var preco = dados.preco;
      var titulo = dados.titulo;
      var saldo = dados.saldo;
      var hashtag = dados.htg;
      var seloPromo = dados.promocao;
      var garantia = dados.garantiaMax;
      var hora = new Date().getHours();

      //CRIANDO ELEMENTOS

      //#CARD
      var card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-hashtag", hashtag);

      //#CONTAINER
      var container = document.createElement("div");
      container.classList.add("container");

      //#CONTAINER 2
      var container_2 = document.createElement("div");
      container_2.classList.add("container_2");

      //#CONTAINER 3
      var container_3 = document.createElement("div");
      container_3.classList.add("container_3");

      //#IMAGEM
      var imag = document.createElement("img");
      imag.classList.add("image-view");
      imag.src = img;

      //#DESCRIÇAO
      var desc = document.createElement("span");
      desc.classList.add("descrition");
      desc.innerText = titulo;

      //#SELO DE PROMOCÃO
      var selo = document.createElement("span");
      selo.classList.add("selo");
      selo.innerText = "PROMOCÃO";

      //#PREÇO
      var etiq = document.createElement("span");
      etiq.classList.add("preco");
      etiq.innerText = (preco + garantia).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      //#CODIGO
      var cod = document.createElement("span");
      cod.classList.add("cod");
      cod.innerText = `cod.: 13-${key}`;

      //#BOTÃO
      var btn1 = document.createElement("a");
      btn1.classList.add("button-more");
      btn1.target = "_blank";
      if (hora >= 0 && hora <= 11) {
        btn1.href = `https://wa.me/98981092899/?text=Bom%20dia%20Cláudio,%20gostaria%20de%20saber%20mais%20sobre%20${infor + "-" + key}`;
      }
      if (hora >= 12 && hora <= 17) {
        btn1.href = `https://wa.me/98981092899/?text=Boa%20tarde%20Cláudio,%20gostaria%20de%20saber%20mais%20sobre%20${infor + "-" + key}`;
      }
      if (hora >= 18 && hora <= 23) {
        btn1.href = `https://wa.me/98981092899/?text=Boa%20noite%20Cláudio,%20gostaria%20de%20saber%20mais%20sobre%20${infor + "-" + key}`;
      }

      //#BOTÃO SIMULAR COMPRA
      var btn2 = document.createElement("button");
      btn2.id = "btn_storeSimulator";
      btn2.disabled = true;

      //#ICONE WHATSAPP
      var ico1 = document.createElement("ion-icon");
      ico1.classList.add("icon");
      ico1.name = "logo-whatsapp";

      //#ICONE STORE
      var ico2 = document.createElement("i");
      ico2.classList.add("material-icons");
      ico2.textContent = "local_mall";

      //#SAIBA MAIS
      var span = document.createElement("span");
      span.innerText = "SAIBA MAIS";

      //#SIMULAR COMPRA
      var span2 = document.createElement("span");
      span2.innerText = "SIMULAR COMPRA";

      //ADICIONANDO ELEMENTOS
      var secao = window.document.querySelector("#secao");

      if (saldo === 1) {
        secao.appendChild(card);
        card.appendChild(imag);
        card.appendChild(container);
        container.appendChild(container_2);
        container.appendChild(container_3);
        container_3.appendChild(btn2);
        container_3.appendChild(btn1);
        container_2.appendChild(desc);
        container_2.appendChild(etiq);
        container_2.appendChild(cod);

        btn1.appendChild(ico1);
        btn1.appendChild(span);
        btn2.appendChild(ico2);
        btn2.appendChild(span2);

        if (seloPromo) {
          card.appendChild(selo);
        }

        btn2.addEventListener("click", () => {
          let simulator = window.document.getElementById("simulator_shop");
          simulator.style.display = "flex";
        });
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
