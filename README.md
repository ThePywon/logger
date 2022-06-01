# Logger

## A small package to pretty up the logs

This package pretties up the logs, mostly with objects  
It also allows for coloring in the logs!  
You can even use it to send local log events from an object



# Table of content

* [How to use?](#how-to-use)
* [Logger](#logger)
  * [`Logger.log`](#loggerlog)
  * [`Logger.warn`](#loggerwarn)
  * [`Logger.crit`](#loggercrit)
  * [`Logger.error`](#loggererror)
  * [`Logger.debug`](#loggerdebug)
  * [`Logger.setLogger`](#loggersetlogger)
* [Color](#color)
  * [Colors](#colors)
  * [Backgrounds](#backgrounds)
  * [Styles](#styles)



# how to use?

first up, lets install it!

```sh
npm install @protagonists/logger
```

```js
const { Logger, Color } = require("@protagonists/logger");
```

We create a new instance!

```js
const logger = new Logger();
```



# Logger

`Logger` inherits all the properties from [`Emitter`](https://www.npmjs.com/package/@protagonists/emitter)

# Constructor

## Options

The constructor can be fed in several optionnal parameters that can affect the logger's behaviour





# Functions

## Logger.log

### Description

A simple `console.log` substitute that outputs in a bit nicer format

### Syntax

```js
Logger.log(...args: Any)
```

The difference is especially noticable when logging complex objects  
The function also emits a "log" event  
(Check out [`@protagonists/emitter`](https://www.npmjs.com/package/@protagonists/emitter) to know more)

## Logger.warn

### Description

This function is similar to `Logger.log` but sends a warning event instead  
This is intended to be used whenever problematic behaviour is detected

### Syntax

```js
Logger.warn(...args: Any)
```

## Logger.crit

### Description

This function is, again, very similar to `Logger.log`  
This time, it sends (you guessed it) a "crit" event  
This is intended to be used when a problem occures but **does not** end the process (so not thrown because the situation is still salvagable)

### Syntax

```js
Logger.crit(...args: Any)
```

## Logger.error

### Description

This function is basically like `Logger.crit` but has a stack trace along with it  
This is intended to be used when a problem occures and **does** end the process (situation is non-salvagable)

### Syntax

```js
Logger.error(...args: Any)
```

## Logger.debug

### Description

This function is similar to all the other logging functions of `Logger`  
This is intended to be used to send additionnal information to users

### Syntax

```js
Logger.debug(...args: Any)
```

## Logger.setLogger

### Description

This function makes an object inherit from `Logger`

### Example

```js
Logger.setLogger(obj);
obj.warn("Local Warning!");
```

you can then use the object as an [`Emitter`](https://www.npmjs.com/package/@protagonists/emitter)   
and do something after the event is emitted

```js
Logger.setLogger(obj);

obj.on("log", (...args)=>{
  // Your code
});

obj.log("some text");
```

## Color

and if you only want to color some text then you can do this

```js
console.log(Color.italic(Color.green("Success!")));
```

here are some supported functions

#### Colors

* `black`
* `red` & `darkred`
* `green` & `darkgreen`
* `yellow` & `darkyellow`
* `blue` & `darkblue`
* `magenta` & `darkmagenta`
* `cyan` & `darkcyan`
* `white`
* `gray` & `grey`

#### Backgrounds

* `blackBg`
* `redBg`
* `greenBg`
* `yellowBg`
* `blueBg`
* `magentaBg`
* `cyanBg`
* `whiteBg`

#### Styles

* `bold`
* `dark`
* `italic`
* `underline`
* `invert`
* `hide`
* `cross`
