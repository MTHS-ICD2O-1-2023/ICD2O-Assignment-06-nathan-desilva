// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-06-nathan-desilva/sw.js", {
    scope: "/ICD2O-Assignment-06-nathan-desilva",
  })
}

/**
 * This function displays random dad jokes.
 */
const getDuck = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("joke").innerHTML = data.setup + "<br><br>" + data.punchline
  } catch (err) {
    console.log(err)
  }
}

getDuck(
  "https://random-d.uk/api/images/61.jpg"
)
