import React from 'react'
import ReactDOM from 'react-dom'
import ContextMenu from './contextMenu'
import Tom from '../Tom'
class ClickMe extends React.Component{
    constructor(){
        super();
        this.Sya=this.Sya.bind(this);
        this.state={showPop:false}
    }
    Sya(e){
        alert("hi");
        e.preventDefault();
        this.setState({
            showPop:true
        })
       
    }
    render(){
        return<div>
            <input onContextMenu={this.Sya} type='button' title="Click ME"/>
            {this.state.showPop?(
            <div style={{
                position:"absolute",
                top:50,
                lef:100,
                minWidth:100,
                background:"#f4f4f4",
                zIndex:10,

                textAlign:"center",
                border: "3px solid #73AD21"}}>
                hi
                </div>):<div></div>}
            </div>
    }
    
}
export default ClickMe;