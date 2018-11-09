import React from 'react';
import './Instructor.css';

const Instructor = (props) => {
    const {
        name: {
            first: firstname,
            last: lastname
        },
        dob,
        email,
        bio,
        linkedin   
    } = props;

    return (
        <div className="instructors-wrapper">
            <div>{firstname} {lastname} <span style={{color: "grey", fontSize: 10}}>({dob})</span></div>
            <div>Email: <a className="underline_me" href={`mailto:${email}`}>{email}</a> | <a href={linkedin}>LinkedIn</a></div>
            <div className="bio">{bio}</div>
            <br />
        </div>
    );
};

export default Instructor;