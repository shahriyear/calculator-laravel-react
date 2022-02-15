import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Calculator = () => {

    const init = {
        firstNumber: 0,
        secondNumber: 0,
        operator: '',
    }
    const [numbers, setNumbers] = useState(init);
    const [result, setResult] = useState(0);

    const handelOnChange = (event) => {
        const { name, value } = event.target;
        setNumbers(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setResult(0)
        axios.post('/calculate', numbers)
            .then((response) => {
                setResult(response.data.result);
            })
            .catch((error) => {
                setResult(error.response.data.result);
            });
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Calculator</div>

                        <div className="card-body">
                            <form onSubmit={handleOnSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">First Number</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="firstNumber"
                                            name="firstNumber"
                                            value={numbers.firstNumber}
                                            onChange={handelOnChange}
                                            required
                                            placeholder="First Number"
                                        />
                                    </div>
                                </div>


                                <div className="form-group row mt-3">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Second Number</label>
                                    <div className="col-sm-10">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="secondNumber"
                                            name="secondNumber"
                                            value={numbers.secondNumber}
                                            onChange={handelOnChange}
                                            placeholder="Second Number"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group row mt-3">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Operator</label>
                                    <div className="col-sm-10">
                                        <select onChange={handelOnChange} value={numbers.operator} name='operator' id='operator' className="form-control" required>
                                            <option value="">Select One</option>
                                            <option value="add">👽</option>
                                            <option value="sub">💀</option>
                                            <option value="mul">👻</option>
                                            <option value="div">😱</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group row mt-3">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Result</label>
                                    <div className="col-sm-10">
                                        {result}
                                    </div>
                                </div>

                                <div className="form-group row mt-3">
                                    <div className="col-sm-10 offset-md-2">
                                        <input className="btn btn-primary" type="submit" value="Submit" />
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;

if (document.getElementById('app')) {
    ReactDOM.render(<Calculator />, document.getElementById('app'));
}
