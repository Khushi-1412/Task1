import React, {useState, useEffect } from "react"
import { TextField} from "@mui/material"
import { Button, ButtonGroup, Col, Input, Row } from "reactstrap"


const UtilBar = ({
	 openAddInvoiceModal,
	 openEditInvoiceModal,
     openDeleteInvoiceModal,
	 openAdvancedSearchModal,
	 allData,
	 changeQuery,
	selectedRows,
}) =>
{
    const[queryValue, setQueryValue] = useState("")

    useEffect(() => {
    if (queryValue.length > 0) {
        changeQuery(`cust_number=${queryValue}`)
    } else {
        changeQuery("")
    }
}, [queryValue, changeQuery])
const styles = {
    "&.util-btn": {
        color: "fff"
    }
}

    return (
       <Row className="me-0 d-flex align-items-center" style={{ height:"60px"}}>
        <Col xl={5}>
            <ButtonGroup className='ms-3 d-flex justify-content-center' >
                {/* <Button  
                    disabled={selectedRows.length<=0} 
                    style={{color: "#fff", backgroundColor: "#2b95cf"}}
                    variant="filled">
                    PREDICT
                </Button> */}
                <Button 
                    outline className='util-btn' sx={styles}
                    style={{color: "#fff"}}>
                    CREATE A TABLE
                </Button >
                <Button  
                    className='util-btn' outline
                    onClick={openAdvancedSearchModal}
                    style={{color: "#fff"}}>
                    SEARCH
                </Button>
             </ButtonGroup>
        </Col>
        <Col xl={3}>
        <TextField 
            style={{backgroundColor: "#fff"}}
            label='Search Customer Id' 
            value={queryValue}
            onChange={(e) => setQueryValue(e.target.value)}
            size='small'
            className='w-100'
        />
         </Col>
         <Col xl={4}>
            <ButtonGroup className='d-flex justify-content-center mw-100 ' >
                <Button className='pe-4 ps-4 util-btn'
                    outline onClick={openAddInvoiceModal}
                    style={{color: "#fff"}}>
                    ADD
                </Button>
                <Button className='util-btn'
                    outline disabled={selectedRows.length !== 1}
                    onClick={openEditInvoiceModal}
                    style={{color: "#fff"}} >
                    EDIT 
                </Button>
                <Button className='util-btn' 
                    outline disabled={selectedRows.length === 0} 
                    onClick={openDeleteInvoiceModal}
                    style={{color: "#fff"}} >
                    DELETE
                </Button>
             </ButtonGroup>
          </Col>
       </Row>
    
   
)
}
export default UtilBar;