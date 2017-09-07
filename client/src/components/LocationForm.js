import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';


const renderNameField = props => (
  <TextField 
    hintText={props.label}
    fullWidth={true}
    {...props}
  />
)

const renderDescriptionField = props => (
  <TextField 
    hintText={props.label}
    multiLine={true}
    fullWidth={true}
    {...props}
  />
)

const renderMediaField = props => (
  <TextField 
    hintText={props.label}
    fullWidth={true}
    {...props}
  />
)

const LocationForm = props => {
  return (
    <form>
      <div>
        <Field label="Place/Event Name" component={renderNameField}/>
        <Field label="Place/Event Description" component={renderDescriptionField}/>
        <Field label="Link to Image/Video (Optional)" component={renderMediaField}/>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'LocationForm',  // a unique identifier for this form
})(LocationForm)

