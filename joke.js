fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then (response => response.json())

// generate a random joke upon loading the page
.then (data => {
    console.log(data);
    console.log(data.any)
    title.textContent = "Joke Of The Day"
    if (data.type == "single") {
        joke.textContent = data.joke
    } else {
        joke.textContent = data.setup + "... " + data.delivery
    }
})

christmas.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/christmas?safe-mode")
    .then (response => response.json())

    .then (data => {
        console.log("christmas")
        console.log(data);
        console.log(data.any)
        title.textContent = "A random Christmas joke"
    if (data.type == "single") {
        joke.textContent = data.joke
    } else {
        joke.textContent = data.setup + "... " + data.delivery
    }
    })
})

spooky.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")
    .then (response => response.json())

    .then (data => {
        console.log("spooky")
        console.log(data);
        console.log(data.any)
        title.textContent = "A random spooky joke"
    if (data.type == "single") {
        joke.textContent = data.joke
    } else {
        joke.textContent = data.setup + "... " + data.delivery
    }
    })
})

programming.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
    .then (response => response.json())

    .then (data => {
        console.log("programming")
        console.log(data);
        console.log(data.any)
        title.textContent = "A random programming joke"
    if (data.type == "single") {
        joke.textContent = data.joke
    } else {
        joke.textContent = data.setup + "... " + data.delivery
    }
    })
})

pun.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")
    .then (response => response.json())

    .then (data => {
        console.log("pun")
        console.log(data);
        console.log(data.any)
        title.textContent = "A random pun"
    if (data.type == "single") {
        joke.textContent = data.joke
    } else {
        joke.textContent = data.setup + "... " + data.delivery
    }
    })
})

miscellaneous.addEventListener ("click", function(){
    fetch("https://v2.jokeapi.dev/joke/miscellaneous?safe-mode")
    .then (response => response.json())

    .then (data => {
        console.log("miscellaneous")
        console.log(data);
        console.log(data.any)
        title.textContent = "A random miscellaneous joke"
    if (data.type == "single") {
        joke.textContent = data.joke
    } else {
        joke.textContent = data.setup + "... " + data.delivery
    }
    })
})