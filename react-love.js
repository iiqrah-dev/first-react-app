function Header(){
    return(
        <header>
                <nav>
                     <img src="react-logo.png" width="40px"></img>

                     <ul className="nav-items">
                         <li>Pricing</li>
                         <li>About</li>
                         <li>Contact</li>
                     </ul>
                </nav>
            </header>
    )
}

function Content(){
    return (
         <>
         
         <h1>Reasons I want to learn React:</h1>

         <ol>
                <li>Refactor Buildspace Wave Portal code, that thing is a mess right now!</li>
                <li>I want to make React Dapps with well structured code that I fully understand!</li>
                <li>Get a job as a web3 developer, or even start my own web3 company! </li>
        </ol>

         </>
    )
}


function Footer(){
    return (


        <footer>
                &#169;  2022 iiqrahCreations. All rights reserved.
            </footer>

    )
}

function PageContent(){
    return(
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}


ReactDOM.render(<PageContent/>, document.getElementById("main-container"))