import axios from "axios"
import React from "react"
import Item from "./components/Item"
class Desktop extends React.Component{
    
    constructor(){
        super();
        this.state={files:[[],[]]};
    
    }

  componentWillMount(){
    new Promise(
        (resolve,reject)=>{
        axios.get("http://127.0.0.1:5000",
        {
            timeout:1000000
        }
        )
        .then(
            response=>{
            this.setState({files:response.data});
            console.log("response.data:");
         
            console.log(this.state.files);
           
            })
        .catch(err=>{
                    throw err;
        })

    } 

    )
  }
 
    render(){
        return(

            <table>
                <tbody>
              
            {this.state.files[0].map(file=><Item type="folder" name={file} />)}
            {this.state.files[1].map(file=><Item type="file" name={file}/>)}
        
                </tbody>
            </table>
        )
        }
}
export default Desktop;
/*  */
