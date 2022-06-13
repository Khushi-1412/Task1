import React from "react"
import { Col, Row } from "reactstrap"
import image1 from '../../assets/assets/Group_20399.svg'
// import image2 from '../../assets/assets/logo.svg'

function Topbar() {
	return (
		<Row className='d-flex align-items-center' style={{ height: "80px" }}>
			<Col xl={4}>
				<div>
				
					<img src={image1}/>
				</div>
			</Col>
			<Col xl={4} className='d-flex justify-content-center'>
			 <div> 
				
					{/* <img src={image2}/>  */}
			</div>  
			</Col> 
			
		</Row>
		
		
	
	)
	}


export default Topbar;
