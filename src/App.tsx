import React from 'react';
import Head from './component/Head';
import Footer from './component/Footer';
import { useState } from 'react'
import TodoList from './component/Todolist';

function App() {


  return (
    <div>

      {/* header section */}
        <Head main = "Minimal Todo List" firstname = "Poosana" lastname = "Thassanavisut" id = {620612161}></Head>

      {/* todo section */}
       <TodoList></TodoList>

      {/* footer section */}
       <Footer></Footer>
    </div>
  );
}

export default App;