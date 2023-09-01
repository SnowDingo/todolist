import React, { useState, useEffect } from 'react';

import "./App.css"

function Todolist() {
    return (
      <div className="TODOLIST">
        <body>
            <div className='container'>
                <h1>React roadmap</h1>
                <h2>I need to work</h2>
                <article className='todo'>
                    <p>Add todo jsx</p>
                    <p>Create a future to add the todo list</p>
                    <p>Make it so you can delete it</p>
                </article>
            </div>
        </body>
      </div>
    );
  }
  
  
export default Todolist;