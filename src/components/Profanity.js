import React from 'react';

class Profanity extends React.Component{
	render(){
		if(this.props.result==='true'){

			return(
				<p id="out_message">
						Sorry can't sent your email to 
						{" " +this.props.email }
				</p>
			);
		}
		if(this.props.result==='false'){
			return(
				<p id="out_message">
					your email sent succesfully to 
					{" "+ this.props.email }
				</p>
			);
		}else{
			return(
			<div>

			 </div>
			);
		}

	}
};

export default Profanity;
