import './addEmpStyle.css'
import {Employee} from './Employee'
import {MantineProvider} from '@mantine/core'

import {TextInput, Select} from '@mantine/core';

const UpdateEmployee = (emp  :Employee) => {
  return (
    <MantineProvider>
    <h3>Update data</h3>
    <form>
        <fieldset>
            <legend>Update the data below</legend>
            <TextInput label='Name' type='text' name='name' defaultValue={emp.name}/>
            <TextInput label= 'id' type='text' name='id' defaultValue={emp.id}/>
            <Select label='Role' placeholder='please select role' data={['CEO', 'CTO','Tech lead']}/>
            <TextInput label= 'Salary' type='text' name='salary' defaultValue={emp.salary}/>
            <TextInput label= 'Address' type='text' name='address' defaultValue={emp.address}/>
            <button type='submit' onClick={()=>{alert("updated successfully")}}>apply and save</button>
        </fieldset>
    </form>
    
    </MantineProvider>
    
  )
}

export default UpdateEmployee