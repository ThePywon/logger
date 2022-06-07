<div id="top" align="center">

<h1><a href="https://github.com/ThePywon/logger">logger</a></h1>
 
[![npm version](https://img.shields.io/npm/v/@protagonists/logger)](https://npmjs.com/package/@protagonists/logger)
[![npm downloads](https://img.shields.io/npm/dt/@protagonists/logger)](https://npmjs.com/package/@protagonists/logger)
[![discord server](https://img.shields.io/discord/937758194736955443?logo=discord&logoColor=white)](https://discord.gg/cwhj3EgqGP)
[![last commit](https://img.shields.io/github/last-commit/ThePywon/logger)](https://github.com/ThePywon/logger)
 
</div>



# About

A package to log stuff in a better format, as well as adding *color functionnality*!

---

<br/><br/><br/>

# Table of content

* [**Color**](#color)

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>
  
  * **`.black`**
  * **`.red`**
  * **`.green`**
  * **`.yellow`**
  * **`.blue`**
  * **`.magenta`**
  * **`.cyan`**
  * **`.white`**
  * **`.darkred`**
  * **`.darkgreen`**
  * **`.darkyellow`**
  * **`.darkblue`**
  * **`.darkmagenta`**
  * **`.darkcyan`**
  * **`.gray`**
  * **`.grey`**
  * **`.blackBg`**
  * **`.redBg`**
  * **`.greenBg`**
  * **`.yellowBg`**
  * **`.blueBg`**
  * **`.magentaBg`**
  * **`.cyanBg`**
  * **`.whiteBg`**
  * **`.bold`**
  * **`.dark`**
  * **`.italic`**
  * **`.underline`**
  * **`.invert`**
  * **`.hide`**
  * **`.cross`**
    
  </p>
</details>

---

<br/><br/><br/>



# Color

An object containing functions to add color to text in the console!

<br/>

### **Example**

**Code:**

```js
// Imports
const { Color } = require("@protagonists/logger");

// Log 'Hello world' in italic and green
console.log(Color.italic(Color.green("Hello world!")));
```

**Output:**

> Markdown codeblocks cannot display color and style changes that happen in the console

```
Hello world!
```

<br/>

**Code:**

```js
// Imports
const { Color } = require("@protagonists/logger");

// Log 'IMPORTANT' in bold and red
console.log(Color.bold(Color.red("IMPORTANT")));
```

**Output:**

> Markdown codeblocks cannot display color and style changes that happen in the console

```
IMPORTANT
```

---



<br/><br/><br/>

# Methods

All of the methods follow the same syntax and all are pretty explicit on what they do  
All of them adds a bit of styling to the text in the console

<br/>

**Syntax:** &nbsp; `.method(text)`

|**Parameters**|**Types**|
|-|-|
|`text`|[**String**](https://javascript.info/string)|

> This syntax applies to all methods

<br/>

## `.black`

## `.red`

## `.green`

## `.yellow`

## `.blue`

## `.magenta`

## `.cyan`

## `.white`

## `.darkred`

## `.darkgreen`

## `.darkyellow`

## `.darkblue`

## `.darkmagenta`

## `.darkcyan`

## `.gray`

## `.grey`

## `.blackBg`

## `.redBg`

## `.greenBg`

## `.yellowBg`

## `.blueBg`

## `.magentaBg`

## `.cyanBg`

## `.whiteBg`

## `.bold`

## `.dark`

## `.italic`

## `.underline`

## `.invert`

## `.hide`

## `.cross`

<br/>

---



<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
