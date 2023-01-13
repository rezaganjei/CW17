const Product = (props) => {
  return (
    <div className="flex flex-col gap-3 py-4 w-1/3 p-2">
      <div>
        {" "}
        <img src={props.img}></img>
      </div>
      <div className="text-center hover:text-orange-400 hover:cursor-pointer">
        {props.title}
      </div>
      <div className="flex justify-between items-center">
        <div>{props.price}</div>
        <button className="bg-yellow-500 p-2" onClick={() => props.order(props.price)}>
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
