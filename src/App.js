import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";
function App() {
  return (
    <div className="App">
      <Header />
        <div style={{display: "flex", justifyContent: "center" }}>
      {/* Post side menu */}
      <div style={{display: "flex", width: "60%"}}>
        {/* Post Container */}
        <div style={{ width: "70%" }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/* Post Container End*/}
        <div style={{width: "30%"}}>
          <SideMenu/>
        </div>
      </div>
      {/* Post side menu */}
      </div>
    </div>
  );
}

export default App;
