import React from 'react'
import { useParams } from 'react-router-dom';
import './App.css';

const Color = () => {
    const  {comment, color, backgroundColor} = useParams()
    return (
    <div>
        <p className='coloring' style={
                    color? 

                    {color: color, backgroundColor: backgroundColor}
                    :null
                }>
                    This is a word: {comment}
                </p>
    </div>
);
};

export default Color