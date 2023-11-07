import './style.css'
interface emp {
  id: string;
  name: string;
}

type empArray = emp[];

const ShowEmployees: React.FC<{props: empArray}> =({props}) => {
    
  return (
    <table>
      <thead>
        <td>role </td>
        <td>Id number</td>
        <td>Name</td>
        <td>delete</td>
        <td>update</td>
      </thead>
      <tbody>
      {props.map((employee : emp) =>(<tr>
        <td></td>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td><button onClick={()=>
          console.log('delete')}>delete</button></td>
        <td><button>update</button></td>
      </tr>))}
      </tbody>
  </table>
  );
}

export default ShowEmployees