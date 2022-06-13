import React, { useEffect, useState } from "react"
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material"
import { useForm } from "react-hook-form"
import { Col, Row } from "reactstrap"
import CustomTextField from "../react-hook-components/CustomTextField"
import API from "../utils/api"

const EditInvoice = ({
	isOpen,
	handleClose,
	selectedRow,
	changeAllData,
	allData,
}) =>{
        const { control, handleSubmit, reset } = useForm()
        const [selectedRowData, setSelectedRowData] = useState({})
        useEffect(() => {
            setSelectedRowData(
                allData.filter((eachInvoice) => eachInvoice.sl_no === selectedRow)[0]
            )
        }, [selectedRow, allData])
    
        useEffect(() => {
            console.log("Selected Row Data", selectedRowData)
            if (selectedRowData) {
                reset({
                    invoice_currency: selectedRowData.invoice_currency,
                    cust_payment_terms: selectedRowData.cust_payment_terms,
                })
            }
        }, [selectedRowData, reset])
    
        const onSubmit = async (newData) => {
            console.log(newData)
            const { data, status } = await API(
                "/payment",
                { body: { sl_no: selectedRowData.sl_no, ...newData } },
                "PUT"
            )
            if (status !== 200) {
                console.log(data)
                alert("ERROR!!!")
                return
            }
            changeAllData((cur) => {
                const idx = cur.findIndex((invoice) => invoice.sl_no === selectedRow)
                console.log(cur[idx])
                cur[idx].invoice_currency = newData.invoice_currency
                cur[idx].cust_payment_terms = newData.cust_payment_terms
                return cur
            })
            handleClose()
        }
    
        const formReset = () => {
            reset({
                invoice_currency: "",
                cust_payment_terms: "",
            })
        }

return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={"sm"} fullWidth
    PaperProps={{ style: { backgroundColor: '#39495E' } }}>
        <DialogTitle style={{color: "#fff"}}>Edit</DialogTitle>
         <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
                <Row>
                    <Col sm={6}>
                        <CustomTextField
                            control={control}
                            name='invoice_currency'
                            label={"Invoice Currency"}
                            className='w-100'
                        />
                    </Col>
                    <Col sm={6}>
                        <CustomTextField
                            control={control}
                            name='cust_payment_terms'
                            label={"Customer Payment Terms"}
                            className='w-100'
                        />
                    </Col>
                </Row>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' className='w-50' type='submit' style={{color: "#fff"}}>
                    Edit 
                </Button>
                <Button
                    variant='outlined'
                    className='w-50'style={{color: "#fff"}}
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


export default EditInvoice;
