import Posts from './Components/Posts'
import Friends from './Components/Friends'
import Applications from './Components/Applications';



function ParentMain() {

    return <div className="main-section">
        <section className="row">
            <Applications />
            <Posts />
            <Friends />
        </section>
    </div>
}

export default ParentMain