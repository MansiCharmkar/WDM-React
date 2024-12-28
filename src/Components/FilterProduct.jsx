import React from 'react'

const FilterProduct = () => {
    let product = [
        {id:1, title:"iphone-16", category:"mobiles", price:"24000"},
        {id:2, title:"HP probook", category:"laptops", price:"230000"},
        {id:3, title:"Mi tab", category:"tablets", price:"730000"},
        {id:4, title:"Sony Camera", category:"camera", price:"820000"},
        {id:5, title:"Galaxy S24 MAX", category:"mobiles", price:"820000"},
    ];

    const FilteredData = product.filter((data)=>data.category=="mobiles");
    console.log(FilteredData);
    
  return (
    <div>
      {FilteredData.map((data)=><div key={data.id}>
        <h1>{data.title}</h1>
        <p>{data.price}</p>
      </div>)}
    </div>
  );
};

export default FilterProduct
