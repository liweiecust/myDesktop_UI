import React from "react"
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
      setInterval(() => {
          this.setState({date:new Date()})
          
      }, 2);
    }
    render(){
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}
export default Clock;