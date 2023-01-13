const Cart = (props) => {
  return (
    <div className="flex justify-between">
      <div className="w-16">
        <img src="../assets/dress3.jpg"></img>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div>{props.name}</div>
        <div className="flex items-center gap-2">
          <div>${props.totalPrice}</div> <span>X{props.totalNum}</span>
          <button className="bg-gray-200 p-3 border border-gray-300" onClick={() => props.removingItem()}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
