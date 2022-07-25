import React from 'react';


class MyComponent extends React.Component {
    constructor(props){
        super(props);
        console.log('Component Created!');
    }
    render() {
        return <p className='test'>Hello,{this.props.name}!</p>;
    }
}


export default MyComponent;


