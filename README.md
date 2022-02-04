
---
The **Index** of Notes `LA_Node` contains `A` through `K` categories.

**How to know which category new content should be added?**  
Refer the table below for the guide.

| Category | Title                                 | Type of Content                                                                                                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **C**    | _Some Jargons relating to Node.js_    | <ol><li>This contains terminilogies/jargons specific to Node.js world.</li><li>This doesn't contain terminilogies/jargons relating to coding paradigms/styles/methods/etc, for example `callback hell` doesn't belong to this category.</li></ol>                                                                                                 |
| **D**    | _Internal of Node.js_                 | <ol><li>This contains stuff explaining the architecture/working of Node.js.</li><li>This does contain explanation(s) of quirky nature of code snippets due to Node.js architecture.</li></ol>                                                                                                                                                     |
| **E**    | _A little about working with Node.js_ | <ol><li>This doesn't contains explanation(s) of quirky nature of code snippets due to Node.js architecture.</li><li>This contains information about `node modules` and `npm`.</li><li>This contains differences between methods/modules/codes/etc.</li><li>This contains **how to do(s)** for certain stuff/tasks using purely Node.js.</li></ol> |
| **F**    | _Some modules in Node.js_             | <ol><li>This contains basic structure of node modules.</li><li>This doesn't contain **how to do(s)** for certain stuff/tasks using particular module.</li></ol>                                                                                                                                                                                   |
| **G**    | _Few packages used with Node.js_      | <ol><li>This contains basic usage of widely used Node.js packages.</li></ol>                                                                                                                                                                                                                                                                      |

---

<br>
<br>
<br>


# Index

