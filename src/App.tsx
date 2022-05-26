import React from 'react';
import Head from './component/Head';
import Footer from './component/Footer';
import { useState } from 'react'
import TodoList from './component/Todolist';

function App() {


  return (
    <div>

      {/* header section */}
        <Head main = " Fill your favourite NFT address down below" firstname = "" lastname = "" id ={32313131231}></Head>

      {/* todo section */}
       <TodoList></TodoList>

      {/* footer section */}
       <Footer></Footer>
    </div>
  );
}

export default App;