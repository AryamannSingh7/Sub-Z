import React, { useState } from 'react';
import Categorie from './Categorie';
import backgroundImage from "../../../public/images/bg-img2.jpg";
const Category = () => {
    const [data, setData] = useState(Categorie);
    const filterResult = (catItem) => {
        const result = Categorie.filter((curData) => {
            return curData.Category === catItem;
        });
        setData(result);
    };

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
    };
    return (
        <>
            <div className="container-fluid mx-2 mt-2 pt-20" style={containerStyle}>
            <h1 className="text-center text-dark mt-10 mb-4" style={{ fontSize: '50px', fontFamily: 'Arial, sans-serif' }}>
        <u style={{ color: 'mediumseagreen', textDecoration: 'underline' }}>All Products</u>
    </h1>
                <div clasName="row mt-4 p-10 d-flex flex-wrap justify-content-between">
                    {/*<div className="col-md-2 d-flex flex-wrap justify-content-between">*/}
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => setData(Categorie)}>All</button>
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => filterResult('Cruciferous')}>Cruciferous </button>
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => filterResult('Marrow')}>Marrow</button>
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => filterResult('Root')}>Root </button>
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => filterResult('Alluim')} >Allium</button>
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => filterResult('Chilli')}>Chillies</button>
                        <button className="btn btn-success w-40 mt-10 ml-10" onClick={() => filterResult('Leafy')}>Leafy Green</button>
                  {/* </div> */} 
                             
                    {/*<div className="col-md-11 ml-12">*/}
                        <div className="row mt-20 text-center">
                            {data.map((values) => {
                                const { id, title, price, image } = values;
                                return (
                                    <>
                                        <div className="col-md-3 mb-4" key={id}>
                                            <div className="card">
                                                <img src={image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p>Price: {price}</p>
                                                    <p>1kg</p>
                                                    <p className="card-text"></p>
                                                    <button className="btn btn-success">Add to cart</button>
                                                </div>
                                            </div>
                                       </div> 
                                    </>
                                )
                            })}

                        {/*</div > */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Category
