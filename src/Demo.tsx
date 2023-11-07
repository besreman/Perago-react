import {MantineProvider, Select, createTheme, rem } from '@mantine/core'
import '@mantine/core/styles.css';
import { useState } from 'react';
import CreateRole from './CreateRole';
import ShowEmployees from './demo/ShowEmployees'
import AddEmployee from './demo/AddEmployee';

interface emp {
  id: string;
  name: string;
}

type empArray = emp[];

const Employees: empArray = [
    {name:'Nathy Abebe',
    id:'EITM21'},
    {name:'Minalu Mesele',
    id:'EITM26'}
];

const Demo: React.FC = () => {

    const theme = createTheme({
        colors: {
          deepBlue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0'],
        },
      
        shadows: {
          md: '1px 1px 3px rgba(0, 0, 0, .25)',
          xl: '5px 5px 3px rgba(0, 0, 0, .25)',
        },
      
        headings: {
          fontFamily: 'Roboto, sans-serif',
          sizes: {
            h1: { fontSize: rem(36) },
          },
        },
      });
      

      const [selected, setSelected] = useState<string | null>(null);

      const HandleClick = () =>{
        if(selected === 'Create role')
         return <CreateRole />
        else if(selected === 'Show employee list')
         return <ShowEmployees props = {Employees}/>
         else if(selected === 'Register employee')
         return <AddEmployee/>
        else
        return <h1>other options selected!</h1>
      }


    return (
        <MantineProvider theme={theme}>
        <Select
          label="Perago Employee registration management"
          placeholder="Pick value"
          data={['Create role', 'Register employee', 'Show employee list', 'Show roles hierarchy']}

          
          value={selected}
          onChange={(value)=>{setSelected(value); HandleClick();}}
        />

        {selected && (
            <div>
                {HandleClick()}
            </div>
        )}


        </MantineProvider>
      );
}

export default Demo