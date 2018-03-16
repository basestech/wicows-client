import React from 'react';

const Selector = ({options})=>{
    return <select>
                {
                    options.map((val)=>{
                        return <option value={val.value} onchanged= {val.changed} >{val.text}</option>;
                    })
                }  
           </select>
}

export default Selector;