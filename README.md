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

