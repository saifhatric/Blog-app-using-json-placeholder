import Post from "./app/features/post/Post";
import AddPost from "./app/features/post/AddPost";

function App() {


  return (
    <div className="App">
      <h2>Redux App</h2>
      <AddPost />
      <Post />
    </div>
  )
}

export default App
