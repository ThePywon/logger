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

* [**How to use?**](#how-to-use)

> The content below does not correspond to the object structure of the objects

* [**Logger**](https://github.com/ThePywon/Documentation-Template/blob/main/documentation/Logger.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)

* [**Color**](https://github.com/ThePywon/Documentation-Template/blob/main/documentation/Color.md) &nbsp; ![Exported](https://img.shields.io/badge/-Exported-cyan)

---

<br/><br/><br/>



# How to use?

## Description

The package allows for a slightly better visual on objects and whatnot, as well as allow users to add *color* to the logs!

## Import

### Terminal

> ```sh
> npm install @protagonists/logger
> ```

### Node.js

> ```js
> const { Logger, Color } = require("@protagonists/logger");
> ```

---



<br/>

## Example

### Code:

```js
const { Logger } = require("@protagonists/logger");
const myLogger = new Logger({ file: "./someExistingFile.txt" });

myLogger.log("Hello world!");
```

<br/>

### Output:

> `./someExistingFile.txt`

```
Logger: Hello world!
```

<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
