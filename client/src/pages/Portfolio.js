import React from 'react';

export default function Portfolio() {
    let filename = "";
    let quantity, budget, risk, viz = "1";
    let handleChange = (event) => {
        quantity = event.target.quantityField.value;
        budget = event.target.budgetField.value;
        risk = event.target.riskField.value;
        viz = event.target.value;
        filename = "" + quantity + budget + risk + viz;
    }
    return (
        <section className='portfolio'>
            <div className='form-container'>
                <div className='top-container'>
                    <form className='form-group-1' onChange={handleChange}>
                        <label>
                            How many assets do you wish to purchase?
                            <select name="quantityField">
                                <option defaultValue="1">1,000</option>
                                <option value="2">10,000</option>
                                <option value="3">100,000</option>
                            </select>
                        </label>
                        <label>
                            Choose your budget range (in U.S. Dollars):
                            <select name="budgetField">
                                <option defaultValue="1">1 Million</option>
                                <option value="2">10 Million</option>
                                <option value="3">100 Million</option>
                            </select>
                        </label>
                        <label>
                            Choose a risk level:
                            <select name="riskField">
                                <option defaultValue="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select>
                        </label>
                        <button className="submit-button" type="submit">Generate Graphs</button>
                    </form>
                    <div className='graph-container'>
                        <image src={filename} alt="graph"/>
                    </div>
                </div>
                <form className='viz-selector' onChange={handleChange}>
                    <h1 className='viz-selector-title'>Choose A Visual</h1>
                    <button className='viz-type' value="1">Project</button>
                    <button className='viz-type' value="2">Type</button>
                    <button className='viz-type' value="3">Vintage</button>
                    <button className='viz-type' value="4">Grade</button>
                    <button className='viz-type' value="5">Location</button>
                </form>
            </div>
        </section>
    )
}
