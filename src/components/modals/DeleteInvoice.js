import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material"
import React from "react"
import API from '../../components/utils/api'


const DeleteInvoice = ({
	isOpen,
	handleClose,
	selectedRows,
	changeAllData,
}) => {
	const deleteRows = async () => {
        for (const eachRow of selectedRows) {
            const { data, status } = await API(
                `/payment?sl_no=${eachRow}`,
                { body: {} },
                'DELETE'
            )
            if (status === 200) {
                changeAllData((cur) =>
                    cur.filter((eachInvoice) => eachInvoice.sl_no !== eachRow)
                )
            } else {
                console.log('ERROR : : : :', data)
            }
        }

        handleClose()
    }
	return (
		<Dialog open={isOpen} onClose={handleClose} maxWidth={"xs"} fullWidth
		PaperProps={{ style: { backgroundColor: '#39495E' } }}>
			<DialogTitle style={{color: "#fff"}}>Delete Records ?</DialogTitle>
			<DialogContent>
				<div style={{color: "#fff"}}>Are you sure to delete these record[s] ?</div>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' className='w-50' onClick={deleteRows}
				style={{color: "#fff"}}>
					Delete
				</Button>
				<Button
					variant='outlined'
					className='w-50' style={{color: "#fff"}}
					onClick={() => {
						handleClose()
					}}
				>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	)
}

export default DeleteInvoice

