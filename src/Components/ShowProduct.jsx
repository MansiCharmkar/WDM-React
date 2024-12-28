import React from 'react'

const ShowProduct = () => {
    let products=[
        {id:"001", title:"iphone-16", price:"220000"},
        {id:"002", title:"iphone-15", price:"120000"},
        {id:"003", title:"iphone-17", price:"340000"},
        {id:"004", title:"iphone-18", price:"240000"},
    ];
  return (
    <div>
      {products.map((data)=>(
        <div key={data.id}>
            <h2>Title : {data.title}</h2>
            <h2>Price : {data.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default ShowProduct;
