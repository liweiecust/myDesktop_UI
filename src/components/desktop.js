import React from 'react'
import Clock from './Clock'
import Files from './filesList'
import proTypes from 'prop-types'
import BackWard from './backBackward'
import axios from 'axios'
import config from '../config'
import contextMenu from './contextMenu'

var os=require('os')
var path=require('path')

class Desktop extends React.Component{
    constructor(props){
        super(props)
        this.state={filesList:[[],[]]}
        this.getFiles()
        console.log("current dir:"+this.state.filesList);
    }

    getFiles(){
        
        console.log(config.serverUrl);
        new Promise(
           
            (resolve,reject)=>axios.get("http://172.17.13.177:5000"+"/nav",
            {timeout:10000})
            .then(
                response=>{
                    this.setState({filesList:response.data})
                }
            )
            .catch(err=>{
                throw err;
            }
                
            )
        )
    
    }
   
    render(){
        return(
          <div>
              <h3>Desktop files:</h3>
              <BackWard path={this.getParent(this.props.currentfolder)}/>
              <Files files={this.state.filesList}/>
              <contextMenu/>
              <Clock/>
          </div>  
        );
    };

    getParent=function name(params) {
        return params.split("\\")[-1]
    }
   
}
Desktop.defaultProps={
    currentfolder:""//os.homedir()

}
Desktop.proTypes={
    files:proTypes.array.isRequired
}
export default Desktop;

var testState=[
    ["C:\\Users\\liwe\\Desktop\\Temp","C:\\Users\\liwe\\Pictures\\Saved Pictures"],
    ["C:\\Users\\liwe\\Desktop\\test.txt"]
];