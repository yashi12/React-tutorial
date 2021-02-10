import logo from './logo.svg';
import './App.css';
import Greet1 from "./components/Greet1";
import Welcome from "./components/Welcome";
import Greet from "./components/Greet";
import Test from "./components/Test";
import Message from "./components/Message";
import Counter from "./components/Counter";

const item = {
    img: "https://m.media-amazon.com/images/I/61nWWVcL3AL._AC_UY327_FMwebp_QL65_.jpg",
    title: "This is book",
    author: "this is author"
}

const Book = (props) => {
    console.log(props);
    const {img, title, author, children} = props;
    return (
        <article>
            <Greet1 />
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <h4>{author}</h4>
            <section>{children}</section>
        </article>
    )
}

const App = () => {
    return (
        <div className="App">
            <Counter />

            {/*<Message>   </Message>*/}

            {/*<Book img={item.img} title={item.title} author={item.author}>*/}
            {/*    <p>hello</p>*/}
            {/*</Book>*/}

            {/*<Greet name={"yashi"} age={"23"}><button>action</button></Greet>*/}
            {/*<Greet name={"sam"} age ="45"/>*/}
            {/*<Greet name={"anshu"} age={"56"}/>*/}
            {/*<Welcome name={"yashi"} age={"23"}/>*/}
            {/*<Welcome  name={"sam"} age ="45"/>*/}
            {/*<Welcome name={"anshu"} age={"56"}/>*/}
        </div>
    );
}

export default App;
