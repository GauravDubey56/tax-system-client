import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { server, headers } from '../constants'
function CreateTaxDue() {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = {
            panId: data.get('panId'),
            basicPay: data.get('basicPay'),
            hra: data.get('hra'),
            lta: data.get('lta'),
            investment: data.get('investement'),
            insurance: data.get('insurance'),
            interest: data.get('interest'),
            otherIncome: data.get('otherIncome'),
            nps: data.get('nps'),
            stdDeduction: data.get('stdDeduction'),
            dueDate: data.get('dueDate')
        }

        Object.keys(payload).forEach(key => {
            if (payload[key] === null || payload[key] === "") {
                delete payload[key];
            }
        });
        console.log(payload)
        const res = await axios.post(server + '/tax', payload, { headers })
        console.log(res);
        if (res.status === 200) {
            navigate('../home')
        }
    }
    const [pan, setPan] = useState('')
    const verifyPan = async (event) => {
        event.preventDefault();
        console.log(pan);
        const res = await axios.get(server + '/info/verifyPan?panId=' + pan, { headers });
        if (res.status === 200 && res.data['data']) {
            const payer = {
                name: res.data['data'].name,
                age: res.data['data'].age,
                state: res.data['data'].state
            }
            console.log(payer)
            const message = `User verified
            name: ${payer.name}
            age: ${payer.age}
            state: ${payer.state}`
            alert(message);
        }
    }
    const handleChange = (e) => {
        console.log(pan)
        setPan(e.target.value)
    }
    return (
        <div className='container'>
            <form className='align-middle' onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="panId" className="col-sm-2 col-form-label">PAN</label>
                    <div className='input-group col-sm-2'>
                        <div className="input-group-prepend">
                            <button className="btn btn-success" type="button" onClick={verifyPan}>Verify</button>
                        </div>
                        <input type="text" className="form-control" name="panId" id="panId" placeholder="" aria-label="" aria-describedby="basic-addon1" onChange={handleChange} />
                    </div>

                </div>

                <div className="form-group row">
                    <label htmlFor="basicPay" className="col-sm-2 col-form-label">Basic pay</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="basicPay" name="basicPay" />
                    </div>
                    <label htmlFor="hra" className="col-sm-2 col-form-label">HRA</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="hra" name="hra" />
                    </div>
                    <label htmlFor="lta" className="col-sm-2 col-form-label">LTA</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="lta" name="lta" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="insurance" className="col-sm-2 col-form-label">Insurance Premiums</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="insurance" name="insurance" />
                    </div>
                    <label htmlFor="interest" className="col-sm-2 col-form-label">Interest</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="interest" name="interest" />
                    </div>
                    <label htmlFor="investment" className="col-sm-2 col-form-label">Investment</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="investment" name="investment" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="stdDeduction" className="col-sm-2 col-form-label">Standard Deductions</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="stdDeductions" name="stdDeductions" />
                    </div>
                    <label htmlFor="nps" className="col-sm-2 col-form-label">NPS</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="nps" name="nps" />
                    </div>
                    <label htmlFor="otherIncome" className="col-sm-2 col-form-label">Income from other sources</label>
                    <div className="col-sm-2">
                        <input type="number" className="form-control" id="otherIncome" name="otherIncome" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="dueDate" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-2">
                        <input type="Date" className="form-control" id="dueDate" name="dueDate" />
                    </div>
                </div>
                <div className="form-group row">

                    <div className="col-sm-10 offset-sm-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTaxDue