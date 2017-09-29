import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const renderNameField = props => (
  <TextField 
    hintText={props.label}
    fullWidth={true}
    name={props.name}
    {...props.input}
  />
)

const renderAddressField = props => (
  <TextField 
    hintText={props.label}
    fullWidth={true}
    {...props.input}
  />
)

const renderDescriptionField = props => (
  <TextField 
    hintText={props.label}
    multiLine={true}
    fullWidth={true}
    {...props.input}
  />
)

const renderMediaField = props => (
  <TextField 
    hintText={props.label}
    fullWidth={true}
    {...props.input}
  />
)

const LocationForm = props => {
  return (
    <form onSubmit={props.handleSubmit(values => props.handleNewLocationSubmit(values))}>
      <div>
        <Field type="text" name="name" label="Place/Event Name" component={renderNameField}/>
        <Field type="text" name="address" label="Street Address (Optional)" component={renderAddressField}/>
        <Field type="text" name="location" label="Place/Event Description" component={renderDescriptionField}/>
        <Field type="text" name="media" label="Link to Image/Video (Optional)" component={renderMediaField}/>
        <RaisedButton type="submit" label="Submit" primary={true} />
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'LocationForm',  // a unique identifier for this form
})(LocationForm)

