// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: June 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays random ducks
 */

async function myDuck() {

  try {
    const resultJSON = await fetch("https://random-d.uk/api/images/61.jpg")
    const jsonData = await resultJSON.json()
    
    const firstDataSet = jsonData.message

    document.getElementById("duck").src = firstDataSet
  } catch (error) {
    console.error(error)
  }
}
