import React, { useState } from "react";
import { CloseButton, Form } from "react-bootstrap";
import "./Calculator.css";

const Calculator = () => {
  const arr1 = ["1 Day", "7 Days", "30 Days", "1 Year", "5 Year"];
  const arr2 = ["Tier 1", "Tier 2", "Tier 3", "Tier 4", "Tier 5"];
  const [activeDate, setActiveDate] = useState(0);
  const [activeTier, setActiveTier] = useState(0);

  return (
    <>
      <div className='mx-5 p-3'>
        <div className="card" >
          <div className="card-body">
            {/* <div className="containers"> */}
            <div className="top my-4">
              <span>Calculator</span>
              <CloseButton className="float-end" />
            </div>
            <div className="float-end my-2 d-flex ">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
              <b>
                <p className="mx-2 nd">Cake</p>
              </b>
              <b>
                <Form.Check type="switch" id="custom-switch" className="fc" checked />
              </b>
              <b>
                <p className="nd">USD</p>
              </b>
            </div>
            <input defaultValue='2.10000 CAKE' className='inputText form-control' type='text' />
            <br />
            <br />
            <div className="row">
              <div className="usebalance1 d-flex">
                <button className="btns px-3 mx-2">USE BALANCE</button>
                <button className="btns1 px-3 mx-2">$1000</button>
                <button className="btns1 px-3 mx-2">$100</button>


                <div className="usebalance2">
                  <b>
                    <p className="" style={{textAlign: "end"}}>$20.82</p>
                  </b>
                </div>
              </div>
            </div>
            <h6 className="my-4">Timeframe</h6>
            <div className="fivebuttons d-flex">
              {arr1.map((item, index) => {
                return (
                  <button
                    className={
                      (index === activeDate ? "fbutton1" : "fbutton2") +
                      "  col px-1 mx-1"
                    }
                    onClick={() => setActiveDate(index)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="d-flex">
              <h6 className="my-4">Enable Accelerated APY</h6>

              <Form.Check type="switch" id="custom-switch" className="fcc my-4" checked />
            </div>
            <b>
              <p className="selecttier">Select Tier</p>
            </b>
            <div className="fbuttons">
              {arr2.map((item, index) => {
                return (
                  <button
                    className={
                      (index === activeTier ? "fbuttons2" : "fbuttons1") +
                      "  col px-1 mx-1"
                    }
                    onClick={() => setActiveTier(index)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <b>
              <p className="float-end my-3 roi">Roi at Current Rates</p>
            </b>







            <input defaultValue='100.0 USD' className='inputText form-control' style={{
              marginTop: '-10px'
            }} type='text' />

            <p className='texts' >~ 3 CAKE + 10 DON</p>

            <div className="d-flex appcan">

              <button className="apply">Apply</button>
              <button className="cancel">Cancel</button>
            </div>


            <p className="hidedetails">Hide Details v</p>
            <div className='row' style={{ fontWeight: '650' }}>
              <p className='col'>APY</p>
              <p className='col' style={{ color: '#F1C42C', textAlign: "end" }}>63.34%</p>
            </div>
            <div className="calculated">
              <ul>
                <li className='text'>Calculated based on current rates</li>
                <li className='text'>All figures are estimates provided for your convience only, and by no means represent guarantedd returns.</li>
              </ul>
            </div>
            {/* <input type="text" /> */}


            {/* <div className="don float-right">
              <p className="">~ 3 Cake + 10 DON</p>
            </div> */}

          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Calculator;
