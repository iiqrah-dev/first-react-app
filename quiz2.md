Quiz!

1. What is a React component?

My answer: Basically a function that holds a component of your website, and you use multiple of these components to build your app? 

Scrimba answer: A function that returns React elements. And React elemenst are JSX objects. 


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

My answer: camelCase instead PascalCase

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

My answer: First argument of ReactDOM.render should be <Header /> instead

