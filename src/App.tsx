import React from 'react';
import { Stack } from "@mui/material";
import {AddNewDomain} from "./components/templates/AddNewDomain";


function App() {
  return (
    <Stack bgcolor={'#EAF3F4'} width={'100%'} height={'100vh'}>
        <AddNewDomain />
    </Stack>
  );
}

export default App;
