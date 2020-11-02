import React from "react";
import SelectInput from "../toolbox/selectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="name"
        label="product"
        value={product.name}
        onChange={onChange}
       
      ></TextInput>
      <SelectInput
        name="categoryID"
        label="category"
        value={product.categoryID || ""} 
        defaultOption="seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text:  category.catagoryName
        }))}
        onChange={onChange}
      
      ></SelectInput>

      <TextInput
        name="unitPrice"
        label="unit price"
        value={product.unitPrice}
        onChange={onChange}
        

      ></TextInput>

      <TextInput
        name="quantityPerUnit"
        label="quantity per unit"
        value={product.quantityPerUnit}
        onChange={onChange}
        
      ></TextInput>

      <TextInput
        name="unitsInStock"
        label="Unit's in stock"
        value={product.unitsInStock}
        onChange={onChange}
      
      ></TextInput>

      <button type="submit" className="btn btn-success">
        Kaydet
      </button>
    </form>
  );
};
export default ProductDetail;
