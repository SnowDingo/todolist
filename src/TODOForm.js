import React from 'react';
import { useState } from 'react';
function TODOForm() {
    var [Header, setHeader] = useState("")
    var [Subtitle, setSubtitle] = useState("")
    var [Context, setContext] = useState("")

    const handleSubtitileChange = event => {
        setSubtitle(event.target.value)
    } 
    return ( 
        <div className='Form'>
            <form>
                <h1>Create a todo lisr</h1>
                <div className='ActualForm'>
                    <h4>Note's title</h4>
                    <input placeholder='write title of your note' value={Header}></input>
                    <h4>Note's subtitle</h4>
                    <input placeholder='please enter the subtitle' value={Subtitle} onChange={handleSubtitileChange}></input>
                    <h4>Context</h4>
                    <textarea placeholder='please enter the context' value={Context} ></textarea>
                    <button className='button' onSubmit={createTodo}>Create a note!</button>
                </div>
                <p>{Subtitle}</p>
            </form>
        </div>
     );

     function createTodo(header,subtitle,context){
        return
     }
}

export default TODOForm;