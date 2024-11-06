const Payment=({cart,total})=>{
    return(
        <>
        <div className="container p-3 shadow rounded w-100">
            <h4 className="text-center fw-bold">Payment</h4>
            <div className="container p-3">
            {cart.map((value)=>(
                <>
                <div className="d-flex justify-content-between">
                <h6 key={value.id}>{value.productname}</h6>
                <h6 >{value.productprice.toFixed(2)}</h6>
                </div>
                <hr />
                </>
            ))}
             <div className="d-flex justify-content-between">
             <h5 className="fw-bold">Total</h5>
             <h5 className="fw-bold"><small>{total.toFixed(2)}</small></h5>
             </div>

             <div className="d-flex justify-content-center align-items-center mt-4">
  <button className="btn btn-success">Confirm</button>
</div>

            </div>
           

        </div>
        </>
    )
}

export default Payment