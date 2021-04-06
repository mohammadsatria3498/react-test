import { useState } from 'react';
import TextField from '../components/TextField';
import './Transaction.css';
import Modal from './Modal';
import data from '../datasource.json';

const Transaction = () => {
  const [totalNotes, setTotalNotes] = useState(0);
  const [totalCoins, setTotalCoins] = useState(0);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [userSelected, setUserSelected] = useState('...');
  const [notes, setNotes] = useState([
    {
      amount: 100000,
      amount2: 0,
      result: 0,
    },
    {
      amount: 50000,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 20000,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 10000,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 5000,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 2000,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 1000,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 0,
      amount2: 0,
      result: 0,
      isAmountInput: true,
    },
    {
      amount: 0,
      amount2: 0,
      result: 0,
      isAmountInput: true,
    },
    {
      amount: 0,
      amount2: 0,
      result: 0,
      isAmountInput: true,
    },
  ]);
  const [coins, setCoins] = useState([
    {
      amount: 1000,
      amount2: 0,
      result: 0,
    },
    {
      amount: 500,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 200,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 100,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 50,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 25,
      amount2: 0,
      result: 0,
      
    },
    {
      amount: 0,
      amount2: 0,
      result: 0,
      isAmountInput: true,
    },
  ]);

  const currency = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const calculate = (value, data, type) => {
    let newArray = [...notes];
    newArray[data.key] = {
      amount: type === 1 ? Number(value) : data.amount ,
      amount2: type === 2 ? Number(value) : data.amount2,
      result: data.amount * value,
      isAmountInput: data.isAmountInput || false,
    };
    setNotes(newArray);
    const total = newArray.reduce(function(prev, cur) {
      return prev + cur.result;
    }, 0);
    setTotalNotes(total);
  }

  const calculateCoins = (value, data, type) => {
    let newArray = [...coins];
    newArray[data.key] = {
      amount: type === 1 ? Number(value) : data.amount ,
      amount2: type === 2 ? Number(value) : data.amount2,
      result: data.amount * value,
      isAmountInput: data.isAmountInput || false,
    };
    setCoins(newArray);
    const total = newArray.reduce(function(prev, cur) {
      return prev + cur.result;
    }, 0);
    setTotalCoins(total);
  }


  return(
    <>
      <ul className="breadcrumb">
        <li>Home</li>
        <li className="active">Transaction</li>
      </ul>
      <Modal show={isOpenPopup} onSelected={(val) => setUserSelected(val)} handleClose={() => setIsOpenPopup(false)} />
      <div className="panel-body">
        <div className="row">
          <div className="col-md-8">
            <table className="table-data">
              <tbody>
                <tr>
                  <th width="150">Currency Code</th>
                  <td>:</td>
                  <td>
                    <select disabled={true} name="currencyCode">
                      {
                        data.currencyType.map(val => {
                          return (
                            <option selected={val.isDefault || false} value={val.value}>{val.label}</option>
                          )
                        })
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>Transfer Type</th>
                  <td>:</td>
                  <td>
                    <select disabled={true} name="transferType">

                      {
                        data.transferType.map(val => {
                          return (
                            <option selected={val.isDefault || false} value={val.value}>{val.label}</option>
                          )
                        })
                      }
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>User Name *</th>
                  <td>:</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => setIsOpenPopup(true)}>{userSelected}</button>
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => setUserSelected('...')}>Clear</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <table className="table-data">
              <tbody>
                <tr>
                  <th colSpan={5}>Notes</th>
                </tr>
                {
                    notes.map((val, key) => {
                      const data = {...val, key};
                      const amount2 = <TextField type="text" value={val.amount2} onChange={(e) => calculate(e, data, 2)} keyFilter="numeric" maxLength="15" />;
                      const amount = <TextField type="text" value={val.amount} onChange={(e) => calculate(e, data, 1)} keyFilter="numeric" maxLength="15" />;
                      return (
                        <tr key={key}>
                          <td>
                          {
                            val.isAmountInput ? amount  : currency(val.amount)
                          }
                          
                          </td>
                          <td width="30">X</td>
                          <td width="150">{amount2}</td>
                          <td width="40">=</td>
                          <td>
                            <TextField type="text" value={currency(val.result)} keyFilter="numeric" disabled maxLength="15"/>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
          </div>

          <div className="col-md-6">
            <table className="table-data">
              <tbody>
                <tr>
                  <th colSpan={5}>Coins</th>
                </tr>
                {
                    coins.map((val, key) => {
                      const data = {...val, key};
                      const amount2 = <TextField type="text" value={val.amount2} onChange={(e) => calculateCoins(e, data, 2)} keyFilter="numeric" maxLength="15" />;
                      const amount = <TextField type="text" value={val.amount} keyFilter="numeric" onChange={(e) => calculateCoins(e, data, 1)} maxLength="15" />;
                      return (
                        <tr key={key}>
                          <td>
                          {
                            val.isAmountInput ? amount  : currency(val.amount)
                          }
                          
                          </td>
                          <td width="30">X</td>
                          <td width="150">{amount2}</td>
                          <td width="40">=</td>
                          <td>
                            <TextField type="text" value={currency(val.result)} keyFilter="numeric" disabled maxLength="15"/>
                          </td>
                        </tr>
                      )
                    })
                  }
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <table className="table-data">
              <tr>
                <td>Total Amount</td>
                <td>:</td>
                <td width="200">
                  <TextField
                    type="text"
                    value={currency(totalNotes + totalCoins)}
                    keyFilter="numeric"
                    disabled
                    maxLength="15"
                  />
                </td>
              </tr>
            </table>
          </div>
          
          <div className="col-md-6 right">
            <button className="btn btn-success" onClick={() => setIsOpenPopup(true)}>OK</button>
            &nbsp;&nbsp;
            <button className="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction;
