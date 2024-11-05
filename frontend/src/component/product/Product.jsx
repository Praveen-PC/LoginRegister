import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [allproduct, setAllproduct] = useState([]);
  const [productname, setProductname] = useState("");
  const [productimage, setProductimage] = useState("");
  const [productprice, setProductprice] = useState("");
  const [editproduct,setEditproduct]=useState(null)

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/allproduct");
      setAllproduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [allproduct]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
    const endpoint=editproduct ?`http://localhost:5000/api/updateproduct/${editproduct.id}`:"http://localhost:5000/api/addproduct"
    const method=editproduct ? "put":"post"
      const response = await axios[method](endpoint,{ productname, productimage, productprice });
      console.log(response.data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const reset = () => {
    setProductname("");
    setProductimage("");
    setProductprice("");
    setEditproduct(null)
  };

  const handleEdit=(product)=>{
     setEditproduct(product)
     setProductname(product.productname)
     setProductimage(product.productimage)
     setProductprice(product.productprice)
  }

  const handleDelete=async(id)=>{
    try{
        const response=await axios.delete(`http://localhost:5000/api/deleteproduct/${id}`)
        console.log(response.data)
        fetchProduct()
    }
    catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/dashboard"} className="navbar-brand fw-bold" href="#">
            DashBoard
          </Link>
          <div className="text-primary ">
         
          </div>
        </div>
      </nav>

      <div className="p-3">
        <div className="d-flex justify-content-between p-3">
          <h3 className="fw-bold">Add New Product</h3>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            onClick={reset}
          >
            <i class="fa-solid fa-plus"></i>
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {editproduct ?"Edit Product":"Add Product"}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form onSubmit={handlesubmit}>
                    <div class="mb-3">
                      <label for="productname" class="col-form-label">
                        Product Name :
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="productname"
                        value={productname}
                        name="productname"
                        onChange={(e) => setProductname(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="productimage" class="col-form-label">
                        Product Image :
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                        name="productimage"
                        value={productimage}
                        onChange={(e) => setProductimage(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="productprice" class="col-form-label">
                        Product Price :
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="recipient-name"
                        name="productprice"
                        value={productprice}
                        onChange={(e) => setProductprice(e.target.value)}
                      />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" class="btn btn-primary">
                        {editproduct ? "Update":"Add"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-wrap justify-content-center">
  {allproduct.map((value) => (
    <div className="border p-3 rounded m-2 text-center shadow bg-body-tertiary" key={value.id} style={{ width: '15rem' }}>
      <img 
        src={value.productimage} 
        alt={value.productname} 
        className="img-fluid" 
        style={{ maxHeight: '200px', objectFit: 'cover' }} 
      />      
      <div className="d-flex gap-5  justify-content-center mt-3">
        <div>
        <h5>{value.productname}</h5>
        <h6>${value.productprice.toFixed(2)}</h6>
        </div>
     
     <div className="">
     <button
            type="button"
            class="btn border-0 text-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
            onClick={()=>handleEdit(value)}
          >
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
        <button className="btn border-0 text-danger" onClick={()=>handleDelete(value.id)} ><i class="fa-solid fa-trash"></i></button>
     </div>
      </div>
    </div>
  ))}
</div>

    </>
  );
};
export default Product;
