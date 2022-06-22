# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Frontend Mentor solution](https://www.frontendmentor.io/solutions/marvel-quote-generator-with-marvel-api-and-css-grid-ArgjFDjX3S)
- Live Site URL: [Github Pages](https://haico-paulussen.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- API 

### What I learned

For me this was the first time using an API. It's much easier than expected and real good fun. It's been a while since I did a challenge. So I had some struggles with the project set-up. But it worked out fine in the end ;)

```js
 fetch('https://randommarvelquoteapi.herokuapp.com')
        .then(response => response.json())
        .then(data => {
            quoteDisplay.innerHTML = data.quote;
            adviceDisplay.innerHTML = Math.floor(Math.random() * 1000);
        });
```

### Continued development

So right now I learned basic HTML, CSS, Flexbox and CSS Grid. Next step for me is to start learning basic JavaScript so I can work on my long term goal: Learn VUE.js (and/or other frameworks).

## Author

- Frontend Mentor - [@Haico-Paulussen](https://www.frontendmentor.io/profile/Haico-Paulussen)
- LinkedIn - [Haico Paulussen](https://www.linkedin.com/in/haico-paulussen-160281158/)
