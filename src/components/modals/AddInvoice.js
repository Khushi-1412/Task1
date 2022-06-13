import React from "react"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material"
import { Col, Row } from "reactstrap"
import CustomDatePicker from "../react-hook-components/CustomDatePicker"
import CustomTextField from "../react-hook-components/CustomTextField"
import { useForm } from "react-hook-form"
import dayjs from "dayjs"
import { v4 as uuidv4 } from "uuid"
import API from "../utils/api"

const AddInvoice= ({
	isOpen,
	handleClose,
	changeAllData,
}) => {
    const { control, handleSubmit, reset } = useForm()
	const onSubmit = async (newData) => {
		const date_fields = [
			"baseline_create_date",
			"document_create_date",
			"due_in_date",
			"posting_date",
			"clear_date",
		]
		for (const eachField of date_fields) {
			if (newData[eachField] !== null) {
				newData[eachField] = dayjs(newData[eachField]).format("YYYY-MM-DD")
			}
		}

		newData["cust_number"] = Number(newData["cust_number"])
		newData["posting_id"] = Number(newData["posting_id"])
        
        console.log(newData)
		const { data, status } = await API(
			"/payment",
			{
				body: newData,
			},
			"POST"
		)
		if (status !== 200) {
			console.log(data)
			alert("Error!!!!!")
			return
		}
		console.log(data) 
		changeAllData((cur) => {
			return [...cur, {...data}]
		})
        formReset()
		handleClose()
	}
    const formReset = () => {
    reset({
        business_code: "",
        customer_number: "",
        clear_date: null,
        buisness_year: "",
        doc_id: "",
        posting_date: null,
        document_create_date: null,
        due_date: null,
        invoice_currency: "",
        document_type: "",
        posting_id: "",
        total_open_amount: "",
        baseline_create_date: null,
        cust_payment_terms: "",
        invoice_id: "",
    })
}
return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={"lg"} 
    fullWidth PaperProps={{ style: { backgroundColor: '#39495E' } }}>
        <DialogTitle style={{color: "#fff"}}>Add</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent className='pt-2'>
                <Row>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Business Code"}
                            name={"business_code"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Customer Number"}
                            className='w-100'
                            name={"cust_number"}
                            control={control}
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomDatePicker
                            label={"Clear Date"}
                            name={"clear_date"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Business Year"}
                            name={"buisness_year"}
                            control={control}
                            className='w-100'
                            variant='filled'
                        />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Document id"}
                            name={"doc_id"}
                            control={control}
                            className='w-100'
                            variant='filled'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomDatePicker
                            label={"Posting Date"}
                            name={"posting_date"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomDatePicker
                            label={"Document Create Date"}
                            name={"document_create_date"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomDatePicker
                            label={"Due Date"}
                            name={"due_in_date"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Invoice Currency"}
                            name='invoice_currency'
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Document Type"}
                            name={"document_type"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Posting Id"}
                            name={"posting_id"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Total Open Amount"}
                            name={"total_open_amount"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                </Row>
                <Row className='mt-4'>
                    <Col lg={3}>
                        <CustomDatePicker
                            label={"Baseline Create Date"}
                            name={"baseline_create_date"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Customer Payment Terms"}
                            name={"cust_payment_terms"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                    <Col lg={3}>
                        <CustomTextField
                            label={"Invoice Id"}
                            name={"invoice_id"}
                            control={control}
                            className='w-100'
                        />
                    </Col>
                </Row>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' className='w-50' type='submit'
                style={{color: "#fff"}}>
                    Add
                </Button>
                <Button
                    variant='outlined'
                    className='w-50' style={{color: "#fff"}}
                    onClick={() => {
                        formReset()
                        handleClose()
                    }}
                >
                    Cancel
                </Button>
            </DialogActions>
        </form>
    </Dialog>
)
}

export default AddInvoice



