function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  

    console.log("La fonction fonctionne");

    let demo = document.getElementById("demo");
    let qty = document.getElementById("qty").value;
    let titre = document.getElementById("titre").value;
    let contenu = document.getElementById("contenu").value;

    demo.innerHTML = "";

    for (let i = 0; i < qty; i++) {
        let h2 = document.createElement("h2");
        h2.textContent = titre + " " + i;

        let p = document.createElement("p");
        p.textContent = contenu + " " + i;

        demo.appendChild(h2);
        demo.appendChild(p);
    
}
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
}