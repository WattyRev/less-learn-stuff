# less-learn-stuff
This is a repository to demonstrate the features of Less, the CSS Preprocessor. For more specific details, view the [less documentation](http://lesscss.org/).

## A bit of background
Less is a CSS preprocessor, meaning that it is a language that compiles down to plain CSS. There are other CSS preprocessors like Sass, Stylus, and others. Sass and Less have long been the leading preprocessors that are used by developers. We use Less because it is built in JavaScript. Because of this, it is easy in include in our already JavaScript-based frontend build process.

## How to setup Less for a basic project
Less is very easy to setup and start using. View this project's package.json and gruntfile.js for examples. Here is the basic process:
* Run `npm init` to setup your project with a package.json
* Install `grunt`, `grunt-contrib-less`, and `grunt-contrib-watch`
* Create a gruntfile.js like the one in this project.
* Run `grunt run` to start compiling your less and watching for changes.

## Project organization using import
Less allows you to break up your styles into multiple files, and consolidate them using `@import`. View `less/app.less` as an example.

## Variables
Keep your colors, sizes, and other concepts consistent by saving them to variables. View `less/variables.less` as an example.

## Nesting styles
Reduce the amount of code you write, and improve the organization of your styles by nesting, but beware of the potential pitfalls of unnecessary or complex nesting. View `less/nested-styles.less` as an example.

## Mixins
Use mixins to copy styles from one class to another, or to create a shared set of styles to be used in multiple contexts. View `less/mixins.less` as an example.

## Functions
Less functions provide a lot of power allowing you to create reusable styling scripts, or to generate large amounts of repetitive styles in a few lines. View `less/functions.less` as an example.

## Q&A
**What are we missing out on by using Less instead of Sass?**

Sass has some very powerful tools like Sprite management, but sprites are not very useful unless we support older browsers (IE8-). Most other features of Sass have an equilivant in Less. Transitioning between Sass and Less is very easy as a developer, so our choice doesn't really limit our pool of developer candidates. In the end, we are not missing out on much, but are gaining a simpler setup since Less is run using Node instead of Ruby.

