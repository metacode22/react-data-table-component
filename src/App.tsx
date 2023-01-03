import styled from '@emotion/styled';

import DataTable from './components/DataTable';

import dummyColumns from './data/dummyColumns';
import dummyData from './data/dummyData';

const App = () => {
  return (
    <Container>
      <h1>header, fixedColumnKeys, searchable, pagination</h1>
      <DataTable
        header="Header"
        fixedColumnKeys
        scrollHeight="300px"
        width="700px"
        searchable
        initialData={dummyData}
        columns={dummyColumns}
        pagination
      />

      <h1>header, pagination</h1>
      <DataTable
        header="Header"
        initialData={dummyData}
        columns={dummyColumns}
        pagination
      />

      <h1>searchable, pagination</h1>
      <DataTable
        searchable
        initialData={dummyData}
        columns={dummyColumns}
        pagination
      />

      <h1>searchable</h1>
      <DataTable searchable initialData={dummyData} columns={dummyColumns} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
