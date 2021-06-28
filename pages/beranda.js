import Jumbotron from '../component/jumbotron'
import Colom from '../component/colom'
import Article from '../component/article'

export default function Home() {
  return (
    <div>
        <Jumbotron />

        <div className="container marketing">

          <Colom/>
          
          <Article />
          
        </div>
    </div>
  )
}
