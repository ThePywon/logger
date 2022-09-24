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

* [**Logger**](#logger)

* <details open><summary><a href="#properties"><b>Properties</b></a></summary>
  <p>
  
  * [**`.name`**](#name)
    
  </p>
</details>

* <details open><summary><a href="#methods"><b>Methods</b></a></summary>
  <p>
  
  * [**`.setLogger`**](#setlogger)
  * [**`.log`**](#log)
  * [**`.warn`**](#warn)
  * [**`.crit`**](#crit)
  * [**`.error`**](#error)
  * [**`.debug`**](#debug)
    
  </p>
</details>

---

<br/><br/><br/>



# Logger

The function used to log stuff in the package

<br/>

**Syntax:** &nbsp; `new Logger(options)`

> The lack of the `new` keyword may cause unwanted behaviour

|**Parameters**|**Types**|
|-|-|
|`options`|[**Object**](https://javascript.info/object)|

> `options` is parsed and validated using [**`Options`**](https://github.com/ThePywon/logger/blob/main/documentation/Options.md)

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger();

// Log some text
myLogger.log("Hello!")
```

**Output:**

```
Hello!
```

<br/>

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger({ timestamp: true });

// Log some text
myLogger.log("Log #1");
setTimeout(() => myLogger.log("Log #2"));

```

**Output:**

```
22:37:24.235 Logger: Log #1
22:37:24.240 Logger: Log #2
```

---

<br/><br/><br/>

# Properties

<br/>

## `.name`

The name displayed before the logger output (if enabled)

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create logger instance
const foo = new Logger({ name: 'bar' })

// Log the instance's name
console.log(foo.name);
// Log some text
foo.log("Hello world!");
```

**Output:**

```
bar
bar: Hello world!
```

---



<br/><br/><br/>

# Methods

Some methods to log text in many different ways

<br/>

<a id="setlogger"></a>

## `.setLogger` &nbsp; [![Static](https://shields.io/badge/-Static-red)](https://javascript.info/static-properties-methods)

This function is equivalent to `Logger.call`

<br/>

**Syntax:** &nbsp; `.setLogger(obj)`

|**Parameters**|**Types**|
|-|-|
|`obj`|[**Object**](https://javascript.info/object)|

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");

// Create 'Person' class
class Person {
  constructor(name) {
    // Set the instance as a logger on initialization
    Logger.setLogger(this, { name });
  }

  wakeUp() {
    // Use logger functionnalities
    this.log(`I, ${this.name}, am now awake!`);
  }
}

// Create new Person instance
const John = new Person("John");
// Use wakeUp() function
John.wakeUp();
```

**Output:**

```
I, John, am now awake!
```


<br/><br/>


## `.log`

Log some text in the default way

<br/>

**Syntax:** &nbsp; `.log(...args)`

|**Parameters**|**Types**|
|-|-|
|`...args`|**Any**|

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger();

// Log some text
myLogger.log("Hello world!");
```

**Output:**

```
Logger: Hello world!
```

<br/><br/>


## `.warn`

Logs a warning

<br/>

**Syntax:** &nbsp; `.warn(...args)`

|**Parameters**|**Types**|
|-|-|
|`...args`|**Any**|

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger();

// Log some text
myLogger.warn("This is a warning!");
```

**Output:**

```
Logger WARN: This is a warning!
```

<br/><br/>


## `.crit`

Logs a critical failure  
It is meant to be used whenever something goes wrong but does not have a need for an error to be thrown

<br/>

**Syntax:** &nbsp; `.crit(...args)`

|**Parameters**|**Types**|
|-|-|
|`...args`|**Any**|

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger();

// Log some text
myLogger.crit("This is critical!!");
```

**Output:**

```
Logger CRIT: This is critical!!
```

<br/><br/>


## `.error`

Logs an error in the console with a stack trace  
(error is not thrown)

<br/>

**Syntax:** &nbsp; `.error(...args)`

|**Parameters**|**Types**|
|-|-|
|`...args`|**Any**|

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger();

// Log some text
myLogger.error("Something fatal and unrecoverable happened");
```

**Output:**

```
Logger ERROR: Something fatal and unrecoverable happened

    at Object.<anonymous> (C:\Users\ThePy\OneDrive\Bureau\Projects\Node\@protagonists\logger\test.js:7:10)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
```

<br/><br/>


## `.debug`

Logs some debug message

<br/>

**Syntax:** &nbsp; `.log(...args)`

|**Parameters**|**Types**|
|-|-|
|`...args`|**Any**|

<br/>

### **Example**

**Code:**

```js
// Imports
const { Logger } = require("@protagonists/logger");
// Create new Logger instance
const myLogger = new Logger();

// Log some text
myLogger.debug("This is a debug message.");
```

**Output:**

```
Logger DEBUG: This is a debug message.
```

---



<br/><br/><br/><br/><br/>

<h1 align="center">This is the bottom, there is nothing more.<br/>
Go <a href="#top">back up?</a></h1>
