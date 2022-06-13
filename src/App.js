import React, {useState, useEffect } from "react"
import Topbar from "./components/topbar/Topbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Utilbar from "./components/utilbar/Utilbar"
import Grid from "./components/grid/Grid"
import Footer from "./components/footer/Footer"
import AddInvoice from "./components/modals/AddInvoice";
import DeleteInvoice from "./components/modals/DeleteInvoice";
import EditInvoice from "./components/modals/EditInvoice";
import Advancesearch from "./components/modals/Advancesearch";
import API from "../src/components/utils/api"
import InvoiceData from "../src/assets/assets/dummy_Data.js"

function App() {

    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const[editModal,setEditModal]=useState(false)
    const [advancedSearchModal, setAdvancedSearchModal] = useState(false)



    const [allData, setAllData] = useState([])
	  const [selectedRows, setSelectedRows] = useState([])
    const [query, setQuery] = useState("")
    useEffect(()=>{
      const fetchData = async () => {
        const {data,status} = await API(`/payment?${query}`)
        if(status!==200){
          return null
        }
        else{
          return data
        }
      }
      fetchData().then((data)=> setAllData(data))
    },[query])
  
    useEffect(() => {
      console.log("SelectedRow", selectedRows)
    }, [selectedRows])
    return (
      <>
        <Topbar/>
        <Utilbar
          openAddInvoiceModal={() => setAddModal(true)}
          openDeleteInvoiceModal={()=> setDeleteModal(true)}
          openEditInvoiceModal={() => setEditModal(true)}
          openAdvancedSearchModal = {()=> setAdvancedSearchModal(true)}
          allData={allData}
					changeAllData={setAllData}
					selectedRows={selectedRows}
          changeQuery={setQuery}
        />
        <Grid
            allData={allData}
            changeAllData={setAllData}
            changeSelectedRows={setSelectedRows}
        />
        <Footer/>

        <AddInvoice
            isOpen={addModal}
            handleClose={() => setAddModal(false)}
            changeAllData={setAllData}
        />
        <EditInvoice
            isOpen={editModal}
            handleClose={() => setEditModal(false)}
            selectedRow={selectedRows[0]}
            changeAllData={setAllData}
            allData={allData}
        />
        <DeleteInvoice
            isOpen={deleteModal}
            handleClose={() => setDeleteModal(false)}
            selectedRows={selectedRows}
            changeAllData={setAllData}
        />
        <Advancesearch
            isOpen={advancedSearchModal} 
            handleClose = {()=>{ setAdvancedSearchModal(false) }} 
            changeQuery={setQuery}
        />
      </>
    )
 }
 export default App;
          