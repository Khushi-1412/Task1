import { DataGrid} from "@mui/x-data-grid"
import React from "react"

const Grid = ({
	allData,
	 changeAllData,
	 changeSelectedRows,
}) => {

const columns = [
    { field: "sl_no", headerName: "Sl no" },
    { field: "business_code", headerName: "Business Code", width: 200 },
    { field: "cust_number", headerName: "Customer Number", width: 200 },
    { field: "clear_date", headerName: "Clear Date", width: 200 },
    { field: "buisness_year", headerName: "Business Year", width: 200 },
    { field: "doc_id", headerName: "Document ID", width: 200 },
    { field: "posting_date", headerName: "Posting Date", width: 200 },
    {
        field: "document_create_date",
        headerName: "Document Create Date",
        width: 200,
    },
    // { field: "due_in_date", headerName: "Due Date", width: 200 },
    // { field: "invoice_currency", headerName: "Invoice Currency", width: 200 },
    // { field: "document_type", headerName: "Document Type", width: 200 },
    // { field: "posting_id", headerName: "Posting Id", width: 200 },
    // { field: "total_open_amount", headerName: "Total Open Amount", width: 200 },
    {
        field: "baseline_create_date",
        headerName: "Baseline Create Date",
        width: 200,
    },
    {
        field: "cust_payment_terms",
        headerName: "Customer Payment Terms",
        width: 200,
    },
    { field: "invoice_id", headerName: "Invoice Id", width: 200 },
]
return (
    <div style={{ height: "calc(100vh - 200px)" }}>
        <DataGrid
             columns={columns}
             rows={allData}
             checkboxSelection
             disableSelectionOnClick
             rowHeight={35}
             getRowId={(row) => row.sl_no}
             onSelectionModelChange={(sm) => changeSelectedRows(sm)}
             sx={{
                color: "#fff",
                ".MuiTablePagination-selectLabel": {
                    color: "#fff",
                },
                ".MuiTablePagination-select": {
                    color: "#fff",
                },
                ".MuiTablePagination-displayedRows": {
                    color: "#fff",
                },
                ".MuiTablePagination-actions": {
                    color: "#fff",
                },
                ".MuiTablePagination-selectIcon": {
                    color: "#fff",
                },
                ".MuiCheckbox-root": {
                    color: "#fff",
                },
            }}
        />
    </div>
)
}

export default Grid
