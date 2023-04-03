import { useEffect, useState } from "react";
import AdminPage from "./AdminPage";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllPlacePage(){
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('/places').then(response => {
          setPlaces(response.data);
        });
      }, []);
    return(
        <div>
            <AdminPage />
            <div className="mt-8 ml-20 mr-20 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 ">
        {places.length > 0 && places.map(place => (
          <Link to={'/place/'+place._id} >
            <div className="w-70 h-30 bg-gray-500 rounded-2xl">
            {place.photos?.[0] && (
              <img className="rounded-2xl object-cover" src={'http://localhost:4000/'+place.photos?.[0]} alt=""/>
            )}
            </div>
            <h2 className="font-bold ">{place.title}</h2>
            <h3 className="text-sm text-gray-500">{place.address}</h3>
            <div className="mt-5">
           <button className="inline-flex bg-primary gap-1 py-2 px-6 rounded-full" >
                Delete
            </button>
            <button className="ml-20 inline-flex gap-1 py-2 px-6 rounded-full" >
                Details
            </button>
           </div> 
          </Link >
        ))}
       </div>
        </div>
    );
}