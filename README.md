# Asynchronuous JavaScript Topics
- Callback Functions
- Event Loop
- Promises
- Async Await
- Web APIs (DOM, console, setTimeout, fetch)
- Callback/Message/Task queue
- Microtask Queue
- Mutation Observer
- Starvation of callback queue



# Promises
The Promise object represents the eventual completion (success or failure) of an asynchronous operation and its resulting value.

Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

```sh
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

// Callback style
createAudioFileAsync(audioSettings, successCallback, failureCallback);

// Promise style
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

# Is javascript a statically typed or a dynamically typed language?

JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time.

![alt text](https://assets.interviewbit.com/assets/skill_interview_questions/javascript/static_vs_dynamic_typing-f961917369ccdfc7214abe8ef5bc2033217df59eb115ea7b75310cf94543941d.png.gz)

Since javascript is a loosely(dynamically) typed language, variables in JS are not associated with any type. A variable can hold the value of any data type.
For example, a variable which is assigned a number type can be converted to a string type:

```sh
var a = 23;
var a = "Hello World!";
````
