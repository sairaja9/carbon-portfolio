import React from 'react';
import axios from 'axios';

export default function Portfolio() {
    let members = "";
    const fetchData = async () => {
        try {
            const response = await axios.get('/members');
            members = response.data;
            console.log(response.data);
            console.log(members);
        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
            else {
                console.log(`Error: ${err.message}`);
            }
        }
    }

    const putData = async(budgetVal, toleranceVal, targetVal) => {
        let budgetMsg = "";
        let toleranceMsg = "";
        let targetMsg = "";
        try{
            const budgetResponse = await axios.put('/editBudget', {'budget' : budgetVal});
            budgetMsg = budgetResponse.data.updatedAt;
            console.log(budgetMsg);

            const toleranceResponse = await axios.put('/editTolerance', {'tolerance': toleranceVal});
            toleranceMsg = toleranceResponse.data.updatedAt;
            console.log(toleranceMsg);

            const targetResponse = await axios.put('/editTarget', {'target': targetVal});
            targetMsg = targetResponse.data.updatedAt;
            console.log(budgetMsg);
        }
        catch (err){
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
            else {
                console.log(`Error: ${err.message}`);
            }
        }
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        let budgetElementVal = event.target.budgetField.value;
        let toleranceElementVal = event.target.toleranceField.value;
        let targetElementVal = event.target.targetField.value;
        putData(budgetElementVal, toleranceElementVal, targetElementVal);
    }

    return (
        <section className='portfolio'>
            <div className='form-container'>
                <div className='form-inner-container'>
                    <form className='form-group-1' onSubmit={handleSubmit}>
                        <label>
                            What is your budget (in US Dollars)?
                            <input
                                name="budgetField"
                                type="number"
                                min="0"/>
                        </label>
                        <label>
                            Choose your risk tolerance level:
                            <select name="toleranceField">
                                <option defaultValue="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </label>
                        <label>
                            Enter your Carbon Reduction Target (in tons of CO2):
                            <input
                                name="targetField"
                                type="number"
                                min="0"/>
                        </label>
                        <button className="submit-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <h1>{members}</h1>
        </section>
    )
}
