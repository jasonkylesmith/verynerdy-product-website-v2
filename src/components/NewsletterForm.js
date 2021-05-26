import React, {Component} from 'react';

import { Form, FormGroup, Col, FormFeedback, Input, Label, Button } from 'reactstrap';

class NewsletterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            agree: false,
            touched: {
                name: false,
                email: false
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(name, email){
        const errors = {
            name: '',
            email: ''
        }

        if(this.state.touched.name){
            if(name.length < 2) {
                errors.name = "Name must be at least 2 characters.";
            }
        }

        if(this.state.touched.email && !email.includes('@')){
            errors.email = "Email should contain an @ symbol."
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert("Thanks for trying, but this form is not yet functional");
        console.log("Thanks for trying, but this form is not yet functional");
        event.preventDefault();
    }


    render(){
        const errors = this.validate(this.state.name, this.state.email);
        console.log(this.state.agree);

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                    <Col sm={12}>
                        <Input type="name" name="name" id="name" placeholder="Enter First Name" 
                            value={this.state.name}
                            invalid={errors.name}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.name}</FormFeedback>    
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Input type="email" name="email" id="email" placeholder="Enter Email"
                            value={this.state.email}
                            invalid={errors.email}
                            onBlur={this.handleBlur("email")}
                            onChange={this.handleInputChange} />
                        <FormFeedback>{errors.email}</FormFeedback> 
                    </Col>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"
                            name="agree"
                            checked={this.state.agree}
                            onChange={this.handleInputChange} /> {' I agree to receive periodic emails from The Very Nerdy Clothing Company.'}
                    </Label>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{ size: 3, offset: 9}} xs={{ size: 4, offset: 8}}>
                        <Button color="primary" size="sm" type="submit"
                            onClick={() => {
                                this.props.toggle();
                            }}>
                            Let's Go!
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
        );
    }




}

export default NewsletterForm;