import React, { useEffect, useState } from "react";

const Button = (props) => {
    
    const [click,setClick] = useState(0)
    useEffect(() => {
        document.title = `you click ${click}`
    })
    console.log(click)
    return(
        <a onClick={()=> setClick(click +1)}>{props.text} {click}</a>
    )
}

// Убедитесь, что defaultProps объявлен ПРАВИЛЬНО
Button.defaultProps = {
    text: "knopka"
}

export default Button;