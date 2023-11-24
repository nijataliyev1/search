import './App.css';
import { useState,useEffect } from 'react';


function App() {
  const [data,setData] = useState([])
  const [searchName, setSearchName] = useState("")
  const [searchDepartment, setSearchDepartment] = useState("")
  const searchNameFunc = (e) => {
    setSearchName(e.target.value.toLowerCase())
  }
  const searchDepartmentFunc = (e) => {
    setSearchDepartment(e.target.value.toLowerCase())
  }
  useEffect(() => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
    .then(res => res.json())
    .then(data => setData(data))
  },[])
    return (
    <div className="App">
      <input type = "text" className='name-search' placeholder='Name' onChange={searchNameFunc}/>
      <input type = "text" className='department-search' placeholder='Department' onChange={searchDepartmentFunc}/>
      <div className='cards'>
      {
        data.filter((i) => (i.name.toLowerCase().includes(searchName) && i.department.toLowerCase().includes(searchDepartment))).map((item) => (
          <div className='card' key = {item.id}>
              <p className='name'>Name: {item.name}</p>
              <p className='department'>Department: {item.department}</p>
              <p className='role'>Role: {item.role}</p>
          </div>
        ))
        
      }
      </div>
    </div>
  );
}

export default App;
