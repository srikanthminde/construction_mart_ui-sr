import React from "react";
import { useFormik } from "formik";
import { useAddNewProductMutation } from "../../services/product.services";
import { Outlet } from "react-router-dom";
function AddProduct() {
  var [AddNewProductFn] = useAddNewProductMutation();
  var addProductsForm = useFormik({
    initialValues: {
      name: "",
      price: "",
      imgUrl: "",
      company: "",
      category: "",
    },
    onSubmit: (values) => {
      AddNewProductFn(values).then(() => {
        alert("Product Osthundhi Okna!!!");
      });
    },
    // onSubmit:(values)=>{
    //     AddNewProductFn(values).then(()=>{alert("Product Osthundhi Ok")})
    // },
  });
  return (
    <div>
      <form onSubmit={addProductsForm.handleSubmit}>
        <div class="form-row">
          <div class="col">
            <input
              type="text"

              class="form-control " 
              placeholder=" name"
              {...addProductsForm.getFieldProps("name")}
            />
             &nbsp;
          </div>
          <div class="col">
            <input
              type="text"
              class="form-control"
              placeholder="price"
              {...addProductsForm.getFieldProps("price")}
            />
             &nbsp;
          </div>
        </div>
        <div class="col"><input 
         type="text"
            class="form-control"
            placeholder="image"
            {...addProductsForm.getFieldProps("imgUrl")}
          />
        </div>
        &nbsp;
        <div class="col">
          <input
            type="text"
            class="form-control"placeholder="company"{...addProductsForm.getFieldProps("company")}
          />
        </div>
        &nbsp; 
        {/* <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="category"
            {...addProductsForm.getFieldProps("category")}
          />
        </div> */}
        <select class="form-select" aria-label="Default select example">
      
          <option selected>Please Select Category</option>
          
          <option value="1">Cement</option>
          <option value="1">Stone</option>
          <option value="1">Sand</option>

        </select>
        
   
        <button  class="btn btn-outline-success" >Save Products</button>
      </form>
      &nbsp;&nbsp;
    </div>
    

  );
}

export default AddProduct;
