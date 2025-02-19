import React from "react";
import blogData from "../data/blog";
import Header from "./Home";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
