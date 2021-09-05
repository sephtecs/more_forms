import userEvent from "@testing-library/user-event";
import React, {useState} from "react";

const ValidationForm = () => {
    const [state, setState] = useState ({
        firstName: { value: "", error: ""},
        lastName: {value: "", error: ""},
        email: {value: "", error: ""},
        password: {value: "", error: ""},
        confirmPass: {value: "", error: ""}
    });

    const formChange = e => {
        const { name: key, value } = e.target
        setState ({
            ...state, 
            [key]: { 
                value: value, 
                error: validate (key, value)
            }
        })
    }

    const validate = (key, value) => {
        if(key  === "firstName"){
            return value.length < 2 ? "First Name must be at least 2 characters long" : "";
        } else if(key === "lastName"){
            return value.length < 2 ? "Last Name must be at least 2 characters in length" : "";
        } else if(key === "email"){
            return value.length < 5 ? "Email must be at least 5 characters long" : "";
        } else if(key === "password"){
            return value.length < 8 ? "Password must be at least 8 characters long" : "";
        } else if(key === "confirmPass"){
            return value.length
        }
    }

    return (
        <div>
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" onChange={formChange}/>
            {
                state.firstName.error ? <p>{state.firstName.error}</p> : ""
            }
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" onChange={formChange}/>
            {
                state.lastName.error ? <p>{state.lastName.error}</p> : ""
            }
            <label for="email">Email:</label>
            <input type="text" name="email" onChange={formChange}/>
            {
                state.email.error ? <p>{state.email.error}</p> : ""
            }
            <label for="password">Password:</label>
            <input type="password" name="password" onChange={formChange}/>
            {
                state.password.error ? <p>{state.password.error}</p> : ""
            }
            <label for="password">Confirm Password:</label>
            <input type="password" name="password" onChange={formChange}/>
            {
                state.confirmPass.error ? <p>{state.confirmPass.error}</p> : ""
            }
        </div>
    )
}



export default ValidationForm

//Question 1

// const Form = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
// }

//Question 2

// setting key value pair shortcut in const