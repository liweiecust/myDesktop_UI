import React from "react"

class Tom extends React.Component{

    constructor(property){
        super(property);
        //this.state={friend:property.friend};
    }
    render(){
        return (
         <div>Tom & {this.props.friend} are friends</div>)
    }

}

export default Tom; 