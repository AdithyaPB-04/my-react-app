//here we are discussing about props , propTypes and also the defaultProps

import PropTypes from 'prop-types'; 

function Student(props){ //props is a javascript object (properties)
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student:{props.isStudent?"Yes":"No"}</p>
        </div>
    )
}
Student.protoTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.boolean
}     //proptypes validate whether the value is correct dataType

//defaultProps

Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent:false
}
export default Student;