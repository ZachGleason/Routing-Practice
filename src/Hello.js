import React from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const Hello = (props) => {
    const {word} = useParams();
    return (
    <p className='word'>  The Word is: {word}</p>
    );
};

export default Hello;