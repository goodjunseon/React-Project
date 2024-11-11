import React from 'react';
import './Login.css';
export default function Contact() {
    return (
    <div className='mainBlock'>
        <aside className="aside"><h1>this is aside</h1></aside>
        <body className='body'>
        <form name='fo' method='get' className='formblock'>
            <label><div className='divId'>ID:</div><input type="text" size={15}
                value={""}></input>
            </label>
           <label for="pass">PassWord:
            <input id="pass" type='password' size={15}
                value={""}></input> 
            <input type='submit' value={"Login"}></input>
                </label>
            
        </form>
        </body>
    </div>

);
}