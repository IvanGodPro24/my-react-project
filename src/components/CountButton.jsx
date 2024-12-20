import { useState } from "react"

const CountButton = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return <button onClick={handleClick}>My Count: { count }</button>
}

export default CountButton