import { useEffect, useState } from 'react';
import fetchLocations from './api/_fetchLocations.jsx';
import './App.scss';
import Map from './elements/_map.jsx';
import Table from './elements/_table.jsx';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        var mount = true;
        const loadData = async () => {
            const locations = await fetchLocations();

            if (mount) {
                setData(locations);
            }
        }
        loadData();

        return () => mount = false;

    }, []);

  return (
      <div id="main">
          <h1>Company Locations</h1 >
          {data &&
            <>
                <Map data={data} />
                <Table data={data} />
            </>
          }
          
      </div>
  );
}

export default App;