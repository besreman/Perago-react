import './addEmpStyle.css'

const AddEmployee = () => {
  return (
    <>
    <h3>Add new employee to our company</h3>
    <form>
        <fieldset>
            <legend>Fill the required informations below</legend>
            <div><label htmlFor="">Name</label><input type='text' name='name'/></div>
            <div><label htmlFor="">ID number</label><input type='text' name='id'/></div>
            <div><label htmlFor="">Role</label><input type='text' name='role'/></div>
            <button type='submit' onClick={()=>{alert("added successfully")}}>add</button>
        </fieldset>
    </form>
    
    </>
    
  )
}

export default AddEmployee