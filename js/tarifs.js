const pantalonName = document.getElementById("pantalon-table-name");
const pantalonPrice = document.getElementById("pantalon-table-price");
const vesteName = document.getElementById("veste-table-name");
const vestePrice = document.getElementById("veste-table-price");
let titrePantalon = "pantalon";
let titrePrix = "Prix";

let prices = [
  {
    //   pantalon
    travaux: [
      "ourlet simple",
      "ourlet avec talonnette",
      "ourlet de jean",
      "ourlet de revers",
      "ourlet de pantalon avec fente",
      "changer la fermeture eclair",
      "changer la doublure",
      "rétrécir le bas",
      "reprendre ou elargir la ceinture",
      "reprendre l'entrejambe",
    ],
    prix: [
      "11.20",
      "11.50",
      "9.40",
      "12",
      "Suivant main d'oeuvre",
      "11.50",
      "28",
      "18 à 24",
      "14",
      "16",
    ],
  },
  {
    //   VESTE
    travaux: [
      "Raccourir les manches",
      "ourlet avec talonnette",
      "ourlet de jean",
      "ourlet de revers",
      "ourlet de pantalon avec fente",
      "changer la fermeture eclair",
      "changer la doublure",
      "rétrécir le bas",
      "reprendre ou elargir la ceinture",
      "reprendre l'entrejambe",
    ],
    prix: [
      "11.20",
      "11.50",
      "9.40",
      "12",
      "Suivant main d'oeuvre",
      "11.50",
      "28",
      "18 à 24",
      "14",
      "16",
    ],
  },
];

//  PANTALON
prices.map((item) => {
  pantalonName.innerHTML = item.travaux

    .map((travail) => {
      return `
       
        <tr>
            <td>
              ${travail}
            </td>
        </tr>
    `;
    })
    .join("");
});

prices.map((item) => {
  pantalonPrice.innerHTML = item.prix

    .map((prix) => {
      return `
          <tr>
              <td>
                ${prix}
              </td>
          </tr>
      `;
    })
    .join("");
});

// VESTE
prices.map((item) => {
  vesteName.innerHTML = item.travaux

    .map((travail) => {
      return `
         
          <tr>
              <td>
                ${travail}
              </td>
          </tr>
      `;
    })
    .join("");
});

prices.map((item) => {
  vestePrice.innerHTML = item.prix

    .map((prix) => {
      return `
         
          <tr>
              <td>
                ${prix}
              </td>
          </tr>
      `;
    })
    .join("");
});
