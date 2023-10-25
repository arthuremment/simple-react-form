import React from "react";

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor:""
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
    }

    return (
        <form onChange={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <div>
                <input
                    type="checkbox"
                    id="isFriendly"
                    onChange={handleChange}
                    name="isFriendly"
                    checked={formData.isFriendly}
                />
                <label htmlFor="isFriendly">Are you friendly ?</label>
            </div>
            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <div>
                    <input
                        type="radio"
                        name="employment"
                        id="unemployed"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="employment"
                        id="part-time"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="employment"
                        id="full-time"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                </div>
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color ?</label>
            <br />
            <select 
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
            </select>
            <br />
            <br />

            <button>Submit</button>
        </form>
    )
}