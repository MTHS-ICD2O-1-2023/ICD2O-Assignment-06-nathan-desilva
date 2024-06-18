// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-06-nathan-desilva/sw.js", {
    scope: "/ICS2O-Assignment-06-nathan-desilva/sw.js",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

function myButtonClicked() {
  const getStat = async (URLAddress, stat) => {
    try {
      console.log(URLAddress)
      const result = await fetch(URLAddress)
      const jsonData = await result.json()
      const pokemonHP = jsonData.data.hp
      const pokemonStage = jsonData.data.subtypes[0]
      const pokemonType = jsonData.data.types
      const pokemonAttack1 = jsonData.data.attacks[0].name
      const pokemonAttack2 = jsonData.data.attacks[1].name
      const pokemonWeakness = jsonData.data.weaknesses[0].type
      const pokemonEvolution = jsonData.data.evolvesTo[0]

      if (stat == "Health") {
        document.getElementById("option-1").innerHTML = pokemonHP + " HP";
      } else if (stat == "Stage") {
        document.getElementById("answer").innerHTML = pokemonStage;
      } else if (stat == "Type") {
        document.getElementById("answer").innerHTML = pokemonType;
      } else if (stat == "Attacks") {
        document.getElementById("answer").innerHTML = pokemonAttack1 + " and " + pokemonAttack2;
      } else if (stat == "Weakness") {
        document.getElementById("answer").innerHTML = pokemonWeakness;
      } else (stat == "Evolves To") {
        document.getElementById("answer").innerHTML = pokemonEvolution;
      } 
    } catch (error) {
      console.error(error);
    }
  }

  const radioButtons = document.getElementsByName("options");
  let selectedStat;
  for (const button of radioButtons) {
    if (button.checked) {
      selectedStat = button.value;
      break;
    }
  }

  getStat("https://api.pokemontcg.io/v2/cards/basep-1", selectedStat);
}
