import React from "react";

const Form = props => (
		<form onSubmit={props.checkProfanity}>
				
				<input type="text" name="email" placeholder="someone@gmail.com"/>
				<br/>
				<textarea name="emailText" class="form-control" id="exampleFormControlTextarea4" rows="8" placeholder="Email Text..."/>
			    <br/>
			    <button>Submit</button>
			
			</form>
	);	
		
export default Form;