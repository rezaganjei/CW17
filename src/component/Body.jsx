import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useState } from "react";
import PopUp from "./PopUp";

const Body = (props) => {
  const data = [
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "16",
      size: ["xs", "s", "l"],
      info:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "14",
      size: ["xs", "s", "l"],
      info:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "12",
      size: ["xs", "s", "l"],
      info:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "14",
      size: ["xs", "s", "l"],
      info:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "25",
      size: ["xs", "s", "l"],
      info:"This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
    },
  ];
  const orders = (order) => {
    console.log("test");
  };
  const [order, setOrder] = useState([]);
  return (
    <div className="flex ">
      <div className="w-3/4">
        <div className="flex justify-between m-2 border-b-2 border-gray-500 p-2">
          <p>6 Products </p>
          <div>
            <label htmlFor="">Order</label>
            <select className="border border-1">
              <option>Lowest</option>
              <option>Highest</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Order</label>
            <select className="border border-1">
              <option>All</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap">
          {data.map((item,index) => {
            return (
              <Product
                order={orders}
                title={item.title}
                price={item.price}
                img={item.img}
                size={item.size}
                info={item.info}
                addToCard={() => {
                const findItem = order.find(itemFind => itemFind.id === index)
                if (findItem !== undefined){
                  findItem["totalNum"] += 1
                  findItem["totalPrice"] += parseFloat(item.price)
                }else {
                  item["id"] = index
                  item["totalPrice"] = parseFloat(item.price)
                  item["totalNum"] = 1
                  order.push(item)
                }
                const temp = [...order]
                setOrder(temp)
              }}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/4 px-4">
        <div className="flex  flex-col gap-2 justify-between m-2 border-b-2 border-gray-500 p-2">
          { (order ? order.map((item, index) =>{
            return <Cart totalPrice={item.totalPrice} name={item.name} totalNum={item.totalNum} removingItem={()=>{
              if(item.totalNum === 1){
                order.splice(index, 1)
                const temp = [...order]
                setOrder(temp)
              }else {
                item.totalNum -= 1
                item.totalPrice -= item.price
                const temp = [...order]
                setOrder(temp)
              }
            }}/>
          }):"")}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-around mt-4 items-center">
            <div>
              Total: <span>${order.reduce((prev, value) => {
              return prev + value.totalPrice
            },0)}</span>
            </div>
            <button className="bg-yellow-500 p-2">Proceed</button>
          </div>
          <Checkout />
        </div>
      </div>
      <PopUp />
    </div>
  );
};
export default Body;
