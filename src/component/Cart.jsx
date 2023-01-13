const Cart = () => {
  return (
    <div className="flex justify-between">
      <div className="w-16">
        <img src="../assets/dress3.jpg"></img>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div>cami maxi dress in polka dot</div>
        <div className="flex items-center gap-2">
          <div>$25.50</div> <span>X2</span>
          <button className="bg-gray-200 p-3 border border-gray-300">
            remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
