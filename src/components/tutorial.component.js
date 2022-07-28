import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Modal } from 'react-bootstrap'

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeCaseName = this.onChangeCaseName.bind(this);
    this.onChangeCaseId = this.onChangeCaseId.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStaffMemmber = this.onChangeStaffMember.bind(this);
    this.onChangeNextSteps = this.onChangeNextSteps.bind(this);
    this.onChangeDocuments = this.onChangeDocuments.bind(this);
    this.onChangeLeadCounsel = this.onChangeLeadCounsel.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDeadline = this.onChangeDeadline.bind(this);
    
    //this will be done through backend
    this.onChangeLastUpdated = this.onChangeLastUpdated.bind(this);
    this.getTutorial = this.getTutorial.bind(this); //change to lawsuit
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this); //change to lawsuit
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
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
        //updated: Date().toLocaleString(), this will be done through backend
        published: false,
        showHide: false
      },
      message: ""
    };
  }

  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide })
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id);
  }

  onChangeCaseName(e) {
    const case_name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          case_name: case_name
        }
      };
    });
  }

  onChangeCaseId(e) {
    const case_id = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          case_id: case_id
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }

  onChangeStaffMember(e) {
    const staff_member = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        staff_member: staff_member
      }
    }));
  }

  onChangeNextSteps(e) {
    const next_steps = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        next_steps: next_steps
      }
    }));
  }

  onChangeDocuments(e) {
    const documents = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        documents: documents
      }
    }));
  }

  onChangeLeadCounsel(e) {
    const lead_counsel = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        lead_counsel: lead_counsel
      }
    }));
  }

  onChangeStatus(e) {
    const status = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        status: status
      }
    }));
  }

  onChangeDeadline(e) {
    const deadline = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        deadline: deadline
      }
    }));
  }

  onChangeLastUpdated(e) {
    const last_updated = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        last_updated: last_updated
      }
    }));
  }

  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      case_name: this.state.currentTutorial.case_name,
      case_id: this.state.currentTutorial.case_id,
      description: this.state.currentTutorial.description,
      staff_member: this.state.currentTutorial.staff_member,
      next_steps: this.state.currentTutorial.next_steps,
      documents: this.state.currentTutorial.documents,
      lead_counsel: this.state.currentTutorial.lead_counsel,
      status: this.state.currentTutorial.status,
      deadline: this.state.currentTutorial.deadline,
      last_updated: this.state.currentTutorial.last_updated,
      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateTutorial() {
	this.state.currentTutorial.updated = Date().toLocaleString()
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The lawsuit was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }


  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  confirmDeleteTutorial() {
    this.deleteTutorial();
    this.handleModalShowHide();
  }

  render() {
    const { currentTutorial } = this.state;

    return (

      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Lawsuit</h4>
            {/* Copy exactly from add-tutorial.component.js @ 1337 (except make sure to change currentTutorial.value)*/}
            
            {/* case name */}
            <div className="form-group">
              <label htmlFor="title">Case Name</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={currentTutorial.case_name}
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
                value={currentTutorial.case_id}
                onChange={this.onChangeCaseId}
                name="title"
              />
            </div>

            {/* description */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={8} value={currentTutorial.description} onChange={this.onChangeDescription} />
            </Form.Group>

            <div>
              <Form.Label></Form.Label>
            </div>

            {/* staff_member */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Attorney / Staff Member</Form.Label>
              <Form.Control type="text" placeholder="" value={currentTutorial.staff_member} onChange={this.onChangeStaffMember} />
            </Form.Group>

            {/* next_steps */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Next Steps</Form.Label>
              <Form.Control as="textarea" rows={8} value={currentTutorial.next_steps} onChange={this.onChangeNextSteps} />
            </Form.Group>

            {/* documents */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Document Type</Form.Label>
              <Form.Control type="text" placeholder="" value={currentTutorial.documents} onChange={this.onChangeDocuments} />
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
            <Form.Select aria-label="Default select example" value={currentTutorial.status} onChange={this.onChangeStatus}>
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
                            <Form.Control type="date" name="deadline" placeholder="deadline" value={currentTutorial.deadline} onChange={this.onChangeDeadline}/>
                        </Form.Group>
                    </div>
                </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Document Type</Form.Label>
              <Form.Control type="text" placeholder="" value={currentTutorial.documents} onChange={this.onChangeDocuments} />
            </Form.Group>
            {/* End of copy from add-tutorial.component.js @ 1337 */}

            <Button variant="primary" style={{ backgroundColor: '#6E260E', color: '#FFFFFF' }} onClick={() => this.handleModalShowHide()}>
              Delete
            </Button>

            <Modal show={this.state.showHide}>
              <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                <Modal.Title>Confirm Delete</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure you want to delete this lawsuit?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                  Cancel
                </Button>
                <Button variant="primary" style={{ backgroundColor: '#6E260E', color: '#FFFFFF' }} onClick={() => this.confirmDeleteTutorial()}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>

            <Button
              type="submit"
              onClick={this.updateTutorial}
            >
              Update
            </Button>


            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Click to select a lawsuit.</p>
          </div>
        )}
      </div>
    );
  }
}
