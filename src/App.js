import React from 'react';
import Title from  "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import {useState} from "react";
import './App.css';

function App() {
  // stateの宣言
  const [id,setId] = useState("");
  const [name,setName] = useState([]);
  const [author,setAuthor] = useState([]);

  // OpenDB APIへのアクセス・情報取得
  const getData = (e) => {
    e.preventDefault();
    const apiURL = process.env.REACT_APP_API_URL
    axios.get(apiURL + `?pet=${id}`)
    .then(res => {
      setName(JSON.parse(res.data.body).name);
      setAuthor(JSON.parse(res.data.body).author);
    console.log(res.data.body);
  })
  };

  return (
    <div className="App">
      <Header />
      <Title />
      <Form setId={setId} getData={getData}/>
      <Results name={name} author={author}/>
      <Footer />
    </div>
  );
}

export default App;
