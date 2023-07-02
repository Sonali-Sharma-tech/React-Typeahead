import React, { useState } from "react"
import "./styles.css"

const Typeahead = () => {
    const [items, setItems] = useState(["hi", "one", "two"]);

    const handleChange = (e) => {
        let value = e.target.value;
        value ? setItems(prev => {
            return prev.filter(item => item.toLowerCase().includes(value.toLowerCase()))
        }) : setItems(["hello", "Hi", "Greetings"]) ; 
    }
    return (
        <>
            <div className="align">
                <h4>Search any user</h4>
                <div>
                    <input onChange={handleChange} />
                    <div>
                        {
                            items.length > 0 && items.map(item => {
                                return <h4 key={`key-${item}`}>{item}</h4>
                            })
                        }
                    </div>
                </div>

            </div>

        </>
    )
}

export default Typeahead;