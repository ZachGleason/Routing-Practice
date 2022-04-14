import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const Number = (props) => {
    const {num} = useParams();
    return (
    <p className='number'> The Number is: {num}</p>
    );
};
export default Number;