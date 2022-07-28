import React from "react";
import "./Modal.css";
import { Form } from "react-bootstrap";

function Modal({ setOpenModal }) {
  return (
    <div>
      <div style={{padding: 3}}className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
          <div>

            {/* case name */}
            <div className="modalcontainerText">
              {/* <label htmlFor="title">Case Name</label> */}
              <input
                type="text"
                placeholder="Case Name" 
                className="form-control"
                id="title"
                name="title"
                selectionColor='blue'
                
              />
            </div>

            {/* case_id */}
            {/* <label style={{alignText: 'center', alignContent: 'center',justifyContent: 'center' }}htmlFor="title">Case Id</label> */}
            <div style={{marginTop: 10}} className="modalcontainerText">
              
              <input
                type="text"
                placeholder="Case ID" 
                className="form-control"
                id="title"
                name="title"
              />
            </div>

            {/* description */}
            <Form.Group style ={{ marginTop: 10}}className="modalcontainerText" controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Description</Form.Label> */}
              <Form.Control as="textarea" placeholder="Description"rows={8}/>
            </Form.Group>

            <div>
              <Form.Label></Form.Label>
            </div>

            {/* staff_member */}
            <Form.Group style={{ marginBottom: 10}} className="modalcontainerText" controlId="formBasicPassword">
              {/* <Form.Label>Attorney / Staff Member</Form.Label> */}
              <Form.Control type="text" placeholder="Staff member"/>
            </Form.Group>

            {/* next_steps */}
            <Form.Group className="modalcontainerText" controlId="exampleForm.ControlTextarea1">
              {/* <Form.Label>Next Steps</Form.Label> */}
              <Form.Control as="textarea" placeholder="Next Steps"  rows={8}/>
            </Form.Group>

            {/* documents */}
            <Form.Group  style={{marginTop: 10}}className="modalcontainerText" controlId="formBasicPassword">
              {/* <Form.Label>Document Type</Form.Label> */}
              <Form.Control type="text" placeholder="Documents" />
            </Form.Group>

            {/* lead_counsel 
            <Form.Label as="legend" column sm={8}>
              Lead Plaintiff Counsel?
            </Form.Label>
            <Form.Check value={this.state.lead_counsel} onChange={this.onChangeLeadCounsel}
              type="radio"
              label="Yes"
              name="formHorizontalRadios"
              value="Yes"
            />
            <Form.Check value={this.state.lead_counsel} onChange={this.onChangeLeadCounsel}
              type="radio"
              label="No"
              name="formHorizontalRadios"
              value="No"
            />*/}

            {/* status */}
            {/* <Form.Label>Status</Form.Label> */}
            <Form.Select style={{ marginTop: 10, marginLeft: 1}}className="modalcontainerText" aria-label="Default select example">
              <option>Select Status...</option>
              <option value="Active">Active</option>
              <option value="Archive">Archive</option>
              <option value="Prospective">Prospective</option>
            </Form.Select>

            {/* deadline */}
            <div>
                <div className="row">
                    <div className="col-md-4">
                    <Form.Label style={{fontWeight:'bold'}}>Select Deadline</Form.Label>
                        <Form.Group className="modalcontainerText"   placeholder="deadline"controlId="deadline">
                            <Form.Control type="date" name="deadline" placeholder="deadline" />
                        </Form.Group>
                    </div>
                </div>
            </div>

            <button className="btn btn-success">
              Submit
            </button>
            <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          </div>
      
      </div>
      </div>
   
  );
}

export default Modal;