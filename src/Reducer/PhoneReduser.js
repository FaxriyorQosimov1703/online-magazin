import {createSlice} from '@reduxjs/toolkit';



const a = createSlice({
    name: 'phones',
    initialState:{ 
      phones:  [
        {id: 1, name: 'Apple Iphone 5c', price: 234, img: '../../images/5c.jpg', 
                cpu: '1.3GHz Apple A6',  memory: '16GB, 32GB and RAM 1GB',
                camera: '8mp (3264x2448)', size: '124.3mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35',
                weight: '132 gramms (4.7ounces)with battery', display: '4.0', battery: '1480mAh',},
        {id: 2, name: 'Apple Iphone 11 Pro Max', price: 1054, img: '../../images/a 11pro.jpg',
                cpu: 'Apple A13 Bionic',  memory: '64GB, 1TB and RAM 4GB',
                camera: '12MP 12MP 12MP (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
                weight: '226 gramms (4.8ounces)with battery', display: '6.5', battery: '3969mAh'},
        {id: 3, name: 'Redmi note 9', price: 243, img: '../../images/r note 9.jpg',
                cpu: 'Media Tek Helio G85',  memory: '32GB, 128GB and RAM 4GB',
                camera: '48MP+8MP+5MP+5MP ', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
                weight: '199 gramms (4.8ounces)with battery', display: '6.53', battery: '5020mAh'},
        {id: 4, name: 'Samsung galaxy A30', price: 285, img: '../../images/s a30.jpg',
                cpu: 'Samsung Exynos 7904',  memory: '32GB, 512GB and RAM 3GB',
                camera: '16mp (3250x2348)', size: '74.5mm x 158.8mm x 7.7mm (4.3 x 2.13 x 0.25)',
                weight: '165 gramms (4.8ounces)with battery', display: '6.4', battery: '4000mAh'},
        {id: 5, name: 'Huawei Y5 Lite', price: 139, img: '../../images/h Y5 Lite.jpg',
                cpu: 'Media Tek MT6739',  memory: '16GB, 128GB and RAM 1GB',
                camera: '5mp (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
                weight: '135 gramms (4.8ounces)with battery', display: '5.45', battery: '3020mAh'},
        {id: 6, name: 'Huawei P40 Lite E', price: 234, img: '../../images/h P40 Lite E4.png',
                cpu: 'HiSilicon Kirin 710',  memory: '64GB, 512GB and RAM 4GB',
                camera: '48MP+8MP+2MP/8MP', size: '76.13mm x 159.81mm x 8.13mm ',
                weight: '176 gramms (4.8ounces)with battery', display: '6.39', battery: '4000mAh'},
        {id: 7, name: 'Samsung galaxy A10s', price: 165, img: '../../images/a10s.png',
                cpu: 'Mediat Tek Helio P22',  memory: '32GB, 16GB and RAM 2GB',
                camera: '13MP+2MP (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
                weight: '168 gramms (4.8ounces)with battery', display: '6.2', battery: '4000mAh'},
        {id: 8, name: 'Apple Iphone 12', price: 1004, img: '../../images/a 12.png',
                cpu: 'Apple A14 Bionic',  memory: '128GB, 512GB and RAM 4GB',
                camera: '12MP+12Mp, 12MP', size: '146.7mm x 71.5mm x 7.4mm ',
                weight: '187 gramms (4.8ounces)with battery', display: '6.1', battery: '2775mAh'},
        {id: 9, name: 'Xiomi Redmi 9c', price: 254, img: '../../images/r 9c.png',
                cpu: '1.4GHz Samsung A6',  memory: '8GB, 16GB and RAM 2GB',
                camera: '5mp (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
                weight: '135 gramms (4.8ounces)with battery', display: '4.0', battery: '1280mAh'},
        {id: 10, name: 'Samsung galaxy A32', price: 267, img: '../../images/s a32.png',
                cpu: 'Media Tek Helio G80',  memory: '64GB, 512GB and RAM 4GB',
                camera: '64MP+8MP+5MP+5MP/20MP', size: '73.6mm x 158.9mm x 8.4mm (4.3 x 2.13 x 0.25',
                weight: '184 gramms (4.8ounces)with battery', display: '6.4', battery: '5000mAh'},
        {id: 11, name: 'Samsung galaxy A52', price: 456, img: '../../images/s a52.jpg',
                cpu: 'Qualcomm Snapdragon 720G',  memory: '128GB, 1TB and RAM 4GB',
                camera: '5mp (3250x2348)', size: '123.3mm x 53.2mm x 8.97mm (4.3 x 2.13 x 0.25',
                weight: '187 gramms (4.8ounces)with battery', display: '4.0', battery: '4500mAh'},
        {id: 12, name: 'Apple Iphone SE 2020', price: 456, img: '../../images/a i SE.png',
                cpu: 'Apple A13 Bionic',  memory: '64GB, 1TB and RAM 3GB',
                camera: '12mp (3250x2348)', size: '67.3x138.4x7.3 мм (4.3 x 2.13 x 0.25',
                weight: '148 gramms (4.8ounces)with battery', display: '4.7', battery: '4500mAh'},
        {id: 13, name: 'Apple iPhone SE', price: 556, img: '../../images/a Se 3G.png',
                cpu: 'Apple A13 Bionic',  memory: '64GB, 1TB and RAM 3GB',
                camera: '12mp/7mp (3250x2348)', size: '67.3x138.4x7.3 мм (4.3 x 2.13 x 0.25',
                weight: '148 gramms (4.8ounces)with battery', display: '4.7', battery: '4500mAh'},
        {id: 14, name: 'Apple iPhone XR (Full Box) ', price: 556, img: '../../images/a XR.png',
                cpu: 'Apple A12 Bionic',  memory: '64GB, 1TB and RAM 3GB',
                camera: '12mp/7mp (3250x2348)', size: '150.9 х 75.7 х 8.3 мм (4.3 x 2.13 x 0.25',
                weight: '194 gramms (4.8ounces)with battery', display: '6.1', battery: '2940mAh'},
        {id: 15, name: 'Nokia Смартфон 1.4 2/32GB ', price: 136, img: '../../images/n 1.4.jpeg',
                cpu: 'Qualcomm 215 4 ядра',  memory: '32GB, 128GB and RAM 2GB',
                camera: '8mp+2mp/5mp (3250x2348)', size: '150.9 х 75.7 х 8.3 мм (4.3 x 2.13 x 0.25',
                weight: '194 gramms (4.8ounces)with battery', display: '6.52', battery: '4000mAh'},
        {id: 16, name: 'Nokia 2.4 DS 2/32 CIS UA', price: 146, img: '../../images/n 2.4 DS.jpeg',
                cpu: 'Mediatek Helio P22',  memory: '32GB, 128GB and RAM 2GB',
                camera: '13mp+2mp/5mp (3250x2348)', size: '150.9 х 75.7 х 8.3 мм (4.3 x 2.13 x 0.25',
                weight: '194 gramms (4.8ounces)with battery', display: '6.5', battery: '4500mAh'},
        {id: 17, name: 'Nokia 2.4 2/32GB Dual Sim Black', price: 146, img: '../../images/n 2.4.png',
                cpu: 'Mediatek Helio P22 (MT6762R)',  memory: '32GB, 128GB and RAM 2GB',
                camera: '13mp+2mp/5mp (3250x2348)', size: '150.9 х 75.7 х 8.3 мм (4.3 x 2.13 x 0.25',
                weight: '195 gramms (4.8ounces)with battery', display: '6.5', battery: '4500mAh'},
        {id: 18, name: 'Nokia 3.4 DS (TA-1283) 3GB 64GB Fjord', price: 192, img: '../../images/nokia 3.4 DS.png',
                cpu: 'Qualcomm SM4250 Snapdragon 460',  memory: '64GB, 256GB and RAM 3GB',
                camera: '13 МП+5 МП+/2 МП/+8MP (3250x2348)', size: '76x161x8.7 мм (4.3 x 2.13 x 0.25',
                weight: '180 gramms (4.8ounces)with battery', display: '6.39', battery: '4000mAh'},
        {id: 19, name: 'Xiaomi Redmi 9T 4/128 Gb Gray', price: 238, img: '../../images/r 9t.jpg',
                cpu: 'Qualcomm Snapdragon 662',  memory: '128GB, 256GB and RAM 4GB',
                camera: '4 (48 МП + 8 МП + 2 МП + 2 МП)', size: '76x161x8.7 мм (4.3 x 2.13 x 0.25',
                weight: '180 gramms (4.8ounces)with battery', display: '6.53', battery: '6000mAh'},
        {id: 20, name: 'Redmi Note 10 Pro 6/128GB blue', price: 413, img: '../../images/r note 10pro.png',
                cpu: 'Qualcomm Snapdragon 732G 2300 МГц',  memory: '128GB, 512GB and RAM 6GB',
                camera: '108 МП F/1.90 + 8 МПF/2.20 макро 5 МП F/2.40 да', size: '76.5x164x8.1 мм (4.3 x 2.13 x 0.25',
                weight: '193 gramms (4.8ounces)with battery', display: '6.67', battery: '5020mAh'},
        {id: 21, name: 'Xiaomi Redmi Note 10 4/128GB Green ', price: 288, img: '../../images/r note1.png',
                cpu: 'Qualcomm Snapdragon 732G 2300 МГц',  memory: '128GB, 512GB and RAM 4GB',
                camera: '48 МП 8 МП 2 МП 2 МП', size: '76.5x164x8.1 мм (4.3 x 2.13 x 0.25',
                weight: '179 gramms (4.8ounces)with battery', display: '6.43', battery: '5000mAh'},
        {id: 22, name: 'Xiaomi Redmi Note 8 2021 EU /64GB Blue ', price: 288, img: '../../images/r note8.jpeg',
                cpu: 'Qualcomm Snapdragon 665',  memory: '64GB, 512GB and RAM 4GB',
                camera: '48 МП 8 МП 2 МП 2 МП', size: '158.3х75.3х8.3 мм (4.3 x 2.13 x 0.25',
                weight: '190 gramms (4.8ounces)with battery', display: '6.43', battery: '4000mAh'},
        {id: 22, name: 'Samsung Galaxy F62 6/128GB ', price: 468, img: '../../images/s f62.jpg',
                cpu: 'Samsung Exynos 9825',  memory: '128GB, 512GB and RAM 6GB',
                camera: '64 МП 12 МП 5 МП 5 МП', size: '158.3х75.3х8.3 мм (4.3 x 2.13 x 0.25',
                weight: '218 gramms (4.8ounces)with battery', display: '6.7', battery: '7000mAh'},
    ],
      brands: [
        
            {id: 1, name: 'All', color: 'bg-primary'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Samsung'},
            {id: 4, name: 'Xiomi'},
            {id: 5, name: 'Huawei'},
            {id: 6, name: 'Nokia'},
        
      ],
      saveId: '',
      buyNow1: [],
      countActive: [false],

    },
    reducers: {
        setSaveId: (state, action) =>{
            state.saveId = action.payload
            localStorage.setItem('phones1',JSON.stringify(state.saveId))

        },
        onPhone1Render:(state, action)=>{
            state.saveId = action.payload
        },
        setBuyNow1: (state, action) => {
            state.buyNow1.push(action.payload)
            localStorage.setItem('phones',JSON.stringify(state.buyNow1))
        },
        onRenderBasket: (state,action)=>{
            state.buyNow1 = action.payload
        },
        setBuyNow: (state,action) =>{
            state.buyNow1 = [];
            state.prices = 0
        },
        deleteBuyNow: (state, action) =>{
            state.buyNow1.splice(action.payload, 1)
        },
        onRenderBasketDelete:(state, action)=>{
            console.log(action.payload);
        },
        setCountActive: (state, action)=>{
            state.countActive.push(action.payload)
        },
        setCountActiveId: (state, action)=>{
            state.countActive[action.payload]=false
        },
        setCountActiveTrue: (state, action)=>{
            state.countActive[action.payload]=true
        },

    }
});

export const {setSaveId, 
              setBuyNow, 
              onRenderBasket,
              onRenderBasketDelete,
              
              
              
               
               
               
              
              onPhone1Render,
               
               
              setBuyNow1, 
              deleteBuyNow, 
              setCountActive, 
              setCountActiveId, 
              setCountActiveTrue} = a.actions
export default a.reducer