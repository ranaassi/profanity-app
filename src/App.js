import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Form from './components/Form'
import Profanity from './components/Profanity'
class App extends Component {

	state = {
		result: undefined,
		email: undefined,
		error: undefined
	}
	checkProfanity = async (e) => {
		e.preventDefault(); 
		const email_Text = e.target.elements.emailText.value;
		const email = e.target.elements.email.value;
		const api_call = await fetch('http://www.wdylike.appspot.com/?q='+email_Text);
		const data = await api_call.json();
		console.log(data);
		if(data){
			this.setState({   //there is a profanity word
				result:'true'
			});
		}else{
			this.setState({ //there is not profanity word
				result: 'false',
			})
		}
		this.setState({
			email :email,
			error : ""  //in case error happend
		});
	}
  render() {
    return (
       <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
               		 </div>
		                <div className="col-xs-7 form-container">
		          <Form checkProfanity={this.checkProfanity} result={this.state.result}/>
		          <Profanity result={this.state.result}
		          	email={this.state.email}
		          	error = {this.state.error}
		      		/>
    			 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
