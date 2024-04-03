import { useParams, useLocation } from 'react-router-dom'
import './index.css'
import { useEffect } from 'react';
function Data() {
    const params = useParams();
    const locataion = useLocation();
    console.log(locataion);

    // useEffect(() => {
    //   fetch(`https://react-vite-comfy-store-v2.netlify.app/assets/index-d2914d39.js`, {
    //     method: "GET"
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .cath(err => {
    //     console.log(err);
    //   })
    // }, [])
    
  return (
    <div>Data</div>
  )
}

export default Data