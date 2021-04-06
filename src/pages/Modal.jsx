import './Modal.css';
import TextField from '../components/TextField';
import data from '../datasource.json';
import { useState } from 'react';

const Modal = ({ handleClose, show, children, onSelected }) => {
  const [criteria, setCriteria] = useState();
  const [inquiry, setInquiry] = useState('userId');
  const [pages, setPages] = useState(1);
  const [userDetail, setUserDetail] = useState(data.userDetail);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const onFilter = () => {
    if (!criteria) {
      setUserDetail(data.userDetail);
    } else {
      const resultData = data.userDetail.filter(val => {
        return val[inquiry] === criteria;
      });

      setUserDetail(resultData);
    }
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <h4>Select User</h4>
        <h4>Enter Search Criteria</h4>
        <div className="row">
          <div className="col-md-12">
            <table className="table-data">
              <tbody>
                <tr>
                  <td width="150">Inquiry By</td>
                  <td>
                    <div className="radio-custom">
                      <input
                        onChange={() => setInquiry('userId')}
                        type="radio"
                        checked={inquiry === 'userId'}
                        name="inquiryBy"
                        value="userId" 
                      />
                      <label 
                        onClick={() => {
                          setInquiry('userId');
                          setCriteria('');
                        }}
                        htmlFor="userId"> User ID</label>
                    </div>
                   
                    <div className="radio-custom">
                      <input
                        onChange={() => { 
                          setInquiry('userName');
                          setCriteria('');
                        }}
                        type="radio"
                        checked={inquiry === 'userName'}
                        name="inquiryBy"
                        value="userName"
                      />

                      <label
                        onClick={() => setInquiry('userName')}
                      htmlFor="userName"> User Name</label>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Enter Criteria</td>
                  <td>
                    <TextField
                      type="text"
                      className="custom-input"
                      value={criteria}
                      onChange={(val) => setCriteria(val)}
                      keyFilter={inquiry === 'userId' ? "alphaNumeric" : 'alphabet'}
                      maxLength="30"/>
                    &nbsp;
                    <button onClick={onFilter}>Go</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />

            <table border="1" className="table-data">
                <thead>
                  <tr>
                    <th colSpan="2">User Listing</th>
                    <th>Page 1 Of 37</th>
                  </tr>
                  <tr>
                    <th>No</th>
                    <th>User ID</th>
                    <th>User Name</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    userDetail.map((val, key) => {
                      return(
                        <tr key={key}>
                          <td>{key + 1}</td>
                          <td>
                            <div className="underlined" onClick={() => {
                              handleClose();
                              onSelected(val.userName);
                            }}>
                              {val.userId}
                            </div>
                          </td>
                          <td>{val.userName}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td align="right" colSpan="3">
                      Page
                      &nbsp;
                      <TextField
                        type="text"
                        className="custom-input small-width-input"
                        value={pages}
                        onChange={(val) => setPages(val)}
                        keyFilter="numeric"
                        maxLength="30"
                      />
                      &nbsp;
                      <button onClick={() => {}} type="button">Go</button>
                      &nbsp;
                      <button onClick={() => {}} type="button">Next</button>
                      &nbsp;
                      <button type="button" onClick={() => handleClose()}>Close</button>
                    </td>
                  </tr>
                </tfoot>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;