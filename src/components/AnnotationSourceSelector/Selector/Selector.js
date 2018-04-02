import React from 'react';

const Selector = ({options})=>{
    return <select>
                {   options ? 
                    options.map((val)=>{
                        return <option value={val.value} onchanged= {val.changed} >{val.text}</option>;
                    })
                    :
                    <option>No source for select</option>
                }  
           </select>
}

export default Selector;