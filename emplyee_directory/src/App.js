import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Employees from "./utils/employees.json";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/Search"


export default function App() {

  const [employees] = React.useState(Employees);
  const [search, setSearch] = React.useState("");

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const searchEmployees = employees.filter(result => {
    const searchName = result.name.toLowerCase().includes(search.toLowerCase());
    const searchOccupation = result.occupation.toLowerCase().includes(search.toLowerCase());
    const searchLocation = result.location.toLowerCase().includes(search.toLowerCase());
    return searchName || searchOccupation || searchLocation
  })

  // Map over this.state.friends and render a FriendCard component for each employee object
  return (

    <Wrapper>
      <Title>Employee Directory</Title>

      <SearchForm onSearch={handleSearch} search={search} />
      <EmployeeTable employees={searchEmployees} />


    </Wrapper>
  );

}
