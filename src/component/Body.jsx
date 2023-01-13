import Product from "./Product";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { useState } from "react";

const Body = (props) => {
  const data = [
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "10",
      size: ["xs", "s", "l"],
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "16",
      size: ["xs", "s", "l"],
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "15",
      size: ["xs", "s", "l"],
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "14",
      size: ["xs", "s", "l"],
    },
    {
      title: "Midi sundress with ruched front",
      img: "../assets/dress3.jpg",
      price: "13",
      size: ["xs", "s", "l"],
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
          {data.map((item, index) => {
            return (
              <Product
                order={orders}
                title={item.title}
                price={item.price}
                img={item.img}
                size={item.size}
                addToCard={() => {
                  const findItem = order.find(itemFind => itemFind.id == index)
                  if (findItem !== undefined){
                    findItem["totalNum"] += 1
                    findItem["totalPrice"] += parseFloat(item.price)
                  }else {
                    item["id"] = index
                    item["totalPrice"] = parseFloat(item.price)
                    item["totalNum"] = 1
                    order.push(item)}
                  const temp = [...order]
                  setOrder(temp)
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/4 px-4">
        <div className="flex flex-col gap-2 justify-between m-2 border-b-2 border-gray-500 p-2">
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
          }):"")
          }
        </div>
        <div className="flex flex-col">
          <div className="flex justify-around mt-4 items-center">
            <div>
              Total: <span></span>
            </div>
            <button className="bg-yellow-500 p-2">Proceed</button>
          </div>
          <Checkout />
        </div>
      </div>
    </div>
  );
};
export default Body;
