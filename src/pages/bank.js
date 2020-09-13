import React from 'react'
import {Dropdown} from 'react-bootstrap'
function bank() {
    return (
        <div>
             <div>
                      <h6>Bank account details</h6>
                      <dl>
                        <dt>Bank</dt>
                        <Dropdown style={{marginTop:'3rem'}}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Select Bank
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="https://retail.onlinesbi.com/retail/login.htm">State Bank Of India</Dropdown.Item>
                              <Dropdown.Item href="https://www.iobnet.co.in/ibanking/login.do">Indian Oversea Bank</Dropdown.Item>
                              <Dropdown.Item href="https://candi.canarabank.in/omnichannel">Canara Bank</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                      </dl>
                    </div>
       
        </div>
    )
}

export default bank
