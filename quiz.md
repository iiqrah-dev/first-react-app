1. Why do we need to `import React from "react"` in our files?

My answer: Because we want to use ReactDOM to render our elements and that is only accessible using React? 

Scrimba answer: React is what defines JSX


2. If I were to console.log(page) in index.js, what would show up?

My answer: object.OBJECT

Scrimba answer: A JavaScript object. React elements that describe what React should
eventually add to the real DOM for us.


3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

My answer: It is returning two HTML elements, we gotta wrap it in a single parent div

Scrimba answer: We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?

My answer: We just tell them what we want, and they figure out hwo to achiev it instead of us telling it each stop on hwo to achive teh result.

Scrimba answer: Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?

My answer: Sort of like building blocks of lego, where we use smaller components to get a bigger and powerful picture? 

Scrimba answer: We have small pieces that we can put together to make something
larger/greater than the individual pieces.