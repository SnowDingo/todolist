import React, { useState, useEffect } from 'react';

import "./App.css"

function Todolist(heading,subTitle,mainContent) {
    return (
      <div className="TODOLIST">
        <body>
            <div className='container'>
                <h1>{heading}</h1>
                <h2>{subTitle}</h2>
                <article className='todo'>
                    <p>{mainContent}</p>
                </article>
            </div>
        </body>
      </div>
    );
  }
  
  
export default Todolist;