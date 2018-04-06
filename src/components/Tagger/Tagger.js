import  React  from 'react';

const Tagger = ({onChange, tags, selected}) =>{
    return tags.map((val) =>{
        const changeHandler = (e)=>{
            onChange(val.id);
        }
        return <React.Fragment key = {val.id}>
                    <input 
                    id = {val.id} 
                    type = "checkbox" 
                    onChange = {changeHandler}
                    defaultChecked = {selected.includes(val.id) ? 'checked' : null}
                    />
                    <label htmlFor= {val.id}>{val.name}</label>
                </React.Fragment>
            
    });
}

export default Tagger;