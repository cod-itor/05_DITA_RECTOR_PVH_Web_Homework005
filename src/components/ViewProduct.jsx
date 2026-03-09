import React from "react";
import { items } from "@/data/Item";
import Image from "next/image";




const ViewProduct = () => {
  
  return (
    <div className="">
      {items.map((items , index) => (
     <div className='flex'>
        <div>
            <p className="bg-red-400 p-3x">
              here is the image
            </p>
            <div className="flex ">
                <div>
                    <h1>Wireless Mouse</h1>
                    <p>price</p>
                    <i>icon</i>
                </div>
                <p>Ergonomic wireless </p>
            </div>

        </div>
        <div>
            <button>View</button>
        </div>

    </div>


      ))}

    </div>
  );
};

export default ViewProduct;
