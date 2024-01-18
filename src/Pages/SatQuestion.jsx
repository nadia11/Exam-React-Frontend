import React, { Fragment,useEffect } from 'react';
import Home from '../Components/Home/Home';
import Nav from '../Components/Navbar/Unav';
import Sidebar from '../Components/Sidebar/Sidebar';
import Leftbar from '../Components/Sidebar/Leftbar';
import Headerbar from '../Components/Sidebar/Headerbar';
import Excelimport from '../Components/SatQuestion';

function SatQuestion() {

  useEffect(() => {

    // 👇️ run a function when the component unmounts 👇️
    return () => {
      console.log('Child unmounted');
    };
  }, []);

  return (
    <div>
      <div id="main-wrapper"> 
        <Excelimport />
      </div>
    </div>
  );
}

export default SatQuestion;
