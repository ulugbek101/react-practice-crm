const Button = props => {
    return <button type="submit" {...props}>
        {props.children}
    </button>
};

export default Button;