import PopUp from "./PopUp";
import { useState } from "react";

const Product = (props) => {
  console.log(props.info);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function changeModalState(){
    setModalIsOpen(false)
  }

  return (
    <>

    <PopUp modalIsOpen={modalIsOpen} changeModalState={changeModalState} image={props.img} title={props.title} size={props.size} info={props.info} price={props.price}/>
    <div className="flex flex-col gap-3 py-4 w-1/3 p-2">
      <div>
        {" "}
        <img src={props.img}></img>
      </div>
      <div className="text-center hover:text-orange-400 hover:cursor-pointer" onClick={()=>setModalIsOpen(true)} >
        {props.title}
      </div>
      <div className="flex justify-between items-center">
        <div>{props.price}</div>
        <button className="bg-yellow-500 p-2" onClick={() => props.order(props.price)}>
          Add to Card
        </button>
      </div>
    </div>
  </>);
};

export default Product;
