import './App.css';
import { Transfer, Select, Button } from 'antd';
import React, {useState, useEffect} from 'react'

function App() {

  const [mockData, setMockData] = useState([]);
  const [targetKeys, setTargetKeys] = useState([]);
  const [rows, setRows] = useState(0);
  const [returnFormat, setReturnFormat] = useState('');

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
      <div className='selection-rows'>
        <Select
          showSearch
          style={{ width: 350 }}
          placeholder="Search Number of Rows"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.value > optionB.value
          }
          onChange={(value) => setRows(value)}
          options={[
            {
              value: 50,
              label: '50',
            },
            {
              value: 100,
              label: '100',
            },
            {
              value: 150,
              label: '150',
            },
            {
              value: 200,
              label: '200',
            },
            {
              value: 250,
              label: '250',
            },
          ]}
        />
      </div>
      <div className='selection-return-format'>
        <Select
          showSearch
          style={{ width: 350 }}
          placeholder="Select Format"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          onChange={(value) => setReturnFormat(value)}
          options={[
            {
              value: 'HTML',
              label: 'HTML',
            },
            {
              value: 'JSON',
              label: 'JSON',
            }
          ]}
        />
      </div>
      <div className='generate-button'><Button type="primary" disabled={targetKeys.length === 0 || rows === 0 || returnFormat === ''}>Generate Data</Button></div>
    </div>
  );
}

export default App;
