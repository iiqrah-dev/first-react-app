import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"


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