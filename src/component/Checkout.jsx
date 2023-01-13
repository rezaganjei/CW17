const Checkout = (props) => {
  return (
    <form className="w-full flex flex-col gap-4 ">
      <div className="flex flex-col">
        <label>Email</label>
        <input type={"email"} className="border border-gray-600 py-2"></input>
      </div>
      <div className="flex flex-col">
        <label>Name</label>
        <input type={"text"} className="border border-gray-600 py-2"></input>
      </div>
      <div className="flex flex-col">
        <label>Address</label>
        <input type={"text"} className="border border-gray-600 py-2"></input>
      </div>
      <div className="w-full mt-4">
        <input
          type={"submit"}
          value={"Checkout"}
          className="bg-yellow-500 p-2 w-full"
        ></input>
      </div>
    </form>
  );
};

export default Checkout;
