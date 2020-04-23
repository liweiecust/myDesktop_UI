import React from "react"

class Tom extends React.Component{

    constructor(property){
        super();
        this.state={friend:property.friend};
    }
    render(){
        return (
         <div>Tom & {this.state.friend} are friends</div>)
    }

}

export default Tom; 