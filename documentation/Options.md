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



# Options

## Description

A schema object used to parse/validate properties of the parameter `options` of the [**`Logger`**](https://github.com/ThePywon/logger/blob/main/documentation/Logger.md)  
Learn more about [Schema](https://github.com/ThePywon/coerce/blob/main/documentation/Schema.md)?

<br/><br/>

## Model

<br/>

```js
{
  file: Filename,
  style: Boolean,
  timestamp: Boolean,
  name: Boolean,
  log: Boolean,
  warn: Boolean,
  crit: Boolean,
  error: Boolean,
  debug: Boolean
}
```

> `Filename` is a custom [SchemaType](https://github.com/ThePywon/coerce/blob/main/documentation/SchemaType.md) which basically parses and converts everthing into a string, as well as validating the existence of the file.  
> It also contains a static property, `.Empty`, used as a placeholder

<br/><br/>

## Default values

<br/>

```js
{
  file: Filename.Empty,
  style: true,
  timestamp: false,
  name: true,
  log: true,
  warn: true,
  crit: true,
  error: true,
  debug: true
}
```


<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
