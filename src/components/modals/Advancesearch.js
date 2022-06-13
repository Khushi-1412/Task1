import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	Button,
} from "@mui/material"
import { Col, Row } from "reactstrap"
import CustomTextField from "../react-hook-components/CustomTextField"
import { useForm } from "react-hook-form"
import React from "react"


const AdvancedSearchModal = ({ isOpen, handleClose, changeQuery }) => {
	const { control, handleSubmit, reset } = useForm()

	const onsubmit = (obtainedData) => {
        console.log("ADVANCED SEARCH : ", obtainedData)
        const keys = Object.keys(obtainedData)
        let queryValues = ""
        for (const eachKey of keys) {
            //console.log(obtainedData[eachKey] === "")
            if (
                obtainedData[eachKey] === null ||
                obtainedData[eachKey] === undefined ||
                obtainedData[eachKey] === ""
            ) {
                continue
            }
            queryValues += `${eachKey}=${obtainedData[eachKey]}&`
        }
        console.log(queryValues)
        changeQuery(queryValues)
       // formReset()
        handleClose()
    }
	

	return (
		<>
			<Dialog open={isOpen} onClose={handleClose} maxWidth={"sm"} fullWidth PaperProps={{ style: { backgroundColor: '#39495E' } }}>
				<DialogTitle style={{color: "#fff"}}>Advance Search</DialogTitle>
				<form onSubmit={handleSubmit(onsubmit)}>
					<DialogContent>
						<Row>
							<Col sm={6}>
								<CustomTextField
									control={control}
									name='doc_id'
									label={"Document ID"}
									className='w-100'
								/>
							</Col>
							<Col sm={6}>
								<CustomTextField
									control={control}
									name='invoice_id'
									label={"Invoice Id"}
									className='w-100'
								/>
							</Col>
						</Row>
						<Row className='mt-4'>
							<Col sm={6}>
								<CustomTextField
									control={control}
									name='cust_number'
									label={"Customer Number"}
									className='w-100'
								/>
							</Col>
							<Col sm={6}>
								<CustomTextField
									control={control}
									name='buisness_year'
									label={"Business Year"}
									className='w-100'
								/>
							</Col>
						</Row>
					</DialogContent>
					<DialogActions>
						<Button variant='outlined' className='w-50' type='submit'
						style={{color: "#fff"}}>
							Search
						</Button>
						<Button
							variant='outlined'
							className='w-50' style={{color: "#fff"}}
							onClick={() => {
								//formReset()
								handleClose()
							}}
						>
							Cancel
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</>
	)
}

export default AdvancedSearchModal