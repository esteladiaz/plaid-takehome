# Template README for Web Developer take-home

```
We're keen to know which Dribbble you selected, and the thinking behind that decision. Write a few notes here about your choice, and why you chose it here.
```

## Decisions:
I wish I could see your selection! I was directed to work on this wireframe and am unsure what the other existing options were.

## Installation
To setup this project and install it's tools/dependencies, if any, run the following command(s):

// FILL_THIS_OUT
Running locally
To run this project locally as a static-webpage, run the following command(s):

// FILL_THIS_OUT
Future improvements
We recognize that building a beautiful and convincing website is not a simple or speedy task, which is why we'd like to see what future improvements you would suggest to get this project to a 100% production ready state. No suggestion is a bad one, and we welcome every detail you provide.

I used SASS because I wanted the option to try to create reuseable components and a design system within the app. Normally, I prefer to use styled-components and to abstract away each primitive element in a page to be responsible for its own styling. I mimic that intent in the .scss file, creating mixins to standardize what buttons, modules, and content within modules should look like.

I spent the bulk of this assignment focusing on making the desktop wireframe 1:1, and intended on using the remainder of my time adding animations and making the page responsive within my design system. I made some of the modules responsive, but not all. I intended on creating the mobile hamburger menu for the nav, but instead decided that showing an example of a flexible footer menu would be better.

I believe that for footer links and nav items, it's best for the list of items to live somewhere that anyone within an org can edit them without needing to go through an engineer. I abstracted away the footer links and put them in an external json, fetching it within the app and using that to render the link categories. With more time, I would have done the same with the nav menu.

Instead, I settled for creating an on-scoll fade-in effect for images.