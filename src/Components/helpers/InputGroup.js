import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

function InputGroup(props) 
{
    const {name,value,onChange,type,label,errors} = props;
    console.log(errors)
    return (
        <div className="form-group">
            <label htmlFor={name}>{label} : *</label>
            <input
                name= {name}
                value= {value}
                onChange= {onChange} 
                type={type} 
                className={classnames("form-control",{"is-invalid": errors})}
            />
            <div className="invalid-feedback">
                {errors}
            </div>
        </div>
    )
}

InputGroup.propsTypes={
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    type: PropTypes.string
}
export default InputGroup