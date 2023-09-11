import './App.css';
import { Transfer } from 'antd';
import React, {useState, useEffect} from 'react'

function App() {

  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);

  const getMock = () => {
    const tempMockData = [
      {
        key: 'name',
        title: 'Name'
      },
      {
        key: 'email',
        title: 'Email'
      },
      {
        key: 'mobile',
        title: 'Phone Numbers'
      },
    ]
    setMockData(tempMockData);
  };

  useEffect(() => {
    getMock();
  },[]);

  const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys);
  };
  
  return (
    <div className="App">
      <h1>Data Generator</h1>
      <div className='selection-grid'>
        <h4>Select the Data Generator Items</h4>
        <Transfer
          dataSource={mockData}
          showSearch
          filterOption={filterOption}
          targetKeys={targetKeys}
          onChange={handleChange}
          render={(item) => item.title}
        />
      </div>
    </div>
  );
}

export default App;
