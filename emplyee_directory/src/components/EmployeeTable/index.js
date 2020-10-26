import React from "react";
import "./style.css";
import Table from 'react-bootstrap/table';
import Button from 'react-bootstrap/button';
import 'bootstrap/dist/css/bootstrap.min.css';


function useSortableData(employees, config = null) {

  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {

    let employeeList = [...employees];
    if (sortConfig !== null) {
      employeeList.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;

      });
    }
    return employeeList;
  }, [employees, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { employees: sortedItems, requestSort, sortConfig };

};


// const TableHeader = () => {
//   return (
//     <thead>
//       <tr>
//         <th>Image</th>
//         <th>Name</th>
//         <th>Occupation</th>
//         <th>Location</th>

//       </tr>
//     </thead>
//   )
// };

// const TableBody = (props) => {

//   const rows = this.state.data.map((row, index) => {
//     return (

//       <tr key={index}>
//         <td>
//           <div className="img-container">
//             <img alt={row.name} src={row.image} />
//           </div>
//         </td>
//         <td>{row.name}</td>
//         <td>{row.occupation}</td>
//         <td>{row.location}</td>
//       </tr>
//     )
//   })

//   return <tbody>{rows}</tbody>

// };

export default function EmployeeTable(props) {

  const { employees, requestSort, sortConfig } = useSortableData(props.employees);

  function getClassNamesFor(name) {
    if (!sortConfig) {
      return
    };
    return sortConfig.key === name ? sortConfig.direction : undefined;

  };

  return (
    <Table striped bordered hover variant="dark">

      <thead>
        <tr>
          <th><Button onClick={() => requestSort("id")}
            className={getClassNamesFor("id")}>ID</Button></th>
          <th>Image</th>
          <th>Name</th>
          <th>Occupation</th>
          <th><Button onClick={() => requestSort("location")}
            className={getClassNamesFor("location")}>Location</Button></th>

        </tr>
      </thead>

      <tbody>
        {employees.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <div className="img-container">
                  <img alt={employee.name} src={employee.image} />
                </div>
              </td>
              <td>{employee.name}</td>
              <td>{employee.occupation}</td>
              <td>{employee.location}</td>
            </tr>
          )
        })}
      </tbody>
    </Table >
  );
}


