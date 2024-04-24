// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

function myButtonClicked() {
  const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"  
  const alwaysOnButtonChecked = document.getElementById("option-positive").checked

  if (alwaysOnButtonChecked == true) {
    // output
    document.getElementById("number-generated").innerHTML = "Your number is:" + randomNumber
  } else {
    // output
    document.getElementById("number-generated").innerHTML = "Your number is:" + randomNumber * -1
  }
}
