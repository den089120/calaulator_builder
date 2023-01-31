import React, {FC} from 'react';

interface labelProps {
    label: string,
    placeHolder: string,
    typeInput: string,
    changeInput: (e:any)=> void;
}

const MyInput: FC<labelProps> = ({label, typeInput, placeHolder, changeInput}) => {
    return (
        <div className="input-group">
            <span className="input-group-text" id="basic-addon1">{label}</span>
            <input type={typeInput}
                   className="form-control"
                   placeholder={placeHolder}
                   onInput={changeInput}
                   aria-label="Username"
                   aria-describedby="basic-addon1"/>
        </div>
    );
};

export default MyInput;