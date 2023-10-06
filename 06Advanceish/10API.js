import { response } from "express";

// const express = require("express");
const fetechedData = fetch("https://api.chucknorris.io/jokes/random").then(
  (response) => {
    return response.json().value;
  }
);

const joke = document.querySelector(".joke");

joke.innerHTML = fetechedData;
console.log(joke);
