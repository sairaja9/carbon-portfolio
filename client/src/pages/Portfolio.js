import React, { useState } from 'react';
import ReactModalImage from "react-modal-image";

function Portfolio() {
    const prefix = "/graphs/";
    const [quantity, setQuantity] = useState("1");
    const [budget, setBudget] = useState("1");
    const [risk, setRisk] = useState("1");
    const [viz, setViz] = useState("1");
    const [filename, setFilename] = useState(prefix + "1111.png");

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent form submission and page reload
        setFilename(prefix + quantity + budget + risk + viz + ".png");
        console.log(filename);
    }

    const handleVizChange = (value) => {
        setViz(value);
        setFilename(prefix + quantity + budget + risk + value + ".png");
    }

    return (
        <section className='portfolio'>
            <div className='form-container'>
                <div className='top-container'>
                    <form className='form-group-1' onSubmit={handleSubmit}>
                        <label>
                            How many assets do you wish to purchase?
                            <select name="quantityField" onChange={(event) => { setQuantity(event.target.value) }}>
                                <option value="1">1,000</option>
                                <option value="2">10,000</option>
                                <option value="3">100,000</option>
                            </select>
                        </label>
                        <label>
                            Choose your budget range (in U.S. Dollars):
                            <select name="budgetField" onChange={(event) => { setBudget(event.target.value) }}>
                                <option value="1">1 Million</option>
                                <option value="2">10 Million</option>
                                <option value="3">100 Million</option>
                            </select>
                        </label>
                        <label>
                            Choose a risk level:
                            <select name="riskField" onChange={(event) => { setRisk(event.target.value) }}>
                                <option value="1">Low</option>
                                <option value="2">Medium</option>
                                <option value="3">High</option>
                            </select>
                        </label>
                        <button className="submit-button" type="submit">Generate Graphs</button>
                    </form>
                    <div className='graph-container'>
                        <div>
                            <ReactModalImage
                                small={filename}
                                large={filename}
                                alt="graph"
                                className="graph-img"
                            />
                            <br />
                            <p style={{textAlign:"center"}}>Click to Expand</p>
                        </div>
                    </div>
                </div>
                <div className='viz-selector'>
                    <h1 className='viz-selector-title'>Choose A Visual</h1>
                    <button className='viz-type' type="button" value="1" onClick={() => handleVizChange("1")}>Project</button>
                    <button className='viz-type' type="button" value="2" onClick={() => handleVizChange("2")}>Type</button>
                    <button className='viz-type' type="button" value="3" onClick={() => handleVizChange("3")}>Vintage</button>
                    <button className='viz-type' type="button" value="4" onClick={() => handleVizChange("4")}>Grade</button>
                    <button className='viz-type' type="button" value="5" onClick={() => handleVizChange("5")}>Location</button>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;