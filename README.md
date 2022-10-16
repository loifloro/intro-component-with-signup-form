# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Github](https://github.com/loifloro/intro-component-with-signup-form)
- Live Site URL: [Github Pages](https://loifloro.github.io/intro-component-with-signup-form/dist/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass 
- Normalize.css

### What I learned
In this project, I concluded the difference between the placement of the Javascript tag. If this is place on the head, the 'addEventListener' wouldn't work since the HTML isn't not loaded yet. If this is the method, it approprriate to use the 'onclick' attribute on the buttons. 

```html
</body>
<script src="./js/app.js"></script>
</html>
```

The 'background' shorthand is helpful to reduce the code, but needed the syntax to use it properly. I also use the background property to put the SVG inside the input element.
```css
.proud-of-this-css {
  background: url(../assets/images/bg-intro-mobile.png) center/cover no-repeat $red;

}
&.warning--input {
            border-color: $red;
            border-width: 2px;    
            // background: [background-image] [background-position] / [background-size] [background-repeat] [background-attachment] [background-origin] [background-clip] [background-color];
            background: url(../assets/images/icon-error.svg) 95% center / auto no-repeat; 
            
            &::placeholder {
                opacity: 0;
            }
        }
```
I also used the ES6 Javascript arrow function on this project. 
```js
const fName = document.querySelector('#fName').value;

btn.addEventListener('click', () => {
}
```

### Continued development

On my upcoming projects, I'm going to still develop Javascript projects on Frontend Mentor. 

### Useful resources

- [Putting images inside the input]( https://codepen.io/j_holtslander/pen/Yxdqwd?editors=1100) - This helped me to properly place the image on the right side of the input. 
- [Regex Validation for Email]( https://regexr.com/3e48o) - This is the regex syntax for email validation. 



## Author

- Github - [loifloro](https://github.com/loifloro/)
- Frontend Mentor - [@loifloro](https://www.frontendmentor.io/profile/loifloro)
- Twitter - [@loisfloro](https://www.twitter.com/yourusername)

## Acknowledgments

Thank you Frontend Mentor for having projects that helps beginner to really enhance their knowledge.
