import {useState} from "react";


const useInput = (inputValidateFn) => {
    const [inputValue, setInputValue] = useState('');
    const [inputIsValid, setInputIsValid] = useState(null);

    const onInputChange = event => {
        setInputValue(event.target.value);
        setInputIsValid(
            inputValidateFn(event.target.value)
        );
    };
    const onInputBlur = event => {
        setInputValue(event.target.value);
        setInputIsValid(
            inputValidateFn(event.target.value)
        );
    };


    return {
        inputValue,
        inputIsValid,
        onInputChange,
        onInputBlur,
    }
};

export default useInput;