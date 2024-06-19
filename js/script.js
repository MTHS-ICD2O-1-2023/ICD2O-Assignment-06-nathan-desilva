// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: June 2024
// This file contains the JS functions for index.html


"use strict"

async function getDogImage() {

  try {
    const resultJSON = await fetch("https://dog.ceo/api/breeds/image/random")
    const jsonData = await resultJSON.json()

    const firstDataSet = jsonData.message

    document.getElementById("dog-image").src = firstDataSet
  } catch (error) {
    console.error(error)
  }
}
