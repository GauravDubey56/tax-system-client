import { useEffect, useState } from 'react'
import axios from 'axios';
import { server } from '../constants';
import '../App.css'
function TaxDues() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const headers = {
            'secret_token' : localStorage.getItem('token')
        }
        const fetchTaxDues = async () => {
            const res = await axios.get(server + "/payer/getDue", {
                headers
            });
            if (res.status === 200) {
                console.log(res.data['data'])
                setData(res.data['data']);
            }
        };
        fetchTaxDues();
    }, []);
    const markTaxPaid = async (id) => {
        const headers = {
            'secret_token' : localStorage.getItem('token')
        }
        const res = await axios.post(server + '/payer/pay',{taxId: id},{ 
        headers})
        console.log(res);
        window.location.reload(true)
    }
    const list = data.map((item) => {
        const disb = item.status === 'PAID' ? "btn btn-primary disabled" : "btn btn-primary"
        return (
            <tr key={item._id}>
                <td>{item.taxIncome}</td>
                <td>{item.taxAmt}</td>
                <td>{item.status}</td>
                <td><button className={disb} onClick={() => {markTaxPaid(item._id)}}>Pay</button></td>
            </tr>
        )
    })
    console.log(data)
    return (
        <div>
            <table className='table'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Taxable income</th>
                        <th>Tax Amount</th>
                        <th>Status</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}

export default TaxDues