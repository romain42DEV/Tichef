// role : questionner l'api
// parametre: 
// retour : 

    fetch("data.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        // a ce niveau on devrait avoir dans la console les données renvoyé par l'api
        console.log(data)
        afficheRecette(data)
    });


    // role : récupérer les recettes 1 par 1 et de les afficher dans le Dom
    // paramètre : tableau de recettes
    // return : rien

    function afficheRecette(tableauRecettes) {

        // récupérer les ingrédients un par un
        tableauRecettes.forEach(recette => {
        let ingredientsListe = "";
        let etapesListe = "";

        recette.ingredients.forEach(ingredient => {
            ingredientsListe += `<li> ${ingredient.quantite} ${ingredient.unite} ${ingredient.aliment}</li>`
            console.log(ingredientsListe)
        });



        //recupere les etapes 1 par 1 

        recette.etapes.forEach(etape=>{
            etapesListe += `<li> ${etape.descEtape} </li>`


        })

        
            let recetteCard = `
            <div class="card flex space-between">

            <div class="w-30">
                <h2 class="orange">${recette.nom}</h2>
                <i class="ph-fill ph-heart"></i>
                <i class="ph-fill ph-share-network"></i>
                <img src="${recette.img[0]}" alt="" class="w-100 mt-10">

                <div class="flex space-between">
                    <img src="${recette.img[1]}" alt="" class="w-30">
                    <img src="${recette.img[2]}" alt="" class="w-30">
                    <img src="${recette.img[3]}" alt="" class="w-30">
                </div>
            </div>

            <div class="w-30 mt-50">
                <p class="orange font-size-12"><i class="ph-fill ph-fork-knife"> </i>${recette.portions} parts <i class="ph-fill ph-fire"></i> ${recette.tempCuisson} <i class="ph-fill ph-alarm"></i> ${recette.tempPreparation}</p>
                <h3 class="mt-10 orange">Details</h3>
                <p class="mt-10 orange">${recette.desc}</p>
                <h3 class="mt-10 orange">Ingrédients</h3>
                <ul class="mt-10 ml-15">
                    ${ingredientsListe}
                </ul>
            </div>

            <div class="w-30 mt-50">
                <h3 class="orange">Étapes</h3>
                <ol class="mt-10 ml-15">
                    ${etapesListe}
                </ol>
            </div>

            </div>
            `
            document.querySelector("#recette-container").innerHTML += recetteCard;
        });
    }