**A.** **[What is Node.js?](#what-is-nodejs)** <br>
**B.** **[How to Install Node.js?](#installation)**
1. [Ubuntu](#ubuntu)
    1. [Download Specific Version](#download-specific-version)
    2. [Download LTS](#download-lts)
    3. [Download Current Release](#download-current-release)

**C.** **[Some Jargons relating to Node.js](#some-jargons-relating-to-nodejs)**<br>
1. [LTS](#lts)
2. [Runtime environment](#runtime-environment)

**D.** **[Internals of Node.js](#internals-of-nodejs)**<br>
1. [What is V8 engine?](#what-is-v8)
2. [How V8, a JS engine, differs from Node.js, a runtime environment?](#how-v8-a-js-engine-differs-from-nodejs-a-runtime-environment)
3. [What is basic architecture of Node.js?](#what-is-basic-architecture-of-nodejs)
4. [Interaction between our JS code with C++ code](#interaction-between-our-js-code-with-c-code)
5. [What is an event loop?](#what-is-an-event-loop)
    1. [How it works?](#how-it-works)
    2. [Message Queue](#message-queue)
    3. [Job Queue](#job-queue)
    4. [Heap](#heap)
    5. [Pseudocode for event loop](#pseudocode-for-event-loop)
    6. [Poll Queue](#poll-queue)
6. [What is `threadpool`?](#what-is-threadpool)
    1.  [UV_THREADPOOL_SIZE](#uv_threadpool_size)
    2.  [Does increasing threadpool size increases performance?](#does-increasing-threadpool-size-increases-performance)
    3.  [Point to Ponder](#point-to-ponder)
    4.  [Cool way to determine pool size](#cool-way-to-determine-pool-size)
    5.  [Running two threads for two async tasks (that use thread pool i.e not OSAsync tasks) in a CPU with single core with two thread support is not the same as running them on two different CPU's](#running-two-threads-for-two-async-tasks-that-use-thread-pool-ie-not-osasync-tasks-in-a-cpu-with-single-core-with-two-thread-support-is-not-the-same-as-running-them-on-two-different-cpus)
7. [The strategy used by libuv to achieve asynchronous I/O is not always a thread pool!!](#the-strategy-used-by-libuv-to-achieve-asynchronous-io-is-not-always-a-thread-pool)
8. [Crazy Event Loop](#crazy-event-loop)
5. [Why event based network apps are faster than thread based?](#why-event-based-network-apps-are-faster-than-thread-based)
6. [How does Node.js handle child threads?](#how-does-nodejs-handle-child-threads)
7. [How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?](#how-does-nodejs-support-multi-processor-platforms-and-does-it-fully-utilize-all-processor-resources)
8. [JS compiled or interpreted?](#js-compiled-or-interpreted)
    1. [Compiler vs Interpretor?](#compiler-vs-interpretor)
9. [What is JIT compilation?](#what-is-jit-compilation)
10. [What is tick in Nodejs event loop?](#what-is-tick-in-nodejs-event-loop)
11. [What concurrency means in Node.js](#what-concurrency-means-in-nodejs)
12. [In the backend Node make use of multi threading, do JS code gets executed in multiple threads or not?](#in-the-backend-node-make-use-of-multi-threading-do-js-code-gets-executed-in-multiple-threads-or-not)


**E.** **[A little about working with Node.js](#a-little-about-working-with-nodejs)**<br>
- [Index](#index)
- [Content](#content)
  - [What is Node.js?](#what-is-nodejs)
  - [Installation](#installation)
    - [Ubuntu](#ubuntu)
      - [Download Specific Version](#download-specific-version)
      - [Download `LTS`](#download-lts)
      - [Download Current Release](#download-current-release)
  - [Some Jargons relating to Node.js](#some-jargons-relating-to-nodejs)
    - [LTS](#lts)
    - [Runtime Environment](#runtime-environment)
      - [Simple and Generic definition](#simple-and-generic-definition)
      - [Technical definition](#technical-definition)
  - [Internals of Node.js](#internals-of-nodejs)
    - [What is V8?](#what-is-v8)
    - [How V8, a JS engine, differs from Node.js, a runtime environment?](#how-v8-a-js-engine-differs-from-nodejs-a-runtime-environment)
    - [What is basic architecture of Node.js?](#what-is-basic-architecture-of-nodejs)
    - [Interaction between our JS code with C++ code](#interaction-between-our-js-code-with-c-code)
    - [How Node.js starts?](#how-nodejs-starts)
    - [What is an event loop?](#what-is-an-event-loop)
      - [Phases Overview](#phases-overview)
      - [Phases in Detail](#phases-in-detail)
        - [timers](#timers)
        - [pending callbacks](#pending-callbacks)
        - [poll](#poll)
        - [check](#check)
        - [close callbacks](#close-callbacks)
      - [`setImmediate()` vs `setTimeout()`](#setimmediate-vs-settimeout)
      - [`process.nextTick()`](#processnexttick)
        - [Understanding `process.nextTick()`](#understanding-processnexttick)
        - [Why would that be allowed?](#why-would-that-be-allowed)
      - [`process.nextTick()` vs `setImmediate()`](#processnexttick-vs-setimmediate)
      - [Why use `process.nextTick()`?](#why-use-processnexttick)
      - [How It Works?](#how-it-works)
        - [Message Queue (??whattttt:conflict with above 6 queues)](#message-queue-whatttttconflict-with-above-6-queues)
        - [Job Queue](#job-queue)
        - [Heap](#heap)
        - [Pseudocode for event loop](#pseudocode-for-event-loop)
        - [Poll Queue](#poll-queue)
    - [Does event loop maintains a queue?](#does-event-loop-maintains-a-queue)
    - [Call stack and Event Loop Interaction](#call-stack-and-event-loop-interaction)
    - [What is `threadpool`?](#what-is-threadpool)
        - [`UV_THREADPOOL_SIZE`](#uv_threadpool_size)
        - [Does increasing **threadpool size** increases performance?](#does-increasing-threadpool-size-increases-performance)
        - [Point to Ponder](#point-to-ponder)
        - [Cool way to determine pool size](#cool-way-to-determine-pool-size)
        - [Running two threads for two async tasks (that use thread pool i.e not OSAsync tasks) in a CPU with single core with two thread support is not the same as running them on two different CPU's](#running-two-threads-for-two-async-tasks-that-use-thread-pool-ie-not-osasync-tasks-in-a-cpu-with-single-core-with-two-thread-support-is-not-the-same-as-running-them-on-two-different-cpus)
    - [The strategy used by libuv to achieve asynchronous I/O is not always a thread pool!!](#the-strategy-used-by-libuv-to-achieve-asynchronous-io-is-not-always-a-thread-pool)
    - [Crazy Event Loop](#crazy-event-loop)
    - [Why event based network apps are faster than thread based?](#why-event-based-network-apps-are-faster-than-thread-based)
    - [How does Node.js handle child threads?](#how-does-nodejs-handle-child-threads)
    - [How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?](#how-does-nodejs-support-multi-processor-platforms-and-does-it-fully-utilize-all-processor-resources)
    - [JS compiled or interpreted?](#js-compiled-or-interpreted)
      - [Compiler vs Interpretor?](#compiler-vs-interpretor)
    - [What is JIT compilation?](#what-is-jit-compilation)
    - [What is `tick` in Nodejs event loop?](#what-is-tick-in-nodejs-event-loop)
    - [What concurrency means in Node.js?](#what-concurrency-means-in-nodejs)
    - [In the backend Node make use of multi threading, do JS code gets executed in multiple threads or not?](#in-the-backend-node-make-use-of-multi-threading-do-js-code-gets-executed-in-multiple-threads-or-not)
  - [A little about working with Node.js](#a-little-about-working-with-nodejs)
    - [The time required to run below code in Google Chrome is considerably more than the time required to run it in Node.js. Explain why this is so, even though both use the v8 JavaScript Engine.:](#the-time-required-to-run-below-code-in-google-chrome-is-considerably-more-than-the-time-required-to-run-it-in-nodejs-explain-why-this-is-so-even-though-both-use-the-v8-javascript-engine)
    - [What is the preferred method of resolving unhandled exceptions in Node.js?](#what-is-the-preferred-method-of-resolving-unhandled-exceptions-in-nodejs)
    - [How to set environment variable in node via CLI?](#how-to-set-environment-variable-in-node-via-cli)
    - [What is REPL and how to use it?](#what-is-repl-and-how-to-use-it)
    - [How to work with Command Line Arguments in Node.js?](#how-to-work-with-command-line-arguments-in-nodejs)
        - [Code](#code)
    - [Environment variable vs command line args](#environment-variable-vs-command-line-args)
    - [How to use Colored Text?](#how-to-use-colored-text)
    - [How to use a Progress Bar?](#how-to-use-a-progress-bar)
    - [How to take User Input?](#how-to-take-user-input)
    - [Basic Export Mechanism in Node](#basic-export-mechanism-in-node)
    - [Where `npm` global packages are installed?](#where-npm-global-packages-are-installed)
    - [Why we need of `package-lock.json` file?](#why-we-need-of-package-lockjson-file)
      - [Why not delete package-lock.json?](#why-not-delete-package-lockjson)
    - [semver](#semver)
      - [Versioning](#versioning)
      - [Prerelease Qualifiers](#prerelease-qualifiers)
    - [How to find version of npm package?](#how-to-find-version-of-npm-package)
    - [How to update packages without changing `package.json` file?](#how-to-update-packages-without-changing-packagejson-file)
    - [What are the rules for semantic versioning in npm?](#what-are-the-rules-for-semantic-versioning-in-npm)
        - [Rules](#rules)
    - [Flag for dev dependencies.](#flag-for-dev-dependencies)
    - [What is `npx`?](#what-is-npx)
    - [How to change node version in use without using nvm?](#how-to-change-node-version-in-use-without-using-nvm)
    - [`process.nextTick()` vs `setTimeout(() => {}, 0)`?](#processnexttick-vs-settimeout---0)
    - [`setImmediate()`?](#setimmediate)
    - [`setImmediate` vs `process.nextTick()`?](#setimmediate-vs-processnexttick)
    - [What is difference between `setTimeout()` and `setInterval()`?](#what-is-difference-between-settimeout-and-setinterval)
        - [Code](#code-1)
    - [Callback](#callback)
    - [`error-first callbacks`?](#error-first-callbacks)
    - [How to create custom `callback`?](#how-to-create-custom-callback)
        - [Simple Callback](#simple-callback)
        - [Callback Linked with Object Prototype](#callback-linked-with-object-prototype)
    - [What is callback hell and how it is resolved?](#what-is-callback-hell-and-how-it-is-resolved)
        - [Sample Callback Hell](#sample-callback-hell)
    - [What is Async Waterfall?](#what-is-async-waterfall)
    - [What is Async Series?](#what-is-async-series)
    - [What are `Promises`?](#what-are-promises)
        - [Sample Promise](#sample-promise)
        - [Promise for Callback Hell](#promise-for-callback-hell)
        - [Promise `fs.read`](#promise-fsread)
        - [Promise Chaining](#promise-chaining)
        - [`Promise.all`](#promiseall)
        - [`Promise.race`](#promiserace)
    - [Why Try and Catch block is useless for catching promise errors?](#why-try-and-catch-block-is-useless-for-catching-promise-errors)
    - [Problems with **Promises**?](#problems-with-promises)
    - [What are async functions, and why we need them?](#what-are-async-functions-and-why-we-need-them)
    - [How to convert a promise into an asyn-function?](#how-to-convert-a-promise-into-an-asyn-function)
    - [Event Emitter](#event-emitter)
    - [How to make a basic `http server`?](#how-to-make-a-basic-http-server)
    - [http server anatomy](#http-server-anatomy)
      - [Create the Server](#create-the-server)
      - [Method, URL and Headers](#method-url-and-headers)
      - [Request Body](#request-body)
      - [A Quick Thing About Errors](#a-quick-thing-about-errors)
      - [What We've Got so Far](#what-weve-got-so-far)
      - [HTTP Status Code](#http-status-code)
      - [Setting Response Headers](#setting-response-headers)
      - [Explicitly Sending Header Data](#explicitly-sending-header-data)
      - [Sending Response Body](#sending-response-body)
      - [Another Quick Thing About Errors](#another-quick-thing-about-errors)
      - [Put It All Together](#put-it-all-together)
      - [Echo Server Example](#echo-server-example)
    - [How to make `http requests`?](#how-to-make-http-requests)
        - [GET](#get)
        - [POST](#post)
    - [How to add Token in request](#how-to-add-token-in-request)
    - [File Descriptor](#file-descriptor)
        - [Modes](#modes)
    - [How to get file stats?](#how-to-get-file-stats)
    - [Read and Write files?](#read-and-write-files)
    - [What is the use of `file descriptor`?](#what-is-the-use-of-file-descriptor)
    - [How to manipulate folders?](#how-to-manipulate-folders)
    - [What are streams in Node.js?](#what-are-streams-in-nodejs)
    - [`end` vs `finish` events on stream](#end-vs-finish-events-on-stream)
    - [What are buffers in Node.js?](#what-are-buffers-in-nodejs)
    - [`buffer` vs `stream`](#buffer-vs-stream)
    - [How to do clustering?](#how-to-do-clustering)
        - [Relation between number of forks and server response time](#relation-between-number-of-forks-and-server-response-time)
        - [How to find optimum number of slave instances in clustering](#how-to-find-optimum-number-of-slave-instances-in-clustering)
    - [How to manage Clusters?](#how-to-manage-clusters)
  - [Debugging](#debugging)
  - [Benchmarking](#benchmarking)
    - [Apache HTTP server benchmarking tool](#apache-http-server-benchmarking-tool)
      - [Ubuntu](#ubuntu-1)
  - [Must See](#must-see)
  - [Some modules in Node.js](#some-modules-in-nodejs)
    - [To Be](#to-be)
  - [Few packages used with Node.js](#few-packages-used-with-nodejs)
    - [PM2](#pm2)
    - [To Be](#to-be-1)
- [Should also know](#should-also-know)



**F.**  **[Debugging](#debugging)**<br>
**G.** **[Benchmarking](#benchmarking)**<br>
**H.** **[Must See](#must-see)**<br>
**I.** **[Some modules in Node.js](#some-modules-in-nodejs)**<br>
**J.** **[Few packages used with Node.js](#few-packages-used-with-nodejs)**<br>

---
---


# Content
## What is Node.js?

Node.js is a JavaScript **runtime environment** built on [Chrome's V8 JavaScript engine](https://github.com/s-mrb/RB-ChromeV8). It provides a runtime environment which gives:
- event driven architecture
- non-blocking (asynchronous) I/O    

and is cross-platform for building highly scalable server-side applications using JavaScript.

> Event Driven

  - build on a common pattern in software development known as **publish-subscribe or observer pattern**. In an event-driven architecture there are at least two actors: the subject(event emitter) and the observer(event listener)
  - a simple hhtp server in node is an example of event driven programming, you create a server and within it you create listeners(observers) for specific events, a event can be a client requesting data and observer can listen to specific route for such requests/events and send them data or handle errors in case of wrong requests

> Blocking I/O

Blocking is when the execution of additional JavaScript in the Node.js process must **wait until a non-JavaScript operation completes**. This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.

Using the File System module as an example, this is a synchronous file read:

```js
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
```


> Non-Blocking I/O

All of the I/O methods in the Node.js standard library provide asynchronous versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.


And here is an equivalent asynchronous example:

```js
const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```

The first example appears simpler than the second but has the disadvantage of the second line blocking the execution of any additional JavaScript until the entire file is read. Note that in the synchronous version if an error is thrown it will need to be caught or the process will crash. In the asynchronous version, it is up to the author to decide whether an error should throw as shown.

- [What is runtime environment?](#runtime-environment)
- [What is V8 engine?](#what-is-v8)
- [How V8, a JS engine, differs from Node.js, a runtime environment?](#how-v8-a-js-engine-differs-from-nodejs-a-runtime-environment)

<p align="center"><a href="#index">back to index<a/></p>

---
---


## Installation

### Ubuntu

#### Download Specific Version

```console
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Download `LTS`

```console
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Download Current Release

```console
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs
```
<br>

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Some Jargons relating to Node.js

### LTS
Long term support (LTS) is a word used for release lines (yes, that's plural) that will be supported and maintained by the Node. js project for an extended period of time.

<p align="center"><a href="#index">back to index<a/></p>

---


### Runtime Environment

#### Simple and Generic definition

Let's not make it so complicated, in context of software engineering a runtime environment is simply an environment that a piece of software needs to run.

For example you might have Googled **PC Requirements for GTA-V** and you found the following answer:

Minimum System Requirements:
- **OS**: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1
- **Processor**: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHz
- **Memory**: 4GB
- **Video Card**: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)
- **Sound Card**: 100% DirectX 10 compatible
- **HDD Space**: 65GB

What are these? These are the ~~environment variables~~ which you ~~need to run GTA-V~~, another way to say the same thing is:  
This is `runtime environment` for GTA-V.
So when you say Node.js is JavaScript runtime environment you simply mean that Node.js provides `everything` (from software perspective) to run JavaScriptic code on the hardware (Mobiles, Laptops, etc). That `everything` includes interfaces to the Operating Systems of that particular hardwares.

> **Note:** Both of the below statements are correct:
- Node.js is JavaScript runtime environment (RTE).
- Node.js and OS on which Node.js is installed makes Runtime Environment for JavaScript.

#### Technical definition

<p align=center> Runtime environment, primarily implements portions of an execution model. </p>

The `execution model` specifies the `behavior` of elements of the language. By applying the execution model, one can derive the behavior of a program that was written in terms of that programming language.

Ok I know that `console.log("Hi")` shows me `hi` on the `console`, but how this `behaviour` of that particular string (console.log) is achieved?  
Some or all the `underlying steps` which were taken `between` the execution of code and logging of the output constitue `runtime environment`.

The runtime environment in turn acts as a **go-between between the application and the operating system**.

<p align="center"><a href="#index">back to index<a/></p>

---
---

## Internals of Node.js

### What is V8?

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome. V8 is the JavaScript engine i.e. it parses and executes JavaScript code. The DOM, and the other Web Platform APIs (they all makeup runtime environment) are provided by the browser.

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. V8 can run standalone, or can be embedded into any C++ application.

<p align="center"><a href="#index">back to index<a/></p>

---

### How V8, a JS engine, differs from Node.js, a runtime environment?

Unlike C and other compiled languages (where all of code and libraries are combined into single executable code), Javascript runs in a container - a program that reads your js codes and runs them. This program must do two things

- parse your code and convert it to runnable commands
- provide some objects to javascript so that it can interact with the outside world.  

The first part is called **Engine** and the second is **Runtime**, the second thing is achieved mostly via `libuv`.

![Node-V8-libuv](/snippets/static/7.png)

For example, the Chrome Browser and node.js use the same Engine - V8, but their Runtimes are different: in Chrome you have the **window, DOM objects etc**, while node gives you **require, Buffers and processes**.

<p align="center"><a href="#index">back to index<a/></p>

---

### What is basic architecture of Node.js?

![node-architecture](/snippets/static/1.png)

![node-architecture](/snippets/static/0.png)

![node-architecture](/snippets/static/1.5.png)


<p align="center"><a href="#index">back to index<a/></p>

---

### Interaction between our JS code with C++ code

> Note: I myself am a beginner, this is my naive understanding, could be flawed.

Many functions in Node are implemented in C++. So when we use such functions/modules then the JS specific objects are get translated by V8 into their equivalent in C++ world.

For example take the example of `createCipher(cipher, password, options) ` function, at the time of making these notes, have following definition in JavaScript:

</br>

[crypto.js](https://github.com/nodejs/node/blob/master/lib/crypto.js)

```js
...
function createCipher(cipher, password, options) {
  return new Cipher(cipher, password, options);
}
...
```

Cipher have following definition in JavaScript:

</br>

[cipher.js](https://github.com/nodejs/node/blob/14b26e07bd90c30bd6a7df0f3cefd35698e24c8d/lib/internal/crypto/cipher.js)

```js
function Cipher(cipher, password, options) {
  if (!(this instanceof Cipher))
    return new Cipher(cipher, password, options);

  ReflectApply(createCipher, this, [cipher, password, options, true]);
}
```

RefelctApply calls the final layers of JavaScript code, the code which either interfaces with C++ or calls the code which interfaces with C++. In this case the required code is `createCipher`.

`createCipher` have following definition in JavaScript:

</br>

[cipher.js](https://github.com/nodejs/node/blob/14b26e07bd90c30bd6a7df0f3cefd35698e24c8d/lib/internal/crypto/cipher.js)

```js
function createCipher(cipher, password, options, decipher) {
  validateString(cipher, 'cipher');
  password = getArrayBufferOrView(password, 'password');

  ReflectApply(createCipherBase, this, [cipher, password, options, decipher]);
}
```

`createCipher` is finally calling last layered JavaScript side code, `createCipherBase`, defined in the same file.

</br>

[cipher.js](https://github.com/nodejs/node/blob/14b26e07bd90c30bd6a7df0f3cefd35698e24c8d/lib/internal/crypto/cipher.js)

```js
function createCipherBase(cipher, credential, options, decipher, iv) {
  const authTagLength = getUIntOption(options, 'authTagLength');
  this[kHandle] = new CipherBase(decipher);
  if (iv === undefined) {
    this[kHandle].init(cipher, credential, authTagLength);
  } else {
    this[kHandle].initiv(cipher, credential, iv, authTagLength);
  }
  this._decoder = null;

  ReflectApply(LazyTransform, this, [options]);
}
```

`CipherBase` is written in C++, if you see top of `cipher.js` then it is imported from C++ using `internalBinding('crypto)`:

```js
const {
  CipherBase,
  privateDecrypt: _privateDecrypt,
  privateEncrypt: _privateEncrypt,
  publicDecrypt: _publicDecrypt,
  publicEncrypt: _publicEncrypt,
  getCipherInfo: _getCipherInfo,
} = internalBinding('crypto');
```

Now lets move to C++ side, how the objects/options/data passed to `CipherBase` got recognized by C++ implementation of `CipherBase` as that data was JavaScript specific.

This is where V8 comes into game, it acts as intermediary between JavaScript and C++, translating data between the two.

</br>

[crypto_cipher.cc](https://github.com/nodejs/node/blob/master/src/crypto/crypto_cipher.cc) uses V8 to translate data types:

```c

using v8::Array;
using v8::FunctionCallbackInfo;
using v8::FunctionTemplate;
using v8::HandleScope;
using v8::Int32;
using v8::Local;
using v8::Object;
using v8::Uint32;
using v8::Value;
```

These lines are for translatating the variables/objects passed to Node.js function in JS, while calling them, into a form which can be used by C++ implementation of those functions.

You can also find the implementation of `CipherBase` in the `crypto_cipher.cc`, and this would be **exported**, to be available to `internalBinding`, somehwere at the end of file:

```c
env->SetConstructorFunction(target, "CipherBase", t);
```

<p align="center"><a href="#index">back to index<a/></p>

---

### How Node.js starts?

When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.

<p align="center"><a href="#index">back to index<a/></p>

---

### What is an event loop?
**One round robin queue consisting of multiple FIFO queues of callbacks to execute**

> A runtime construct consisting of a single threaded loop and containing multiple phases, each of which sequentially and in a timed manner completes associated asynchronous operations (perform calbacks from queues).

Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed. We'll explain this in further detail later in this topic.

The following diagram shows a simplified overview of the event loop's order of operations.


```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

> Each box will be referred to as a "phase" of the event loop.

Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

Since any of these operations may schedule more operations and new events processed in the `poll` phase are queued by the kernel, poll events can be queued while polling events are being processed. As a result, **long running callbacks can allow the poll phase to run much longer than a timer's threshold**. See the timers and poll sections for more details.

> There is a slight discrepancy between the Windows and the Unix/Linux implementation, but that's not important for this demonstration. The most important parts are here. There are actually seven or eight steps, but the ones we care about — ones that Node.js actually uses - are those above.

#### Phases Overview

* **timers**: this phase executes callbacks scheduled by `setTimeout()`
 and `setInterval()`.
* **pending callbacks**: executes I/O callbacks deferred to the next loop
 iteration.
* **idle, prepare**: only used internally.
* **poll**: retrieve new I/O events; execute I/O related callbacks (almost
 all with the exception of close callbacks, the ones scheduled by timers,
 and `setImmediate()`); node will block here when appropriate.
* **check**: `setImmediate()` callbacks are invoked here.
* **close callbacks**: some close callbacks, e.g. `socket.on('close', ...)`.

Between each run of the event loop, Node.js checks if it is waiting for
any asynchronous I/O or timers and shuts down cleanly if there are not
any.

#### Phases in Detail

##### timers

A timer specifies the **threshold** _after which_ a provided callback
_may be executed_ rather than the **exact** time a person _wants it to
be executed_. Timers callbacks will run as early as they can be
scheduled after the specified amount of time has passed; however,
Operating System scheduling or the running of other callbacks may delay
them.

> Technically, the [**poll** phase](#poll) controls when timers are executed.

For example, say you schedule a timeout to execute after a 100 ms
threshold, then your script starts asynchronously reading a file which
takes 95 ms:

```js
const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume reading file takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
```

When the event loop enters the **poll** phase, it has an empty queue
(`fs.readFile()` has not completed), so it will wait for the number of ms
remaining until the soonest timer's threshold is reached. While it is
waiting 95 ms pass, `fs.readFile()` finishes reading the file and its
callback which takes 10 ms to complete is added to the **poll** queue and
executed. When the callback finishes, there are no more callbacks in the
queue, so the event loop will see that the threshold of the soonest
timer has been reached then wrap back to the **timers** phase to execute
the timer's callback. In this example, you will see that the total delay
between the timer being scheduled and its callback being executed will
be 105ms (on many platforms `>100` and `not exactly 105`).

> To prevent the **poll** phase from starving the event loop, [libuv][]
> (the C library that implements the Node.js
> event loop and all of the asynchronous behaviors of the platform)
> also has a **hard maximum** (system dependent) before it stops polling for
> more events.

##### pending callbacks

This phase executes callbacks for some system operations such as types
of TCP errors. For example if a TCP socket receives `ECONNREFUSED` when
attempting to connect, some \*nix systems want to wait to report the
error. This will be queued to execute in the **pending callbacks** phase.

##### poll

The **poll** phase has two main functions:

1. Calculating how long it should block and poll for I/O, then
2. Processing events in the **poll** queue.

When the event loop enters the **poll** phase _and there are no timers
scheduled_, one of two things will happen:

* _If the **poll** queue **is not empty**_, the event loop will iterate
through its queue of callbacks executing them synchronously until
either the queue has been exhausted, or the system-dependent hard limit
is reached.

* _If the **poll** queue **is empty**_, one of two more things will
  happen:
  * If scripts have been scheduled by `setImmediate()`, the event loop
  will end the **poll** phase and continue to the **check** phase to
  execute those scheduled scripts.

  * If scripts **have not** been scheduled by `setImmediate()`, the
  event loop will wait for callbacks to be added to the queue, then
  execute them immediately.

> Once the **poll** queue is empty the event loop will check for timers
> _whose time thresholds have been reached_. If one or more timers are
> ready, the event loop will wrap back to the **timers** phase to execute
> those timers' callbacks.

##### check    
`setImmediate()` is actually a special timer that runs in a separate
phase of the event loop. It uses a libuv API that **schedules callbacks to execute after the **poll** phase has completed.**

Generally, as the code is executed, the event loop will eventually hit
the **poll** phase where it will wait for an incoming connection, request,
etc. However, if a callback has been scheduled with `setImmediate()`
and the **poll** phase becomes idle, it will end and continue to the
**check** phase rather than waiting for **poll** events.

##### close callbacks

If a socket or handle is closed abruptly (e.g. `socket.destroy()`), the
`'close'` event will be emitted in this phase. Otherwise it will be
emitted via `process.nextTick()`.

#### `setImmediate()` vs `setTimeout()`

`setImmediate()` and `setTimeout()` are similar, but behave in different
ways depending on when they are called.

* `setImmediate()` is designed to execute a script once the
current **poll** phase completes.
* `setTimeout()` schedules a script to be run after a minimum threshold
in ms has elapsed.

> The order in which the timers are executed will vary depending on the
> context in which they are called. 

If both are called from within the
main module, then timing will be bound by the performance of the process
(which can be impacted by other applications running on the machine).

> if we run the script which is not within an I/O
> cycle (i.e. the main module), the order in which the two timers are
> executed is non-deterministic, as it is bound by the performance of the
> process:

```js
// timeout_vs_immediate.js
setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});
```

```
$ node timeout_vs_immediate.js
timeout
immediate

$ node timeout_vs_immediate.js
immediate
timeout
```

> if both are within an I/O cycle, the immediate
> callback is always executed first:

```js
// timeout_vs_immediate.js
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
```

```
$ node timeout_vs_immediate.js
immediate
timeout

$ node timeout_vs_immediate.js
immediate
timeout
```

> The main advantage to using `setImmediate()` over `setTimeout()` is
> `setImmediate()` will always be executed before any timers if scheduled
> within an I/O cycle, **independently of how many timers are present**.

```js
const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});
```

```
immediate
timeout
timeout
timeout
```

#### `process.nextTick()`

> `process.nextTick()` always runs its callback after the rest of the user's code (so variables gets initialized) and before the 
> event loop is allowed to proceed

##### Understanding `process.nextTick()`

You may have noticed that `process.nextTick()` was not displayed in the
diagram, even though it's a part of the asynchronous API. This is because
`process.nextTick()` is not technically part of the event loop. Instead,
the `nextTickQueue` **will be processed after the current operation is completed, regardless of the current phase of the event loop. Here, an *operation* is defined as a transition from the underlying C/C++ handler, and handling the JavaScript that needs to be executed**.

Looking back at our diagram, any time you call `process.nextTick()` in a
given phase, all callbacks passed to `process.nextTick()` will be
resolved before the event loop continues. This can create some bad
situations because **it allows you to "starve" your I/O by making
recursive `process.nextTick()` calls**, which prevents the event loop
from reaching the **poll** phase.

##### Why would that be allowed?

Why would something like this be included in Node.js? Part of it is a
**design philosophy** where an API should always be asynchronous even where
it doesn't have to be. Let's suppose an `apiCall` that check arguments,
if designed philosophy is to be followed then this too must be async
but doing so gonna create issues as other callbacks called before it
or completed before it will execute before it and can cause faults 
due to wrong args, so to work around this `process.nextTick` is used.
Take this code snippet for example:

```js
function apiCall(arg, callback) {
  if (typeof arg !== 'string')
    return process.nextTick(callback,
                            new TypeError('argument should be string'));
}
```

The snippet does an argument check and if it's not correct, it will pass
the error to the callback. The API updated fairly recently to allow
passing arguments to `process.nextTick()` allowing it to take any
arguments passed after the callback to be propagated as the arguments to
the callback so you don't have to nest functions.

What we're doing is passing an error back to the user but only *after*
we have allowed the rest of the user's code to execute. By using
`process.nextTick()` we guarantee that `apiCall()` always runs its
callback *after* the rest of the user's code and *before* the event loop
is allowed to proceed. To achieve this, the JS call stack is allowed to
unwind then immediately execute the provided callback which allows a
person to make recursive calls to `process.nextTick()` without reaching a
`RangeError: Maximum call stack size exceeded from v8`.

This philosophy can lead to some potentially problematic situations.
Take this snippet for example:

```js
let bar;

// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) { callback(); }

// the callback is called before `someAsyncApiCall` completes.
someAsyncApiCall(() => {
  // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
  console.log('bar', bar); // undefined
});

bar = 1;
```

The user defines `someAsyncApiCall()` to have an asynchronous signature,
but it actually operates synchronously. When it is called, the callback
provided to `someAsyncApiCall()` is called in the same phase of the
event loop because `someAsyncApiCall()` doesn't actually do anything
asynchronously. As a result, the callback tries to reference `bar` even
though it may not have that variable in scope yet, because the script has not
been able to run to completion.

By placing the callback in a `process.nextTick()`, the script still has the
ability to run to completion, allowing all the variables, functions,
etc., to be initialized prior to the callback being called. It also has
the advantage of not allowing the event loop to continue. It may be
useful for the user to be alerted to an error before the event loop is
allowed to continue. Here is the previous example using `process.nextTick()`:

```js
let bar;

function someAsyncApiCall(callback) {
  process.nextTick(callback);
}

someAsyncApiCall(() => {
  console.log('bar', bar); // 1
});

bar = 1;
```

Here's another real world example:

```js
const server = net.createServer(() => {}).listen(8080);

server.on('listening', () => {});
```

When only a port is passed, the port is bound immediately. So, the
`'listening'` callback could be called immediately. The problem is that the
`.on('listening')` callback will not have been set by that time.

To get around this, the `'listening'` event is queued in a `nextTick()`
to allow the script to run to completion. This allows the user to set
any event handlers they want.

#### `process.nextTick()` vs `setImmediate()`

We have two calls that are similar as far as users are concerned, but
their names are confusing.

* `process.nextTick()` fires immediately on the same phase
* `setImmediate()` fires on the following iteration or 'tick' of the
event loop

In essence, the names should be swapped. `process.nextTick()` fires more
immediately than `setImmediate()`, but this is an artifact of the past
which is unlikely to change. Making this switch would break a large
percentage of the packages on npm. Every day more new modules are being
added, which means every day we wait, more potential breakages occur.
While they are confusing, the names themselves won't change.

> We recommend developers use `setImmediate()` in all cases because it's
> easier to reason about.

#### Why use `process.nextTick()`?

There are two main reasons:

1. Allow users to handle errors, cleanup any then unneeded resources, or
perhaps try the request again before the event loop continues.

2. At times it's necessary to allow a callback to run after the call
stack has unwound but before the event loop continues.

One example is to match the user's expectations. Simple example:

```js
const server = net.createServer();
server.on('connection', (conn) => { });

server.listen(8080);
server.on('listening', () => { });
```

Say that `listen()` is run at the beginning of the event loop, but the
listening callback is placed in a `setImmediate()`. Unless a
hostname is passed, binding to the port will happen immediately. For
the event loop to proceed, it must hit the **poll** phase, which means
there is a non-zero chance that a connection could have been received
allowing the connection event to be fired before the listening event.

Another example is running a function constructor that was to, say,
inherit from `EventEmitter` and it wanted to call an event within the
constructor:

```js
const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
  this.emit('event');
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
```

You can't emit an event from the constructor immediately
because the script will not have processed to the point where the user
assigns a callback to that event. So, within the constructor itself,
you can use `process.nextTick()` to set a callback to emit the event
after the constructor has finished, which provides the expected results:

```js
const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);

  // use nextTick to emit the event once a handler is assigned
  process.nextTick(() => {
    this.emit('event');
  });
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
```

[libuv]: https://libuv.org/
[REPL]: https://nodejs.org/api/repl.html#repl_repl

---

_**Each Node.js program have `one main thread` (though there could be multiple internal threads by libuv), that main thread have one event loop.**_

![event-loop](/snippets/static/3.png)  

In computer science, the event loop is a programming construct or design pattern that **waits** for and **dispatches events** or messages in a program. The event loop **works by making a request to some internal or external "event provider", then calls the relevant event handler.**  

![event-loop](/snippets/static/2.png)



#### How It Works?

> The call stack is a LIFO (Last In, First Out) stack.   

The event loop continuously **checks the call stack to see if there's any function that needs to run**.
While doing so, it **adds any function call it finds to the call stack** and executes each one in order.  

![event-loop](/snippets/static/4.png)  

![event-loop](/snippets/static/5.png)  

The event loop on every iteration looks if there's something in the call stack, and executes it:  

![event-loop](/snippets/static/6.png)

##### Message Queue (??whattttt:conflict with above 6 queues)

When setTimeout() is called, the Browser or Node.js starts the timer. Once the timer expires, in this case immediately as we put 0 as the timeout, the **callback function is put** in the Message Queue.
The Message Queue is also where **user-initiated events like click or keyboard events, or fetch responses are queued** before your code has the opportunity to react to them. Or also DOM events like onLoad.
**The loop gives priority to the call stack, and it first processes everything it finds in the call stack, and once there's nothing in there, it goes to pick up things in the message queue.**

##### Job Queue

ECMAScript 2015 introduced the concept of the Job Queue, which is used by `Promises` (also introduced in ES6/ES2015). It's a way to execute the result of an async function as **soon as possible**, rather than being put at the end of the call stack.

##### Heap

In javascript, synchronous calls are going into the `stack` while asynchronous calls are going into the `Heap`, and when done are back in the `Queue`. A function is moving from the `Queue` to the `Stack` only when it's empty.

##### Pseudocode for event loop

Below pseudocode not explained in this readme.

```js

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []

// New timers, tasks, operations are recorded from myFile running.
myFile.runContent();

function() shouldContinur(){
  // Check one: Any pending setTimeout, setInterval, setImmediate
  // Check two: Any pending OS task? (Like server listening to port)
  // Check three: Any pending long running operations? (Like fs module)
  
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one `tick`
while(shouldContinue()){
  // 1) Node looks at Pending timers and see if any functions are ready to be called
  // setTimeout and setInterval

  // 2) Node looks at pendingOSTasks and pendingOperations and calls relevant callbacks

  // 3) Pause execution. Continue when...
  // - a new pendingOSTask is done
  // - a new pendingOperation in done
  // - a timer is about to complete

  // 4) Look at pendingTimers. Call any setImmediate

  // 5) Handle any close events(e.g. readStream.on('close'))
  // for cleanup
} 
```

##### Poll Queue

When one of operations assigned to kernel thread completes, the kernel tells Node.js so that the appropriate callback may be added to the `poll queue` to eventually be executed.

<p align="center"><a href="#index">back to index<a/></p>

---

### Does event loop maintains a queue?

In truth, the Event Loop does not actually maintain a queue. Instead, it has a **collection of file descriptors that it asks the operating system to monitor**, using a mechanism like **epoll** (Linux), **kqueue** (OSX), **event ports** (Solaris), or **IOCP** (Windows). These file descriptors correspond to network sockets, any files it is watching, and so on. When the operating system says that one of these file descriptors is ready, the Event Loop translates it to the appropriate event and invokes the callback(s) associated with that event.

<p align="center"><a href="#index">back to index<a/></p>

---

### Call stack and Event Loop Interaction

> Maybe event loop starts after the initialization phase, requiring modules, registering callbacks for events, defining
> functions, classes and variables

```js
// to understand the interaction between event loop and the call stack

process.nextTick(() => {
    console.log('In next tick')
    console.log(x)
  })
  
  const start = Date.now()
  
  // wait one sec to simulate call stack operation running one second
  while(Date.now()-start < 1000){
  
  }
  
  var x = "The value defined after current pop in call stack"
  
  console.log("If nextTick to run after entire script then this must not be last line")

```

> Outputs

```console
If nextTick to run after entire script then this must not be last line
In next tick
The value defined after current pop in call stack
```

<p align="center"><a href="#index">back to index<a/></p>

---



### What is `threadpool`?

The libuv library maintains a pool of threads that are used by node. js to perform long-running operations in the background, without blocking its main thread. Node uses the Worker Pool to handle “expensive” tasks.

![thread-pool](/snippets/static/8.png)


See below diagram to understand the fact that there is one main thread, which runs event loop, and synchronous part of each code is time interleaved.

![thread-pool](/snippets/static/9.png)

The following figure illustrates requests sent to the NodeJS server from the users side.

![thread-pool](/snippets/static/10.png)

Each request from the users side is treated to be an event by the NodeJS. They is placed into an Event Queue. The NodeJS uses FIFO (First In First Out) principle, which means that the requests coming first will be handled first.  
As an endless loop, it passes the requests to the thread Pool and each request is registered a Callback function.  When a request is finished handling, the corresponding Callback function will be called to be executed.  
Being a program by  C++ language, it supports multi threads. Therefore, herein, requests will be handled on different threads. The NodeJS also supports Multi Processes. This means that they can be executed on different cores.

![thread-pool](/snippets/static/11.png)

When a request is finished handling. The NodeJS will call the Callback function (registered for this request) to execute it.

![thread-pool](/snippets/static/12.png)


##### `UV_THREADPOOL_SIZE`

Number of threads `libuv` using to manage async tasks..
To change this number:

```js
process.env.UV_THREADPOOL_SIZE = number
```


##### Does increasing **threadpool size** increases performance?

To BE

##### Point to Ponder

Consider the code below.

Consider the following hash functon:

```js
const crypto = require('crypto')

const start = Date.now();
const hash = (id)=>{
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log(`Hash ${id} time(milli seconds): `,Date.now()-start)
    })
}

```

Now see the below code and output:

</br>

[test_for_threads_1.js](/tree/main/snippets/17_threads/test_for_threads_1.js)


```js

// hash 1
hash(1) // 530


// hash 2 
hash(2) // 533

```

and this one:

</br>

[test_for_threads_2.js](/tree/main/snippets/17_threads/test_for_threads_2.js)


```js

// hash 1
hash(1) // 530

// hash 2 
hash(2) // 1051

// hash 3
hash(3) // 1053


```

**The system where these test ran have 4 CPU's and 2 cores per CPU and two threads per core**

> Why calling the `hash(3)` did increased the elapsed time of `hash(2)`?

_**NOTE:**_ Thread Pool utilize all cores with a CPU, but they don't utlize different CPU.


##### Cool way to determine pool size

Call async functions n times, xth time which shows significant delay is due to the fact that all the threads within all cores of a CPU were filled, and this xth function call had to wait for a considerable time.

</br>

[test_thread_pool_size.js](/tree/main/snippets/17_threads/test_for_thread_pool_size_.js)

```js
const crypto = require('crypto')

const start = Date.now();
const hash = (id)=>{
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log(`Hash ${id} time (milli seconds): `, Date.now()-start)
    })
}

hash(1)  // 1068
hash(2)  // 1068
hash(3)  // 1068
hash(4)  // 1069
hash(4)  // ~1592 and sometimes ~2922


```

##### Running two threads for two async tasks (that use thread pool i.e not OSAsync tasks) in a CPU with single core with two thread support is not the same as running them on two different CPU's

If a there are two cores in a CPU and there two async tasks then each task will go to one core, and utilize all it's resources.

Two cores, two threads per core:

```js
hash(1)  // 525
hash(2)  // 525
```

Two cores, two threads per core:

```js
hash(1)  // 525
hash(2)  // 1021
hash(2)  // 1023

```
**Tasks 2 and Task 3 shared a core that's why their elapsed time is greater than that of Task 1 which did not share core with any other thread**


### The strategy used by libuv to achieve asynchronous I/O is not always a thread pool!!

Unlike the hashing code which used threadpool of size 4, below async function don't make use of thread pool, that's why it is handling more than 4 threads simultaneously!

```js
const https = require('https')
const start = Date.now()

const make_request = () => {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {})
      res.on('close', () => {
        console.log(Date.now() - start)
      })
    })
    .end()
}

make_request()  // 698
make_request()  // 709
make_request()  // 710
make_request()  // 700
make_request()  // 690
make_request()  // 750
```

<p align="center"><a href="#index">back to index<a/></p>

---

### Crazy Event Loop

</br>

[crazy_event_loop.js](/tree/main/snippets/18_crazy_event_loop/crazy_event_loop.js)

```js
const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()
const hash = (id) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log(`Hash ${id} time elapsed (milli seconds): `, Date.now() - start)
  })
}

const make_request = () => {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {})
      res.on('close', () => {
        console.log(
          'HTTP request time elapsed (milliseconds)',
          Date.now() - start
        )
      })
    })
    .end()
}

const read_file = ()=>{
    fs.readFile('file.txt', 'utf-8', () => {
        console.log('FS readfile time elapsed (milliseconds)', Date.now() - start)
      })
}

make_request()
read_file()
hash(1)
hash(2)
hash(3)
hash(4)

```

> Output

```console
⚝      node crazy_event_loop.js 
HTTP request time elapsed (milliseconds) 612
Hash 1 time elapsed (milli seconds):  1191
FS readfile time elapsed (milliseconds) 1211
Hash 4 time elapsed (milli seconds):  1310
Hash 2 time elapsed (milli seconds):  1326
Hash 3 time elapsed (milli seconds):  1346
⚝      node crazy_event_loop.js 
HTTP request time elapsed (milliseconds) 516
Hash 3 time elapsed (milli seconds):  2504
FS readfile time elapsed (milliseconds) 2505
Hash 2 time elapsed (milli seconds):  2515
Hash 4 time elapsed (milli seconds):  2564
Hash 1 time elapsed (milli seconds):  2569

```

> Explanation

[Unexpected Event Loop Events](https://youtu.be/iWodVp9DuQk)

<p align="center"><a href="#index">back to index<a/></p>

---



### Why event based network apps are faster than thread based? 

I think event based vs thread based is not the question - it is a nonblocking Multiplexed I/O, Selectable sockets, solution vs thread pool solution.
In the first case you are handling all input that comes in regardless of what is using it- so there is no blocking on the reads- a single 'listener'. The single listener thread passes data to what can be worker threads of different types- rather than one for each connection. Again, no blocking on writing any of the data- so the data handler can just run with it separately. Because this solution is mostly IO reads/writes it doesn't occupy much CPU time- thus your application can take that to do whatever it wants.
In a thread pool solution you have individual threads handling each connection, so they have to share time to **context switch** in and out- each one 'listening'. In this solution the CPU + IO ops are in the same thread- which gets a time slice- so you end up waiting on IO ops to complete per thread (blocking) which could traditionally be done without using CPU time.




<p align="center"><a href="#index">back to index<a/></p>

---


### How does Node.js handle child threads?

Node.js, in its essence, is a **single thread** process. It does not expose child threads and thread management methods to the developer. Technically, Node.js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.

<p align="center"><a href="#index">back to index<a/></p>

---

### How does Node.js support multi-processor platforms, and does it fully utilize all processor resources?

Since Node.js is by default a **single thread** application, it will run on a single processor core and will not take full advantage of multiple core resources. However, Node.js provides support for deployment on multiple-core systems, to take greater advantage of the hardware. The [Cluster](https://nodejs.org/api/cluster.html) module is one of the core Node.js modules and it allows running multiple Node.js worker processes that will share the same port.


<p align="center"><a href="#index">back to index<a/></p>

---



### JS compiled or interpreted?

JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.
This has been happening since 2009, when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.
JavaScript is internally compiled by V8 with `just-in-time (JIT) compilation` to speed up the execution.

<p align="center"><a href="#index">back to index<a/></p>

---


#### Compiler vs Interpretor?

**Compilers**
Compilers were the first sort of translator program to be written. The idea is simple: You write the program, then hand it to the compiler which translates it. Then you run the result.

**Interpreters**
An interpreter is also a program that translates a high-level language into a low-level one, but it does it at the moment the program is run. You write the program using a text editor or something similar, and then instruct the interpreter to run the program. It takes the program, one line at a time, and translates each line before running it: It translates the first line and runs it, then translates the second line and runs it etc.

**Compiler characteristics:**
- spends a lot of time analyzing and processing the program
- the resulting executable is some form of machine- specific binary code
- the computer hardware interprets (executes) the resulting code
- program execution is fast

**Interpreter characteristics:**
- relatively little time is spent analyzing and processing the program
- the resulting code is some sort of intermediate code
- the resulting code is interpreted by another program
- program execution is relatively slow


<p align="center"><a href="#index">back to index<a/></p>

---


### What is JIT compilation?

In the beginning, a compiler was responsible for turning a high-level language (defined as higher level than assembler) into object code (machine instructions), which would then be linked (by a linker) into an executable.

At one point in the evolution of languages, compilers would compile a high-level language into pseudo-code, which would then be interpreted (by an interpreter) to run your program. This eliminated the object code and executables, and allowed these languages to be portable to multiple operating systems and hardware platforms. Pascal (which compiled to P-Code) was one of the first; Java and C# are more recent examples. Eventually the term P-Code was replaced with bytecode, since most of the pseudo-operations are a byte long.

A Just-In-Time (JIT) compiler is a feature of the run-time interpreter, that **instead of interpreting bytecode every time a method is invoked, will compile the bytecode into the machine code instructions of the running machine, and then invoke this object code instead.** Ideally the efficiency of running object code will overcome the inefficiency of recompiling the program every time it runs.

<p align="center"><a href="#index">back to index<a/></p>

---

### What is `tick` in Nodejs event loop?

> Tick means processing all events in the queue of a single phase


Remember that while JavaScript is single-threaded, all of node's I/O and calls to native APIs are either asynchronous (using platform-specific mechanisms), or run on a separate thread. (This is all handled through libuv.)

So when there's data available on a socket or a native API function has returned, we need a synchronized way to invoke the JavaScript function that is interested in the particular event that just happened.

It's not safe to just call the JS function from the thread where the native event happened for the same reasons that you'd encounter in a regular multi-threaded application – race conditions, non-atomic memory access, and so forth.

So what we do is place the event on a queue in a thread-safe manner. In oversimplified psuedocode, something like:

```js
lock (queue) {
    queue.push(event);
}
```

Then, back on the main JavaScript thread (but on the C side of things), we do something like:

```js
while (true) {
    // this is the beginning of a tick

    lock (queue) {
        var tickEvents = copy(queue); // copy the current queue items into thread-local memory
        queue.empty(); // ..and empty out the shared queue
    }

    for (var i = 0; i < tickEvents.length; i++) {
        InvokeJSFunction(tickEvents[i]);
    }

    // this the end of the tick
}
```

The `while (true)` (which doesn't actually exist in node's source code; this is purely illustrative) represents the event loop. The inner `for` invokes the JS function for each event that was on the queue.

**This is a tick:** the synchronous invocation of zero or more callback functions associated with any external events. Once the queue is emptied out and the last function returns, the tick is over. We go back to the beginning (the next tick) and check for events that were added to the queue from other threads while our JavaScript was running.

> What can add things to the queue?

- `process.nextTick`
- `setTimeout/setInterval`
- I/O (stuff from `fs`, `net`, and so forth)
- `crypto`'s processor-intensive functions like crypto streams, pbkdf2, and the PRNG (which are actually an example of...)
- any native modules that use the [libuv work queue](http://nikhilm.github.io/uvbook/threads.html#libuv-work-queue) to make synchronous C/C++ library calls look asynchronous.

<p align="center"><a href="#index">back to index<a/></p>

---

### What concurrency means in Node.js?

JavaScript execution in Node.js is single threaded, so concurrency refers to the event loop's capacity to execute JavaScript callback functions after completing other work. Any code that is expected to run in a concurrent manner must allow the event loop to continue running as non-JavaScript operations, like I/O, are occurring.

<p align="center"><a href="#index">back to index<a/></p>


---

### In the backend Node make use of multi threading, do JS code gets executed in multiple threads or not?
No, JS runs in single thread always, except when you use clusters. C++ do run in multiple threads though.

<p align="center"><a href="#index">back to index<a/></p>


---
---

## A little about working with Node.js

### The time required to run below code in Google Chrome is considerably more than the time required to run it in Node.js. Explain why this is so, even though both use the v8 JavaScript Engine.: 

```js
{
    console.time("loop");
    for (var i = 0; i < 1000000; i += 1){
        // Do nothing
    }
    console.timeEnd("loop");
}
```

Within a web browser such as Chrome, declaring the variable `i` outside of any **function**’s scope makes it global and therefore binds it as a property of the `window` object. As a result, running this code in a web browser requires repeatedly resolving the property `i` within the heavily populated `window` namespace in each iteration of the `for` loop.

In Node.js, however, declaring any variable outside of any function’s scope binds it only to the module’s own scope (not the `window` object) which therefore makes it much easier and faster to resolve.

It’s also worth noting that using `let` instead of `var` in the `for` loop declaration can reduce the loop’s run time by over 50%. But such a change assumes you know the difference between let and var and whether this will have an effect on the behavior of your specific loop.


<p align="center"><a href="#index">back to index<a/></p>

---

### What is the preferred method of resolving unhandled exceptions in Node.js?

Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.

```js
process.on("uncaughtException",(err)=>{
    console.log(`Caught exception: ${err}`)
})

throw "random error"
});
```

```
Caught exception: random error
```

However, `uncaughtException` is a very crude mechanism for exception handling and may be removed from Node.js in the future. An exception that has bubbled all the way up to the `Process` level means that your application, and Node.js may be in an undefined state, and the only sensible approach would be to restart everything.

> The preferred way is to add another layer between your application and the Node.js process which is called the [domain](https://nodejs.org/api/domain.html). Deprecated now.

Domains provide a way to handle multiple different I/O operations as a single group. So, **by having your application, or part of it, running in a separate domain, you can safely handle exceptions at the domain level, before they reach the  `Process`  level.**

<p align="center"><a href="#index">back to index<a/></p>

---

### How to set environment variable in node via CLI?

Environment variables (in this case) are being used to pass credentials to your application. USER_ID and USER_KEY can both be accessed from **process.env.USER_ID** and **process.env.USER_KEY respectively**.

Now, the magic happens when you run the application.

```console
USER_ID=239482 USER_KEY=foobar node app.js
```

That will pass the user **id 239482** and the **user key** as **foobar**. This is suitable for testing, however for production, you will probably be configuring some bash scripts to export variables.

<p align="center"><a href="#index">back to index<a/></p>

---


### What is REPL and how to use it?

REPL also known as Read Evaluate Print Loop is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.

```console
node
>
```

- Use Tab to autocomplete
- If after some code you type `_`, that is going to print the result of the last operation.
- entering the name of a JavaScript class, like Number, add a dot and press tab. The REPL will print all the properties and methods you can access on that class
- `save`: saves all you entered in the REPL session to a file (specify the filename)
- `.exit` to exit

<p align="center"><a href="#index">back to index<a/></p>

---


### How to work with Command Line Arguments in Node.js?

Arguments can be standalone or have a key and a value.

```console
node app.js name=joe
```

The way you retrieve it is using the **process** object built into Node.js.
It exposes an `argv` property, which is an array that contains all the command line invocation arguments.
- The first element is the full path of the node command.
- The second element is the full path of the file being executed.
- All the additional arguments are present from the third position going forward.

```js
const args = process.argv.slice(2)
args[0]
```

`args[0]` is `name=joe`, and you need to parse it. The best way to do so is by using the `minimist` library, which helps dealing with arguments:

```js
const args = require('minimist')(process.argv.slice(2))
args['name'] //joe
```
> `minimist` creates dictionary out of args, name value args will become `key` and `value` in dictionary whereas if arg is only val then it will be `key` with null val

##### Code

</br>

[cl_args.js](/tree/main/snippets/0_command_line_args/cl_args.js)

```js
console.log(process.argv)

// node cla.js 1 2 3
// Output will be
// ['path/2/Node', 'path/2/cla.js','1','2','3']
```

<p align="center"><a href="#index">back to index<a/></p>

---

### Environment variable vs command line args


1)  I would recommend avoiding environmental variables as much as possible.

**Pros of environmental variables** 

 - easy to use because they're visible from anywhere.  If lots of independent programs need a piece of information, this approach is a whole lot more convenient.

**Cons of environmental variables**

 - hard to use correctly because they're visible (delete-able, set-able) from anywhere.  If I install a new program that relies on environmental variables, are they going to stomp on my existing ones?  Did I inadvertently screw up my environmental variables when I was monkeying around yesterday?

**My opinion**  

 - use command-line arguments for those arguments which are most likely to be different for each individual invocation of the program (i.e. n for a program which calculates n!)
 - use config files for arguments which a user might reasonably want to change, but not very often (i.e. display size when the window pops up)
 - use environmental variables sparingly -- preferably only for arguments which are expected not to change (i.e. the location of the Python interpreter)
 - your point `They are global and accessible from anywhere, which is less elegant from architectural point of view, but limits the amount of code` reminds me of justifications for the use of global variables ;)

**My scars from experiencing first-hand the horrors of environmental variable overuse**

 - two programs we need at work, which can't run on the same computer at the same time due to environmental clashes 
 - multiple versions of programs with the same name but different bugs -- brought an entire workshop to its knees for hours because the location of the program was pulled from the environment, and was (silently, subtly) wrong.


----------


2) Limits 

If I were pushing the limits of either what the command line can hold, or what the environment can handle, I would refactor immediately.

I've used JSON in the past for a command-line application which needed a lot of parameters.  It was very convenient to be able to use dictionaries and lists, along with strings and numbers.  The application only took a couple of command line args, one of which was the location of the JSON file.  

**Advantages of this approach**

 - didn't have to write a lot of (painful) code to interact with a CLI library -- it can be a pain to get many of the common libraries to enforce complicated constraints (by 'complicated' I mean more complex than checking for a specific key or alternation between a set of keys)
 - don't have to worry about the CLI libraries requirements for order of arguments -- just use a JSON object!
 - easy to represent complicated data (answering `What won't fit into command line parameters?`) such as lists
 - easy to use the data from other applications -- both to create and to parse programmatically
 - easy to accommodate future extensions

**Note**: I want to distinguish this from the .config-file approach -- this is not for storing user configuration.  Maybe I should call this the 'command-line parameter-file' approach, because I use it for a program that needs lots of values that don't fit well on the command line.

----------


3) Solution portability:  I don't know a whole lot about the differences between Mac, PC, and Linux with regard to environmental variables and command line arguments, but I can tell you:

 - all three have support for environmental variables
 - they all support command line arguments

Yes, I know -- it wasn't very helpful.  I'm sorry.  But the key point is that you **can** expect a reasonable solution to be portable, although you would definitely want to verify this for your programs (for example, are command line args case sensitive on any platforms?  on all platforms?  I don't know).


----------

One last point:

As Tomasz mentioned, it shouldn't matter to most of the application where the parameters came from.




---

### How to use Colored Text?

</br>

[color.js](/tree/main/snippets/1_colored_text_and_progesss_bar/color.js)

```js
// Colored Text
// npm install chalk
const chalk = require('chalk')
console.log(chalk.yellow('hi!'))
```

<p align="center"><a href="#index">back to index<a/></p>

---


### How to use a Progress Bar?

</br>

[progress.js](/tree/main/snippets/1_colored_text_and_progesss_bar/progress.js)

```console
npm i progress
```

```js
// Creates a Progress Bar
// npm install progress
const ProgressBar = require('progress')

// Plain bar
const bar = new ProgressBar(":bar", { total: 10 })

// Colored bar
// const chalk = require('chalk')
// const bar = new ProgressBar(`${chalk.red(":bar")}`, { total: 10 })

const timer = setInterval(() => {
  bar.tick()
  if (bar.complete) {
    clearInterval(timer)
  }
}, 100)
```

<p align="center"><a href="#index">back to index<a/></p>

---

### How to take User Input?

</br>

[input.js](/tree/main/snippets/2_user_input/input.js)

```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name?\n`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  })
```

<p align="center"><a href="#index">back to index<a/></p>

---



### Basic Export Mechanism in Node

</br>

[exports.js](/tree/main/snippets/3_exports/exports.js)

```js
const person = {
    name:"Jack",
    age:29
}

// default export
// last default export will override previous ones if there are any
module.exports = person
// { name: 'Jack', age: 29 }

// named export
exports.person = person
// { person: { name: 'Jack', age: 29 } }

exports = person
// {}
```


**import**

```js
const r  = require('exports')
console.log(r)
// { name: 'Jack', age: 29 }
// { person: { name: 'Jack', age: 29 } }
// {}


```

<p align="center"><a href="#index">back to index<a/></p>

---

### Where `npm` global packages are installed?

```console
npm root -g
```


<p align="center"><a href="#index">back to index<a/></p>

---


### Why we need of `package-lock.json` file?

The goal of package-lock.json file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.

This solves a very specific problem that package.json left unsolved. In package.json you can set which versions you want to upgrade to (patch or minor), using the semver notation, for example:

- if you write `~`0.13.0, you want to only update `patch` releases: 0.13.1 is ok, but 0.14.0 is not.
- if you write `^`0.13.0, you want to update `patch` and `minor` releases: 0.13.1, 0.14.0 and so on.
- if you write 0.13.0, that is the exact version that will be used, always

You don't commit to Git your node_modules folder, which is generally huge, and when you try to replicate the project on another machine by using the npm install command, if you specified the ~ syntax and a patch release of a package has been released, that one is going to be installed. Same for ^ and minor releases.

> If you specify exact versions, like 0.13.0 in the example, you are not affected by this problem but there still gonna be problems in child nodes of dependency tree.

It could be you, or another person trying to initialize the project on the other side of the world by running npm install.
So your original project and the newly initialized project are actually different. Even if a patch or minor release should not introduce breaking changes, we all know bugs can (and so, they will) slide in.

#### Why not delete package-lock.json?
Think about it, if you delete package-lock and re-install, you are forcing the latest versions of all packages in the dependency tree. Meaning, you are changing the behavior of (potentially) the entire application.

What are you really trying to do? If you have some weird npm-related problem, simply remove node_modules and run npm install again. Removing package-lock.json is never the solution.

<p align="center"><a href="#index">back to index<a/></p>

---


### semver

#### Versioning

- Major
  - Used for major updates. Typically used when backwards compatibility is not possible
- Minor
  - Used for new features and updates that do not break existing functionality
- Patch
  - Used for bug fixes and other minor changes

#### Prerelease Qualifiers

1. If a package is in prerelease, a suffix can be added to the version
   - 1.0.0-alpha
   - 1.0.0-beta
   - 1.0.0-rc.1
2. A suffixed version is considered lower than the non-suffixed version
   - 1.0.0 < 1.1.0-beta < 1.1.0 

<p align="center"><a href="#index">back to index<a/></p>

---

### How to find version of npm package?
Use the command below:

```console
npm list

// optionally use npm list --depth=0 for top level packages
```


<p align="center"><a href="#index">back to index<a/></p>

---


### How to update packages without changing `package.json` file?

Run

```console
npm update --no-save
```


<p align="center"><a href="#index">back to index<a/></p>

---

### What are the rules for semantic versioning in npm?

The Semantic Versioning concept is simple: all versions have 3 digits: `x.y.z`.

- the first digit is the major version
- the second digit is the minor version
- the third digit is the patch version

When you make a new release, you don't just up a number as you please, but you have rules:

- you up the major version when you make incompatible API changes
- you up the minor version when you add functionality in a backward-compatible manner
- you up the patch version when you make backward-compatible bug fixes

##### Rules

- ^: It will only do updates that do not change the leftmost non-zero number. If you write ^0.13.0, when running npm update, it can update to 0.13.1, 0.13.2, and so on, but not to 0.14.0 or above.
- ~: if you write ~0.13.0 when running npm update it can update to patch releases: 0.13.1 is ok, but 0.14.0 is not.
- \>: you accept any version higher than the one you specify
- \>=: you accept any version equal to or higher than the one you specify
- <=: you accept any version equal or lower to the one you specify
- <: you accept any version lower than the one you specify
- =: you accept that exact version
- -: you accept a range of versions. Example: 2.1.0 - 2.6.2
- ||: you combine sets. Example: < 2.1 || > 2.6


<p align="center"><a href="#index">back to index<a/></p>

---


### Flag for dev dependencies.

When you add the `-D` flag, or `--save-dev`, you are installing it as a development dependency, which adds it to the devDependencies list.

> You need to set the --production flag (`npm install --production`) to avoid installing those development dependencies.

<br/><br/> 

> devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime.

<p align="center"><a href="#index">back to index<a/></p>

---


### What is `npx`?

The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

> Node.js developers used to publish most of the executable commands as global packages, in order for them to be in the path and executable immediately.

This was a pain because you could not really install different versions of the same command.
Running npx commandname automatically finds the correct reference of the command inside the node_modules folder of a project, without needing to know the exact path, and without requiring the package to be installed globally and in the user's path.

```shell
# get cow message
npx cowsay fuck you human

# check whether cowsay is installed or not
npm list

```

<p align="center"><a href="#index">back to index<a/></p>

---


### How to change node version in use without using nvm?

```console
npx node@10 -v 
npx node@12 -v 
```

<p align="center"><a href="#index">back to index<a/></p>

---


### `process.nextTick()` vs `setTimeout(() => {}, 0)`?

When we pass a function to process.nextTick(), we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:

```js
process.nextTick(() => {
  //do something
})
```

The event loop is busy processing the current function code.

When this operation ends, the JS engine runs all the functions passed to nextTick calls during that operation.

It's the way we can tell the JS engine to process a function asynchronously (after the current function), but **as soon as possible, not queue it**.

Calling `setTimeout(() => {}, 0)` will execute the function at the end of next tick, much later than when using `nextTick()` which prioritizes the call and executes it just before the beginning of the next tick.

> Use `nextTick()` when you want to make sure that in the next event loop iteration that code is already executed.

<p align="center"><a href="#index">back to index<a/></p>

---


### `setImmediate()`?

```js
setImmediate(() => {
  //run something
})
```

<p align="center"><a href="#index">back to index<a/></p>

---



### `setImmediate` vs `process.nextTick()`?

A function passed to `process.nextTick()` is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before `setTimeout` and `setImmediate`.

A `setTimeout()` callback with a 0ms delay is very similar to `setImmediate()`. The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

<p align="center"><a href="#index">back to index<a/></p>

---


### What is difference between `setTimeout()` and `setInterval()`?

`setTimeout(cb,delay,args)` will call the `cb` after `delay` milliseconds, and pass the `args` to `cb`.
`setInterval(cb,delay,args)` will keep calling the `cb`, after passing the `args` to `cb`, with time difference between consecutive calls be `delay` milliseconds. First call will be after `delay` miliseconds.


> `args` = arg1, arg2, arg3, ...

##### Code

</br>

[setTimeout.js](/tree/main/snippets/4_timer/setTimeout.js)

```js

const addition = (a, b) => {
  console.log('Sum: ', a + b)
}

// to store id returned by setTimeout
var id

const slow_addition = (delay, a, b) => {
  // first arg is function to run
  // second arg is delay in milliseconds
  // rest of args are parameters to function passed
  id = setTimeout(addition, delay, a, b)
}

// runs after 2 seconds
slow_addition(2000, 3, 5)

//  pass 0 in command line if you want to cancel execution of timed function
if (process.argv[2] && process.argv[2] == 0) {
  clearTimeout(id)
  console.log("Sum won't be printed")
}
```

</br>

[setInterval.js](/tree/main/snippets/4_timer/setInterval.js)

```js
const addition = (a, b) => {
  console.log(a + b)
}

// to store id returned by setInterval
var id;

const repeat_addition = (delay, a, b) => {
  // first arg is function to run
  // second arg is delay between consecutive calls of function
  // first call will also be after delay milliseconds
  // rest of args are parameters to function passed
  id = setInterval(addition, delay, a, b)
}


// runs after every 2 seconds
repeat_addition(2000, 3, 5)


//  pass 0 in command line if you want to cancel execution of timed function
if (process.argv[2] && process.argv[2] == 0) {
    clearInterval(id)
    console.log("Sum won't be printed even once")
  }
```
<p align="center"><a href="#index">back to index<a/></p>

---

### Callback
In computer programming, a callback, also known as a "call-after" function, is any executable code that is passed as an argument to other code; that other code is expected to call back the argument at a given time.

<p align="center"><a href="#index">back to index<a/></p>

---

### `error-first callbacks`?

Error-first callbacks are used to pass error and data. The first argument to these functions is an error object and the subsequent arguments represent associated data. If there is no error, the object is `null`. If there is an error, it contains some description of the error and other information.

```js
fs.readFile('/file.json', (err, data) => {
  if (err) {
    //handle error
    console.log(err)
    return
  }

  //no errors, process data
  console.log(data)
})
```

<p align="center"><a href="#index">back to index<a/></p>

---


### How to create custom `callback`?

```js
const add = (a,b,callback)=>{
    callback(a+b)
};

const log = (a)=>{
    console.log(a)
}


add(2,3,log)

```
For more detailed examples:

##### Simple Callback

</br>

[custom_callback_1.js](/tree/main/snippets/5_custom_callback/custom_callback_1.js)

```js
// add function, adds numbers and calls callback
const add = function(num1, num2, callback, times) {
    sum = num1 + num2;

    callback(times, sum);
}

// example of callback which is not linked with object
// multiply specifc num (this.sum) to `times`
function product(times,sum) {
    console.log(times * sum);
}



// add 1 and 1 and then multiply their sum with 3
add(1, 1, product, 3)
```

##### Callback Linked with Object Prototype

</br>

[custom_callback_2.js](/tree/main/snippets/5_custom_callback/custom_callback_2.js)

```js
// Calc have add function which after adding calls a callback which uses a specific scope

// Object Prototype
function Calc(num1,num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.sum = 0;

}

// add function, adds numbers and calls callback
Calc.prototype.add = function(callback, times) {
    this.sum = this.num1 + this.num2;

    // Call our callback, but using our own instance as the context
    callback.call(this, times);
}

// example of callback which is linked with object
// multiply specifc num (this.sum) to `times`
function product(times) {
    console.log(times * this.sum);
}

var adr = new Calc(1,1)

// add 1 and 1 and then multiply their sum with 3
adr.add(product,3)
```

<p align="center"><a href="#index">back to index<a/></p>

---

### What is callback hell and how it is resolved?

It is a slang term used to describe huge number of nested functions/callbacks, so that it becomes hard to write and read code.
Main problems with callback hell are:

- We **can not use the return value of callback in the function where it is passed because it is possible that it might be async and value is not calculated yet and call stack is processed further with null**, to do so we will make use of another callback within the original callback.
- callback can return error and promises (async functions use promises) and try-catch do not errors thrown by promises
- Code becomes hard to read and maintain.

> NOTE: only async callbacks cause problems, below code cause no problem

```js
const add = (a,b,callback)=>{
    let ans = callback(a+b, tripple)
    return ans
};

const double = (a, callback)=>{
    const d = callback(a)
    return d
}

const tripple = (a)=>{
    return 3*a
}

console.log(add(2,3,double))

```


##### Sample Callback Hell

</br>

[callback_hell.js](/tree/main/snippets/6_callback_hell/callback_hell.js)

```js
const cb = (delay1, delay_increment = 1, sum = 0) => {
  setTimeout(
    (delay2, sum) => {
      setTimeout(
        (delay3, sum) => {
          setTimeout(
            (sum) => {
              console.log(`got printed after ${sum} seconds`);
            },
            delay3,
            sum + delay3
          );
        },
        delay2,
        delay2 + delay_increment,
        sum + delay2
      );
    },
    delay1,
    delay1 + delay_increment,
    sum + delay1
  );
};

cb(1000);

```

Output:
```
got printed after 3003 seconds
```

> How it is prevented?

Promises (ES6), Async/Await (ES2017) and Generators.

<p align="center"><a href="#index">back to index<a/></p>

---



### What is Async Waterfall?

To be covered.

<p align="center"><a href="#index">back to index<a/></p>

---

### What is Async Series?

To be covered.

<p align="center"><a href="#index">back to index<a/></p>

---


### What are `Promises`?

A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved.

> **Note:** Async functions use promises behind the scenes.

##### Sample Promise

</br>

[promise.js](/tree/main/snippets/7_promises/promise.js)

```js

// node promise.js 0 -> reject promise
// node promise.js 1 -> resolve promise

const promise = new Promise((resolve, reject) => {
  if (process.argv[2] && process.argv[2]==1) {
    const data = 'Promise fulfilled'
    resolve(data)
  } else {
    const err = 'Promise rejected'
    reject(err)
  }
})

promise.then((data) => console.log(data)).catch((err) => console.log(err))
```

**NOTE**:
```js
promise
  .then((data) => {
    console.log(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

```

**OUTPUT**:
```
Promise fulfilled
undefined
```
##### Promise for Callback Hell

</br>

[callback_hell.js](/tree/main/snippets/6_callback_hell/callback_hell.js), see above example. Same code is referenced here.

</br>

[promisify_callback.js](/tree/main/snippets/7_promises/promisify_callback.js)

```js
const timeOut = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout((err, _) => {
      if (err) {
        reject()
        return
      }
      resolve(delay)
    }, delay)
  })
}

timeOut(1000)
  .then((delay) => timeOut(delay))
  .then((delay) => timeOut(delay))
  .then((delay) => timeOut(delay)).then(delay => console.log('I got printed after ', delay * 4, ' ms'))
```

##### Promise `fs.read`

</br>

[promisify_fsread.js](/tree/main/snippets/7_promises/promisify_fsread.js)

```js
const fs = require('fs')

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return        // and we don't want to go any further
      }
      resolve(data)
    })
  })
}

getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err))
```

##### Promise Chaining

</br>

[promise_chain.js](/tree/main/snippets/7_promises/promise_chain.js)

```js

const fetch = require('node-fetch');
const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
  }
  
  const json = response => response.json()
  
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
      console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
      console.log('Request failed', error)
    })
```

##### `Promise.all` 

> If you need to synchronize different promises, `Promise.all()` helps you define a list of promises, and execute something when they are all resolved.

</br>

[promise_all.js](/tree/main/snippets/7_promises/promise_all.js)

```js
const fetch = require('node-fetch');

const f1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
const f2 = fetch('https://jsonplaceholder.typicode.com/todos/2')

Promise.all([f1, f2])
  .then(([res1,res2]) => {
    console.log('Array of results', res1,res2)
  })
  .catch(err => {
    console.error(err)
  })
```

##### `Promise.race`

> Promise.race() runs when the first of the promises you pass to it resolves, and it runs the attached callback just once, with the result of the first promise resolved.

</br>

[promise_race.js](/tree/main/snippets/7_promises/promise_race.js)

```js

const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second')
  })
  
  Promise.race([first, second]).then(result => {
    console.log(result) // second
  })
```

<p align="center"><a href="#index">back to index<a/></p>

---

### Why Try and Catch block is useless for catching promise errors?

Because `try-catch` is for synchronous code only.

<p align="center"><a href="#index">back to index<a/></p>

---

### Problems with **Promises**?

They do **reduce** the number of nested callbacks you’ll be working with, they don’t remove them entirely. As a client programmer, there’s no way for me to fetch a promise’s value and use it in the current scope.

Put another way, there’s no way for a programmer (with promises alone) to write a simple function that uses a value returned by a promise

```js
const someFunction = function(value) {
    let promise = someApi.somePromiseBasedApi();

    let promiseValue = ??????
    promise.then(function(result){
        // I can access the value here, but there's
        // no way for me to get it up in the main
        // scope and have `someFunction` return its value
    });

    var finalValue = someOtherFunction(promiseValue);
    return finalValue;
}

```

<p align="center"><a href="#index">back to index<a/></p>

---

### What are async functions, and why we need them?

Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Let me repeat: async/await is built on promises.
We need them to solve problems introduced by `promises`.

---

<p align="center"><a href="#index">back to index<a/></p>

---

### How to convert a promise into an asyn-function?

We will make a `wrapper function` which returns our `promise`, we will call our wrapper function in an `async` but we will `append await` to our wrapper function.

> Since our `promises` can `reject` so they must be called within `try catch` block. 

</br>

[promise.js](/tree/main/snippets/7_promises/promise.js)

```js

// node promise.js 0 -> reject promise
// node promise.js 1 -> resolve promise

const promise = new Promise((resolve, reject) => {
  if (process.argv[2] && process.argv[2]==1) {
    const data = 'Promise fulfilled'
    resolve(data)
  } else {
    const err = 'Promise rejected'
    reject(err)
  }
})

promise.then((data) => console.log(data)).catch((err) => console.log(err))
```

</br>

[async_await.js](/tree/main/snippets/8_async_await/async_await.js)

```js
// node promise.js 0 -> reject promise
// node promise.js 1 -> resolve promise

const promise = new Promise((resolve, reject) => {
  if (process.argv[2] && process.argv[2] == 1) {
    const data = 'Promise fulfilled'
    resolve(data)
  } else {
    const err = 'Promise rejected'
    reject(err)
  }
})

const wrapper_fn = () => {
  return promise
}

const async_fn = async () => {
  // we will use try catch, because promise can reject,
  // and in that case error will be thrown
  try {
    const promise_value = await wrapper_fn()
    if (promise_value == 'Promise fulfilled') {
      console.log('Fulfilled')
      return 'hurrah'
    }
  } catch (e) {
    console.log('Rejected')
    return 'oh'
  }
}

// Note that async functions return a promise implicitly
async_fn()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
```
> **NOTE:** We used `try-catch` above with `promise` because `await` was used which made it *synchronous*
    
<br/>

> **NOTE:** An `async` funciton returns a `promise`, implicitly. Hence it can have **two return values**, accessable in `then` and `catch`.

```js
const fn = async () => {
  return 'ok'
}

fn().then(data => console.log(data)) 
```

<p align="center"><a href="#index">back to index<a/></p>

---


### Event Emitter

</br>

[event_emitter.js](/tree/main/snippets/9_event_emitter/event_emitter.js)

```js
// node event_emitter.js add num1 num2
// num1 and num2 must be whole numbers

// on add event, get sum of sumbers and call rand_incr
// rand_incr increment sum by a random whole integer
// after incrementing sum check whether ans is odd or not
// on even event call rand_incr event
// on odd event return


const EventEmitter = require('events')
const event_emitter = new EventEmitter()

event_emitter.on('add',(num1,num2)=>{
  let sum = num1+num2
  console.log("add event detected.\nSum=> ",num1,"+",num2,"=",sum)
  console.log("Emitting `rand_incr` event")
  event_emitter.emit('rand_incr',sum)
})

event_emitter.on('rand_incr',(num)=>{
let incremented_sum = num + Math.floor(Math.random() * 10) 
console.log("Incremented Sum: ",incremented_sum)
if(incremented_sum%2==0){
  console.log("Even Incremented Sum detected!\n")
  event_emitter.emit('even',incremented_sum)
}
else{
  console.log("Odd Incremented Sum detected! Calling `odd`, it can be emitted once")
  event_emitter.emit('odd',incremented_sum)
}
})


event_emitter.on('even',num=>{
  console.log("Emitting `rand_incr` again.")
  event_emitter.emit('rand_incr',num)})

event_emitter.once('odd',()=>{
  console.log("\nTerminating process ....")
  return
})

if(process.argv[2]=="add"){
  event_emitter.emit("add",parseInt(process.argv[3]),parseInt(process.argv[4]))
}
```

</br>

[remove_listener.js](/tree/main/snippets/9_event_emitter/remove_listener.js)

```js
const EventEmitter = require('events')
const event_emitter = new EventEmitter()

const callbackA = () => {
  console.log('A');
  event_emitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

event_emitter.on('event', callbackA);

event_emitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
event_emitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
event_emitter.emit('event');
// Prints:
//   A
```

> **NOTE:** If there are two listeners associated to an event and you **remove one listener** while listening to event, then first time the event occurs **both listeners will be called**.

<p align="center"><a href="#index">back to index<a/></p>

---

### How to make a basic `http server`?

When you initialize the HTTP server using `http.createServer()`, the callback is called when the server got all the HTTP headers, but **not** the request body.
The request object passed in the connection callback is a **stream**.
So, we must listen for the body content to be processed, and it's processed in **chunks**.
We first get the data by listening to the stream data events, and when the data ends, the stream end event is called, once:


</br>

[http_server.js](/tree/main/snippets/10_http_server/http_server.js)

```js
// PORT=port node http_server.js

const http = require('http')

const port = process.env.PORT

// The key thing to understand is that when you initialize the HTTP server
// using http.createServer(), the callback is called when the server
// got all the HTTP headers, but not the request body.
const server = http.createServer((req, res) => {
  let data = ''
  req.on('data', (chunk) => {
    data += chunk
  })
  req.on('end', () => {
    console.log(JSON.parse(data)) // 'Buy the milk'
    res.end(data)
  })

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  //    Note that belwo commented line won't send any data to client,
  //    because callback is called when headers of request received not data
  //    res.end(data)
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
  console.log(`Visit: http://localhost:${port}`)
})
```

<p align="center"><a href="#index">back to index<a/></p>

---

### http server anatomy



The purpose of this guide is to impart a solid understanding of the process of
Node.js HTTP handling. We'll assume that you know, in a general sense, how HTTP
requests work, regardless of language or programming environment. We'll also
assume a bit of familiarity with Node.js [`EventEmitters`][] and [`Streams`][].
If you're not quite familiar with them, it's worth taking a quick read through
the API docs for each of those.

#### Create the Server

Any node web server application will at some point have to create a web server
object. This is done by using [`createServer`][].

```javascript
const http = require('http');

const server = http.createServer((request, response) => {
  // magic happens here!
});
```

The function that's passed in to [`createServer`][] is called once for every
HTTP request that's made against that server, so it's called the request
handler. In fact, the [`Server`][] object returned by [`createServer`][] is an
[`EventEmitter`][], and what we have here is just shorthand for creating a
`server` object and then adding the listener later.

```javascript
const server = http.createServer();
server.on('request', (request, response) => {
  // the same kind of magic happens here!
});
```

When an HTTP request hits the server, node calls the request handler function
with a few handy objects for dealing with the transaction, `request` and
`response`. We'll get to those shortly.

In order to actually serve requests, the [`listen`][] method needs to be called
on the `server` object. In most cases, all you'll need to pass to `listen` is
the port number you want the server to listen on. There are some other options
too, so consult the [API reference][].

#### Method, URL and Headers

When handling a request, the first thing you'll probably want to do is look at
the method and URL, so that appropriate actions can be taken. Node.js makes this
relatively painless by putting handy properties onto the `request` object.

```javascript
const { method, url } = request;
```

> The `request` object is an instance of [`IncomingMessage`][].

The `method` here will always be a normal HTTP method/verb. The `url` is the
full URL without the server, protocol or port. For a typical URL, this means
everything after and including the third forward slash.

Headers are also not far away. They're in their own object on `request` called
`headers`.

```javascript
const { headers } = request;
const userAgent = headers['user-agent'];
```

It's important to note here that all headers are represented in lower-case only,
regardless of how the client actually sent them. This simplifies the task of
parsing headers for whatever purpose.

If some headers are repeated, then their values are overwritten or joined
together as comma-separated strings, depending on the header. In some cases,
this can be problematic, so [`rawHeaders`][] is also available.

#### Request Body

When receiving a `POST` or `PUT` request, the request body might be important to
your application. Getting at the body data is a little more involved than
accessing request headers. The `request` object that's passed in to a handler
implements the [`ReadableStream`][] interface. This stream can be listened to or
piped elsewhere just like any other stream. We can grab the data right out of
the stream by listening to the stream's `'data'` and `'end'` events.

The chunk emitted in each `'data'` event is a [`Buffer`][]. If you know it's
going to be string data, the best thing to do is collect the data in an array,
then at the `'end'`, concatenate and stringify it.

```javascript
let body = [];
request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(body).toString();
  // at this point, `body` has the entire request body stored in it as a string
});
```

> This may seem a tad tedious, and in many cases, it is. Luckily,
> there are modules like [`concat-stream`][] and [`body`][] on [`npm`][] which can
> help hide away some of this logic. It's important to have a good understanding
> of what's going on before going down that road, and that's why you're here!

#### A Quick Thing About Errors

Since the `request` object is a [`ReadableStream`][], it's also an
[`EventEmitter`][] and behaves like one when an error happens.

An error in the `request` stream presents itself by emitting an `'error'` event
on the stream. **If you don't have a listener for that event, the error will be
*thrown*, which could crash your Node.js program.** You should therefore add an
`'error'` listener on your request streams, even if you just log it and
continue on your way. (Though it's probably best to send some kind of HTTP error
response. More on that later.)

```javascript
request.on('error', (err) => {
  // This prints the error message and stack trace to `stderr`.
  console.error(err.stack);
});
```

There are other ways of [handling these errors][] such as
other abstractions and tools, but always be aware that errors can and do happen,
and you're going to have to deal with them.

#### What We've Got so Far

At this point, we've covered creating a server, and grabbing the method, URL,
headers and body out of requests. When we put that all together, it might look
something like this:

```javascript
const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
}).listen(8080); // Activates this server, listening on port 8080.
```

If we run this example, we'll be able to *receive* requests, but not *respond*
to them. In fact, if you hit this example in a web browser, your request would
time out, as nothing is being sent back to the client.

So far we haven't touched on the `response` object at all, which is an instance
of [`ServerResponse`][], which is a [`WritableStream`][]. It contains many
useful methods for sending data back to the client. We'll cover that next.

#### HTTP Status Code

If you don't bother setting it, the HTTP status code on a response will always
be 200. Of course, not every HTTP response warrants this, and at some point
you'll definitely want to send a different status code. To do that, you can set
the `statusCode` property.

```javascript
response.statusCode = 404; // Tell the client that the resource wasn't found.
```

There are some other shortcuts to this, as we'll see soon.

#### Setting Response Headers

Headers are set through a convenient method called [`setHeader`][].

```javascript
response.setHeader('Content-Type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');
```

When setting the headers on a response, the case is insensitive on their names.
If you set a header repeatedly, the last value you set is the value that gets
sent.

#### Explicitly Sending Header Data

The methods of setting the headers and status code that we've already discussed
assume that you're using "implicit headers". This means you're counting on node
to send the headers for you at the correct time before you start sending body
data.

If you want, you can *explicitly* write the headers to the response stream.
To do this, there's a method called [`writeHead`][], which writes the status
code and the headers to the stream.

```javascript
response.writeHead(200, {
  'Content-Type': 'application/json',
  'X-Powered-By': 'bacon'
});
```

Once you've set the headers (either implicitly or explicitly), you're ready to
start sending response data.

#### Sending Response Body

Since the `response` object is a [`WritableStream`][], writing a response body
out to the client is just a matter of using the usual stream methods.

```javascript
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();
```

The `end` function on streams can also take in some optional data to send as the
last bit of data on the stream, so we can simplify the example above as follows.

```javascript
response.end('<html><body><h1>Hello, World!</h1></body></html>');
```

> It's important to set the status and headers *before* you start
> writing chunks of data to the body. This makes sense, since headers come before
> the body in HTTP responses.

#### Another Quick Thing About Errors

The `response` stream can also emit `'error'` events, and at some point you're
going to have to deal with that as well. All of the advice for `request` stream
errors still applies here.

#### Put It All Together

Now that we've learned about making HTTP responses, let's put it all together.
Building on the earlier example, we're going to make a server that sends back
all of the data that was sent to us by the user. We'll format that data as JSON
using `JSON.stringify`.

```javascript
const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // BEGINNING OF NEW STUFF

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    // Note: the 2 lines above could be replaced with this next one:
    // response.writeHead(200, {'Content-Type': 'application/json'})

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();
    // Note: the 2 lines above could be replaced with this next one:
    // response.end(JSON.stringify(responseBody))

    // END OF NEW STUFF
  });
}).listen(8080);
```

#### Echo Server Example

Let's simplify the previous example to make a simple echo server, which just
sends whatever data is received in the request right back in the response. All
we need to do is grab the data from the request stream and write that data to
the response stream, similar to what we did previously.

```javascript
const http = require('http');

http.createServer((request, response) => {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.end(body);
  });
}).listen(8080);
```

Now let's tweak this. We want to only send an echo under the following
conditions:

* The request method is POST.
* The URL is `/echo`.

In any other case, we want to simply respond with a 404.

```javascript
const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    let body = [];
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      response.end(body);
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
```

> By checking the URL in this way, we're doing a form of "routing".
> Other forms of routing can be as simple as `switch` statements or as complex as
> whole frameworks like [`express`][]. If you're looking for something that does
> routing and nothing else, try [`router`][].

Great! Now let's take a stab at simplifying this. Remember, the `request` object
is a [`ReadableStream`][] and the `response` object is a [`WritableStream`][].
That means we can use [`pipe`][] to direct data from one to the other. That's
exactly what we want for an echo server!

```javascript
const http = require('http');

http.createServer((request, response) => {
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
```

Yay streams!

We're not quite done yet though. As mentioned multiple times in this guide,
errors can and do happen, and we need to deal with them.

To handle errors on the request stream, we'll log the error to `stderr` and send
a 400 status code to indicate a `Bad Request`. In a real-world application,
though, we'd want to inspect the error to figure out what the correct status code
and message would be. As usual with errors, you should consult the
[`Error` documentation][].

On the response, we'll just log the error to `stderr`.

```javascript
const http = require('http');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'POST' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);
```

We've now covered most of the basics of handling HTTP requests. At this point,
you should be able to:

* Instantiate an HTTP server with a request handler function, and have it listen
on a port.
* Get headers, URL, method and body data from `request` objects.
* Make routing decisions based on URL and/or other data in `request` objects.
* Send headers, HTTP status codes and body data via `response` objects.
* Pipe data from `request` objects and to `response` objects.
* Handle stream errors in both the `request` and `response` streams.

From these basics, Node.js HTTP servers for many typical use cases can be
constructed. There are plenty of other things these APIs provide, so be sure to
read through the API docs for [`EventEmitters`][], [`Streams`][], and [`HTTP`][].

[`EventEmitters`]: https://nodejs.org/api/events.html
[`Streams`]: https://nodejs.org/api/stream.html
[`createServer`]: https://nodejs.org/api/http.html#http_http_createserver_requestlistener
[`Server`]: https://nodejs.org/api/http.html#http_class_http_server
[`listen`]: https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback
[API reference]: https://nodejs.org/api/http.html
[`IncomingMessage`]: https://nodejs.org/api/http.html#http_class_http_incomingmessage
[`ReadableStream`]: https://nodejs.org/api/stream.html#stream_class_stream_readable
[`rawHeaders`]: https://nodejs.org/api/http.html#http_message_rawheaders
[`Buffer`]: https://nodejs.org/api/buffer.html
[`concat-stream`]: https://www.npmjs.com/package/concat-stream
[`body`]: https://www.npmjs.com/package/body
[`npm`]: https://www.npmjs.com
[`EventEmitter`]: https://nodejs.org/api/events.html#events_class_eventemitter
[handling these errors]: https://nodejs.org/api/errors.html
[`ServerResponse`]: https://nodejs.org/api/http.html#http_class_http_serverresponse
[`setHeader`]: https://nodejs.org/api/http.html#http_response_setheader_name_value
[`WritableStream`]: https://nodejs.org/api/stream.html#stream_class_stream_writable
[`writeHead`]: https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
[`express`]: https://www.npmjs.com/package/express
[`router`]: https://www.npmjs.com/package/router
[`pipe`]: https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options
[`Error` documentation]: https://nodejs.org/api/errors.html
[`HTTP`]: https://nodejs.org/api/http.html

<p align="center"><a href="#index">back to index<a/></p>

---


### How to make `http requests`?

##### GET


</br>

[http_get.js](/snippets/11_http_requests/http_get.js)

```js
const https = require('https')
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos/1',
  method: 'GET'
}

// when data arrives then 'data' event is emitted by 'res'
// when error occur then 'error' event is emitted by 'req'
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
```

##### POST

</br>

[http_post.js](/snippets/11_http_requests/http_post.js)

```js
const https = require('https')


const obj = {
    "userId":1,
    "id":1,
    "title":"whatever",
    "completed":false
}

const data = JSON.stringify(obj)

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
```

<p align="center"><a href="#index">back to index<a/></p>

---


### How to add Token in request

You write it to the request object like:

```js
    var https = require('https')
    
    var options = {
      "host": "sandbox-api.uber.com",
      "path": "/v1/sandbox/requests/" + req.body.request_id,
      "method": "PUT",
      "headers": { 
        "Authorization" : "Bearer " + req.body.bearer_token,
        "Content-Type" : "application/json",
      }
    }
    
    callback = function(response) {
      var str = ''
      response.on('data', function(chunk){
        str += chunk
      })
    
      response.on('end', function(){
        console.log(str)
      })
    }

    var body = JSON.stringify({
      status: 'accepted'
    });
    https.request(options, callback).end(body);
```

<p align="center"><a href="#index">back to index<a/></p>

---

### File Descriptor

Use `fs.openSync(path,mode)` to return a file descriptor. File descriptor is a reference to an open file.

</br>

[file_descriptor.js](/tree/main/snippets/12_file_descriptor/file_descriptor.js)

```js
const fs = require('fs')

try {
  const fd = fs.openSync('./test.txt', 'w+')
} catch (err) {
  console.error(err)
}
```

##### Modes

- `r+`: read and write mode, file won't be created if don't exist.
- `w+`: read and write mode, file will be created if don't exist. Pointer is placed at the beginning of the file.
- `a`: write mode, file will be created if don't exist. Pointer is placed at the end of the file.
- `a+`: read and write mode, file will be created if don't exist. Pointer is placed at the end of the file.

<p align="center"><a href="#index">back to index<a/></p>

---


### How to get file stats?

</br>

[fs_stat.js](/tree/main/snippets/13_fs_stat/fs_stat.js)

```js
const fs = require('fs')
fs.stat('./test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile()) //true
  console.log(stats.isDirectory()) //false
  console.log(stats.isSymbolicLink()) //false
  console.log(stats.size) //size in bytes
})
```

<p align="center"><a href="#index">back to index<a/></p>

---

### Read and Write files?

</br>

[file_read.js](/tree/main/snippets/15_file_rw/file_read.js)

```js
const fs = require('fs')

fs.readFile('./test.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Read asynchronously: ",data)
})


// OR Synchronous way to read
try {
  const data = fs.readFileSync('./test.txt', 'utf8')
  console.log("Read asynchronously: ",data)
} catch (err) {
  console.error(err)
}
```

</br>

[file_write.js](/tree/main/snippets/15_file_rw/file_write.js)

```js
const fs = require('fs')

const data = 'This is to be written'

// Note: to append use appendFile

// In write there is nothing returned, undefined
fs.writeFile('./test2.txt', data, (err, ret) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Written asynchronously. Returned val: ', ret)
})

// OR Synchronous way to read
try {
  // In write there is nothing returned, undefined
  const ret = fs.writeFileSync('./test3.txt', data)
  console.log('Written asynchronously. Return Val: ', ret)
} catch (err) {
  console.error(err)
}
```

<p align="center"><a href="#index">back to index<a/></p>

---


### What is the use of `file descriptor`?

You'd call `fs.open()` if you want to perform several actions on that file. Methods like `fs.readFile()` are simply shortcuts that also prevent forgetting to close the file. (Especially less obvious cases like try/catch.) But you wouldn't want to constantly reopen and reclose the same file if you're working on it.

> If you look at the [documentation](http://nodejs.org/api/fs.html), the first argument for `fs.read()` says `fd` while the first argument for `fs.readFile()` is filename. The `fd` stands for "file descriptor" which is the object returned by `fs.open()`. The filename is simply a string.

<p align="center"><a href="#index">back to index<a/></p>

---

### How to manipulate folders?

</br>

[list_files.js](/tree/main/snippets/16_folders/list_files.js)

```js
const fs = require('fs')

const folder_path ='/path/to/file/'

// files, directory and non-directory both
// Do not go deep in each folder 
const files_in_current_folder = fs.readdirSync(folder_path)
console.log(files_in_current_folder)
```

- [rename_folder.js](/tree/main/snippets/16_folders/rename_folder.js)

```js
// rename folder in asynchronous way
// no need to give full path of the folder
fs.rename('folder1', 'folder_1', err=>{
    if(err){
        console.log(err)
        return
    }
})


// rename folder in a synchronous wau
try{
fs.renameSync('folder2', 'folder_2')
}
catch(e){
console.log(e)
}
```

</br>

[mkdir_if_not.js](/tree/main/snippets/16_folders/mkdir_if_not.js)

```js
 
const fs = require('fs')

const folderName = 'folder3'

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
} catch (err) {
  console.error(err)
}
```

</br>

[rmdir_if_present.js](/tree/main/snippets/16_folders/rmdir_if_present.js)

```js
const fs = require('fs')
const dir = 'folder3'

// fs.rmdir(dir, {recursive:true},(err) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log(`${dir} is deleted!`);
// });

fs.rm(dir, { recursive: true, force: true }, (err) => {
  if (err) {
    throw err
  } else {
    console.log(`${dir} is deleted!`)
  }
})
```

<p align="center"><a href="#index">back to index<a/></p>

---


### What are streams in Node.js?

Streams are objects that enable you to read data or write data continuously.
There are four types of streams:

- `Readable` – Used for reading operations
- `Writable` − Used for write operations
- `Duplex` − Can be used for both reading and write operations
- `Transform` − A type of duplex stream where the output is computed based on input

Each type of Stream is an `EventEmitter` instance and throws several events at different instance of times.

Example:

- `data` − This event is fired when there is data is available to read.
- `end` − This event is fired when there is no more data to read.
- `error` − This event is fired when there is any error receiving or writing data.
- `finish` − This event is fired when all the data has been flushed to underlying system.

<p align="center"><a href="#index">back to index<a/></p>

---


### `end` vs `finish` events on stream


`end` and `finish` are the same event BUT on different types of Streams.

`stream.Readable` fires ONLY `end` and NEVER `finish`
`stream.Writable` fires ONLY `finish` and NEVER `end`
Source: https://nodejs.org/dist/latest-v5.x/docs/api/stream.html

**Why the different naming of the same event?**

The only reason I could think of is because of duplex streams (stream.Duplex), which implement both stream.Readable and stream.Writable interfaces (https://nodejs.org/dist/latest-v5.x/docs/api/stream.html#stream_class_stream_duplex) are readable and writable stream at the same time.

> To differentiate between end of reading and end of writing on the stream you must have a different event fired. SO, for Duplex streams end is end of reading and finish is end of writing.


<p align="center"><a href="#index">back to index<a/></p>

---

### What are buffers in Node.js?

The `Buffer` class in Node. js is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated **outside** V8. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.

<p align="center"><a href="#index">back to index<a/></p>

---

### `buffer` vs `stream`

A buffer is a temporary memory that a stream takes to hold some data until it is consumed. In a stream, the buffer size is decided by the highWatermark property on the stream instance which is a number denoting the size of the buffer in bytes. A buffer memory in Node by default works on String and Buffer 

> Buffer is chunk of data, stream is chunks of buffers

<p align="center"><a href="#index">back to index<a/></p>

---

### How to do clustering?

</br>

[simple_cluster.js](/tree/main/snippets/19_simple_cluster/simple_cluster.js)

```js
const cluster = require('cluster')

// If there isn't any Master then the first instance
// which require cluster is master by default

if (cluster.isMaster) {

  // two server means that doing the light_task immediately after heavy_task
  // would serve light_task immediately
  // in case of single fork (server) there would be delay in serving
  // light_task immediately after heavy_task 
  cluster.fork()
  cluster.fork()

} else {
  const express = require('express')
  const app = express()

  function cpu_intensive_task(time_to_take) {
    const start = Date.now()
    while (Date.now() - start < time_to_take) {}
  }

  app.get('/heavy_task', (req, res) => {
    cpu_intensive_task(6000)
    res.send('Hey Idiot!!!')
  })

  app.get('/light_task', (req, res) => {
    res.send('Hey Idiot!!!')
  })

  const port = Number.parseInt(process.env.PORT)
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${port}`)
  })
}
```

##### Relation between number of forks and server response time

</br>

[Node.js, increaseing Forks in Cluster won't make server fast!](https://youtu.be/3eAccNV53rI)


##### How to find optimum number of slave instances in clustering
To be

### How to manage Clusters?
To manage clusters seamlessly, use PM2

- [PM2](#pm2)


<p align="center"><a href="#index">back to index<a/></p>

---
---

## Debugging

```console
node inspect index.js
```

To tell interpreter to continue in code

```console
c 

```

To inspect value of variables

```console
repl
```

To exit

```console
exit
```


<p align="center"><a href="#index">back to index<a/></p>

---
---


## Benchmarking

### Apache HTTP server benchmarking tool

#### Ubuntu

> Install

```console
sudo apt-get update && sudo apt-get install apache2-utils 
```

> Usage

```console
<!-- 1000 requests, 500 running concurrently -->
ab -c 50 -n 1000 server/end/point
```

<p align="center"><a href="#index">back to index<a/></p>

---
---


##  Must See

1. [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)
2. [Order of execution of promises](https://stackoverflow.com/questions/36870467/what-is-the-order-of-execution-in-javascript-promises)
3. [When is the thread pool used?](https://stackoverflow.com/questions/22644328/when-is-the-thread-pool-used)
4. [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
5. [Event Loop](https://www.youtube.com/watch?v=P9csgxBgaZ8)
6. [Timers](https://nodejs.org/en/docs/guides/timers-in-node/)

<p align="center"><a href="#index">back to index<a/></p>

---


## Some modules in Node.js



### To Be 

- [Buffers](https://www.freecodecamp.org/news/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8/)
- [Piping](#)
- [Q. How to debug an application in Node.js?]()
- [Q. What is a test pyramid?]()
- [Q. How can you secure your HTTP cookies against XSS attacks?]()
- [Reading and Writin the stream]()
- [Piping and Chaining of Stream]()
- [DNS module]()
- [Name the types of API functions in Node.js?]()
- [How does Node.js handle child threads?]()
- [What is the purpose of using hidden classes in V8?]()
- [How V8 compiles JavaScript code?]()
- [Since node is a single threaded process, how to make use of all CPUs?]()
- [How to kill child processes that spawn their own child processes in Node.js?]()
- [What do you understand by Reactor Pattern in Node.js?]()
- [What is a control flow function? ]()
- [What are the Challenges with Node.js?]()
- [file upload]()
- [Response methods]()
- [microservices architecture]()
- [Q promise]()

<p align="center"><a href="#index">back to index<a/></p>

---
---
## Few packages used with Node.js

### PM2

```console
npm i -g pm2
```

`pm2` configuration

> Set up instances equal to the total number of `logical cores` (physical cores times threads per core)

```console
pm2 start index.js -i 0
```
> Check health of each fork

```console
pm2 list
```

> To get detailed overview of each children (assuming file name was `index.js`)

```console
pm2 show index
```

> View logs dashboard

```console
pm2 monit
```

>  Stop the cluster (assuming file name was `index.js`)

```console
pm2 delete index
```



### To Be

- [express-async-handler]()
- [crypto]()
- [Helmet]()
- [shrinkwrap]()
- [multer]()
- [body-parser]()
- [cookie-parser]()
- [morgan]()
- [pm2]()
- [serve-favicon]()
- [cors]()
- [dotenv]()
- [fs-extra]()
- [JWT]()
- [Memcached]()
- [axios]()

<p align="center"><a href="#index">back to index<a/></p>

---
---


# Should also know
- How node will handle 1000 requests from a client, each request ask the server to retrieve and send a google web page?
- Thousand clients simultaneously made a request, how node will handle it?
- Architecture not event driven but async and vice versa
- Why we need `setImmediate`?
- What is `process.nextTick` is called within I/O cycle?
- What is Tick?
- Package Dependency Tree and semver interaction with it
- `-` vs `--` in CLA
- How and why `heap`?
- How Node.js starts?
- The strategy used by libuv to achieve asynchronous I/O is not always a thread pool!!
- How JIT works in Node?
- Use cases of `async-await` vs those of `promises`, how they differ?
- Transform stream
- Fork vs Spawn vs Cluster vs Child Process
