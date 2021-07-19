// import React,{useState} from 'react'
// import { Redirect, Route, Switch, Link } from 'react-router-dom'
// import Phone1 from '../phones/Phone1';



// function ProtectedRoute() {
//     const [phones, setPhones] = useState([
//         {id: 1, name: 'Apple Iphone 5c', price: 234, img: '../../images/ayfon.png', 
//                 cpu: '1.3GHz Apple A6',  memory: '16GB, 32GB and RAM 1GB',
//                 camera: '8mp (3264x2448)', size: '124.3mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35',
//                 weight: '132 gramms (4.7ounces)with battery', display: '4.0', battery: '1480mAh',},
//         {id: 2, name: 'Apple Iphone 11 Pro Max', price: 1054, img: '../../images/a 11pro.jpg',
//                 cpu: 'Apple A13 Bionic',  memory: '64GB, 1TB and RAM 4GB',
//                 camera: '12MP 12MP 12MP (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
//                 weight: '226 gramms (4.8ounces)with battery', display: '6.5', battery: '3969mAh'},
//         {id: 3, name: 'Redmi note 9', price: 243, img: '../../images/r note 9.jpg',
//                 cpu: 'Media Tek Helio G85',  memory: '32GB, 128GB and RAM 4GB',
//                 camera: '48MP+8MP+5MP+5MP ', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
//                 weight: '199 gramms (4.8ounces)with battery', display: '6.53', battery: '5020mAh'},
//         {id: 4, name: 'Samsung galaxy A30', price: 285, img: '../../images/s a30.jpg',
//                 cpu: 'Samsung Exynos 7904',  memory: '32GB, 512GB and RAM 3GB',
//                 camera: '16mp (3250x2348)', size: '74.5mm x 158.8mm x 7.7mm (4.3 x 2.13 x 0.25)',
//                 weight: '165 gramms (4.8ounces)with battery', display: '6.4', battery: '4000mAh'},
//         {id: 5, name: 'Huawei Y5 Lite', price: 139, img: '../../images/h Y5 Lite.jpg',
//                 cpu: 'Media Tek MT6739',  memory: '16GB, 128GB and RAM 1GB',
//                 camera: '5mp (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
//                 weight: '135 gramms (4.8ounces)with battery', display: '5.45', battery: '3020mAh'},
//         {id: 6, name: 'Huawei P40 Lite E', price: 234, img: '../../images/h P40 Lite E4.png',
//                 cpu: 'HiSilicon Kirin 710',  memory: '64GB, 512GB and RAM 4GB',
//                 camera: '48MP+8MP+2MP/8MP', size: '76.13mm x 159.81mm x 8.13mm ',
//                 weight: '176 gramms (4.8ounces)with battery', display: '6.39', battery: '4000mAh'},
//         {id: 7, name: 'Samsung galaxy A10s', price: 165, img: '../../images/phone.png',
//                 cpu: 'Mediat Tek Helio P22',  memory: '32GB, 16GB and RAM 2GB',
//                 camera: '13MP+2MP (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
//                 weight: '168 gramms (4.8ounces)with battery', display: '6.2', battery: '4000mAh'},
//         {id: 8, name: 'Apple Iphone 12', price: 1004, img: '../../images/a 12.png',
//                 cpu: 'Apple A14 Bionic',  memory: '128GB, 512GB and RAM 4GB',
//                 camera: '12MP+12Mp, 12MP', size: '146.7mm x 71.5mm x 7.4mm ',
//                 weight: '187 gramms (4.8ounces)with battery', display: '6.1', battery: '2775mAh'},
//         {id: 9, name: 'Xiomi Redmi 9c', price: 254, img: '../../images/r 9c.png',
//                 cpu: '1.4GHz Samsung A6',  memory: '8GB, 16GB and RAM 2GB',
//                 camera: '5mp (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
//                 weight: '135 gramms (4.8ounces)with battery', display: '4.0', battery: '1280mAh'},
//         {id: 10, name: 'Samsung galaxy A32', price: 267, img: '../../images/s a32.png',
//                 cpu: 'Media Tek Helio G80',  memory: '64GB, 512GB and RAM 4GB',
//                 camera: '64MP+8MP+5MP+5MP/20MP', size: '73.6mm x 158.9mm x 8.4mm (4.3 x 2.13 x 0.25',
//                 weight: '184 gramms (4.8ounces)with battery', display: '6.4', battery: '5000mAh'},
//         {id: 11, name: 'Samsung galaxy A52', price: 456, img: '../../images/s a52.jpg',
//                 cpu: 'Qualcomm Snapdragon 720G',  memory: '128GB, 1TB and RAM 4GB',
//                 camera: '5mp (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
//                 weight: '187 gramms (4.8ounces)with battery', display: '4.0', battery: '4500mAh'},
//     ])
//     const [saveId, setSaveId] = useState('')

//     return (

//         <div>
//             <Switch>
//                 <Route path="/phones/:id" render={()=><Phone1 saveId={saveId} phones={phones} />} />
//             </Switch>
//         </div>





//         // <Route 
        
//         // {...rest}
//         // render={(props) => {
//         //     if(isAuth ){
//         //         return <component />;
//         //     }else {
//         //         return (
//         //             <Redirect to={{pathname: '/', state: {from :props.location}}} />
//         //         )
//         //     }
//         // }}
        
//         // {isAuth, component, ...rest}
        
//         // />
//     )
// }

// export default ProtectedRoute
