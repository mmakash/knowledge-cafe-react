import React from 'react';

const Answer = () => {
    return (
        <div className='p-5 bg-slate-950 text-white'>
            <h1>Q.Difference between props and state?</h1>
            <p>Props are used to pass data from a parent component to a child component, while state is used to manage data within a component. Props are immutable and cannot be changed within a component, while state is mutable and can be updated using the setState function</p>
            <h1>Q.how useState works in react?</h1>
            <p>The React useState Hook allows you to have state variables in functional components. You pass the initial state to this function, and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
            <h1>Q.what can useEffect do without loading data?</h1>
            <p>It allows you to perform side effects in your functional components. without loading data it can do things like Subscribing to External Events, Updating the DOM,Setting up Timers or Intervals: etc</p>
            <h1>Q.How React Works?</h1>
            <p>React relies on a virtual DOM, which is a copy of the actual DOM. React's virtual DOM is immediately reloaded to reflect this new change whenever there is a change in the data state. After which, React compares the virtual DOM to the actual DOM to figure out what exactly has changed</p>
        </div>
    );
};

export default Answer;