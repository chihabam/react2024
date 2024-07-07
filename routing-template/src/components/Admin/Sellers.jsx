import React, {useEffect, useState} from "react";
import axios from "axios";
import apiClient from "../../utils/api-client";

const Sellers = () => {
    const [name,setName]= useState("")
    const [sellers,setSellers]= useState([])
    const [errors,setErrors]= useState("")
    const [isLoading,setIsLoading]= useState(false)

    useEffect(()=>{
        fetchSellers()
    },[])

    const fetchSellers= async()=>{
        setIsLoading(true)
        try {
            const res = await apiClient.get(`/users`)
        .then((res)=>{
                setSellers(res.data)
                setIsLoading(false)}
            )      
        } catch (err) {
                setIsLoading(false);
                setErrors(err.message)   
        } 
    }
    
    return <>
        <h3>Admin Sellers Page</h3>
        <input type="text" onChange={e=>setName(e.target.value)}></input>
        {isLoading && <h3>Loading...</h3>}
        {errors && <em>{errors}</em>}
        {
            sellers.map((seller)=>(<p key={seller.id}>{seller.name}</p>))
        }
    </>;
};

export default Sellers;
