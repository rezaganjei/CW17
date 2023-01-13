import React, { useState } from "react";

const PopUp = (props) => {
    return (<>
        {
            props.modalIsOpen?
                <div className = "pop-up fixed w-4/5 border border-black border-2 fixed h-4/5 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white flex">
      < div className = "left w-1/2 h-full" >
        <div className="w-full h-full">
            <img className="h-full" src={props.image} />
        </div>
      </div >
    <div className="right w-1/2 p-3 flex flex-col gap-7">
        <div className="title text-center flex justify-between items-center mt-6">
            <h2>{props.title}</h2>
            <button className="bg-gray-300 border border-1 border-black p-1 mx-3" onClick={()=>props.changeModalState() }>X</button>
        </div>
        <div className="">
            <p>{props.info}</p>
        </div>
        <div className="flex justify-between items-center">
            <p>Price <span>${props.price}</span></p>
            <button className="bg-yellow-500 p-2">
                Add to Card
            </button>        </div>
    </div>
    </div >
    : <></>}
    
  </>);
};
export default PopUp;
