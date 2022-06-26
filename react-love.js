function PageContent(){
    return(

        <div>

            <header>

                <nav>
                     <img src="react-logo.png" width="40px"></img>

                </nav>

                <h1>Reasons I want to learn React:</h1>
                
            </header>

            <ol>
                <li>Refactor Buildspace Wave Portal code, that thing is a mess right now!</li>
                <li>I want to make React Dapps with well structured code that I fully understand!</li>
                <li>Get a job as a web3 developer, or even start my own web3 company! </li>
            </ol>


            <footer>
                &#169;  2022 iiqrahCreations. All rights reserved.
            </footer>

        </div>

    )
}


ReactDOM.render(<PageContent/>, document.getElementById("main-container"))