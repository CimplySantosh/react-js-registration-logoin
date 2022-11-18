
import "./prod.css"
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"



const Products = () => {
const navigate = useNavigate();

const [inputdata,setData] = useState({
    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNumber:"",
    Password:"",
    ConfirmPassword:""
})
const {FirstName,LastName,Email,PhoneNumber,Password,ConfirmPassword} = inputdata;
const data = e => {
    setData({...inputdata,[e.target.name]:[e.target.value]})
}

const submitHandle = e => {
    e.preventDefault()
    localStorage.setItem("regiration",JSON.stringify(inputdata));
    navigate("/loginfrom")
}


    return ( 
        <div className="list-group shadow reg-con">
            <div className="reg-con">
                <div className="row">
                    <div className="col-6 ml-4">
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="header mt-3">Registarion</h1>
                        </div>
                        <div className="d-flex flex-column justify-content-center mt-2 ml-4">
                        
                            <form className="form-group" onSubmit={submitHandle} >
                                <div className="mb-2">
                                <label className="label-head">First Name </label>
                                <input className="form-control input-tag" name="FirstName" value={FirstName} onChange={data} type="text" placeholder="First Name" />
                                </div>

                                <div className="mb-2">
                                <label className="label-head">Last Name </label>
                                <input className="form-control input-tag"  name="LastName" value={LastName} onChange={data} type="text" placeholder="Last Name"/>
                                </div>

                                <div className="mb-2">
                                <label className="label-head">Email </label>
                                <input className="form-control input-tag"  name="Email" value={Email} onChange={data} type="text" placeholder="Email"/>
                                </div>


                                <div className="mb-2">
                                <label className="label-head">Phone Number </label>
                                <input className="form-control input-tag"  name="PhoneNumber" value={PhoneNumber} onChange={data} type="text" placeholder="Phone Number"/>
                                </div>

                                <div className="mb-2">
                                <label className="label-head">Password </label>
                                <input className="form-control input-tag"  name="Password" value={Password} onChange={data} type="Password" placeholder="Password"  />
                                </div>

                                <div className="mb-2">
                                <label className="label-head"> Confirm Password </label>
                                <input className="form-control input-tag"  name="ConfirmPassword" value={ConfirmPassword} onChange={data} type="Password" placeholder="Confirm Password"/>
                                </div>

                                <div className="text-center mt-4">
                                <button className="btn btn-black" >Submit</button>
                                </div>

                            </form>
                            

                        </div>

                        

                        </div>
                        <div className="col-4 mt-5 ml-4 pl-4">
                            <div className="">
                                <img className="img-s" src="https://rozgarpatrika.com/wp-content/uploads/2019/07/systech-logo.png"  alt=""/>

                            </div>
                            <div className="">
                                <p className="text-center m-3">About Us</p>

                            </div>
                    
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Products;