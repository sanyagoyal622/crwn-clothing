import React from 'react';

import './form-input.styles.scss';
const FormInput=({handleChange,label,...otherProps}) => (
<div className='group'>
    <input className='form-input' handleChange={handleChange} {...otherProps}/>
    {label ?(
        //if there exists a label
        <label className={`${otherProps.value.length ? 'shrink' : '' }form-input-label`} 
        >
            {label}
            </label>
    ) : null
    //null it we have not passed label in the input tag
    
    }
    
    

</div>
);

export default FormInput;