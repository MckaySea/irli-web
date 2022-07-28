import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeCaseName = this.onChangeCaseName.bind(this);
    this.onChangeCaseId = this.onChangeCaseId.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStaffMember = this.onChangeStaffMember.bind(this);
    this.onChangeNextSteps = this.onChangeNextSteps.bind(this);
    this.onChangeDocuments = this.onChangeDocuments.bind(this);
    this.onChangeLeadCounsel = this.onChangeLeadCounsel.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    this.onChangeLastUpdated = this.onChangeLastUpdated(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      case_name: "",
      case_id: "",
      description: "",
      staff_member: "",
      next_steps: "",
      documents: "",
      lead_counsel: "",
      status: "",
      deadline: "",
      last_updated: Date().toLocaleString(),
      published: false,
      submitted: false
    };
  }

  onChangeCaseName(e) {
    this.setState({
      case_name: e.target.value
    });
  }

  onChangeCaseId(e) {
    this.setState({
      case_id: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeStaffMember(e) {
    this.setState({
      staff_member: e.target.value
    });
  }

  onChangeNextSteps(e) {
    this.setState({
      next_steps: e.target.value
    });
  }

  onChangeDocuments(e) {
    this.setState({
      documents: e.target.value
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }

  onChangeLeadCounsel(e) {
    this.setState({
      lead_counsel: e.target.value
    });
  }

  onChangeDeadline(e) {
    this.setState({
      deadline: e.target.value
    });
  }

  onChangeLastUpdated(e) {
    this.setState({
      last_updated: Date().toLocaleString()
    });
  }

  saveTutorial() {
    var data = {
      case_name: this.state.case_name,
      case_id: this.state.case_id,
      description: this.state.description,
      staff_member: this.state.staff_member,
      next_steps: this.state.next_steps,
      documents: this.state.documents,
      lead_counsel: this.state.lead_counsel,
      status: this.state.status,
      deadline: this.state.deadline,
      last_updated: this.state.last_updated
    };

    console.log('type (added): ', this.state.type);

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          case_name: response.data.case_name,
          case_id: response.data.case_id,
          description: response.data.description,
          staff_member: response.data.staff_member,
          next_steps: response.data.next_steps,
          documents: response.data.documents,
          lead_counsel: response.data.lead_counsel,
          status: response.data.status,
          deadline: response.data.deadline,
          last_updated: Date().toLocaleString(),
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      case_name: "",
      case_id: "",
      description: "",
      staff_member: "",
      next_steps: "",
      documents: "",
      lead_counsel: "",
      status: "",
      deadline: "",
      last_updated: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>

            {/* case name */}
            <div className="form-group">
              <label htmlFor="title">Case Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.case_name}
                onChange={this.onChangeCaseName}
                name="title"
              />
            </div>

            {/* case_id */}
            <div className="form-group">
              <label htmlFor="title">Case Id</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.case_id}
                onChange={this.onChangeCaseId}
                name="title"
              />
            </div>

            {/* description */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={8} value={this.state.description} onChange={this.onChangeDescription} />
            </Form.Group>

            <div>
              <Form.Label></Form.Label>
            </div>

            {/* staff_member */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Attorney / Staff Member</Form.Label>
              <Form.Control type="text" placeholder="" value={this.state.staff_member} onChange={this.onChangeStaffMember} />
            </Form.Group>

            {/* next_steps */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Next Steps</Form.Label>
              <Form.Control as="textarea" rows={8} value={this.state.next_steps} onChange={this.onChangeNextSteps} />
            </Form.Group>

            {/* documents */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Document Type</Form.Label>
              <Form.Control type="text" placeholder="" value={this.state.doc} onChange={this.onChangeDoc} />
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
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Default select example" value={this.state.status} onChange={this.onChangeStatus}>
              <option>Select...</option>
              <option value="Active">Active</option>
              <option value="Archive">Archive</option>
              <option value="Prospective">Prospective</option>
            </Form.Select>

            {/* deadline */}
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="deadline">
                            <Form.Label>Select Deadline</Form.Label>
                            <Form.Control type="date" name="deadline" placeholder="deadline" value={this.state.deadline} onChange={this.onChangeDeadline}/>
                        </Form.Group>
                    </div>
                </div>
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
