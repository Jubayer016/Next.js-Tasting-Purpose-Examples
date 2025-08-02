import ProudctCard from "@/Components/ProudctCard";

const page = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  console.log(data);

  return (
    <div className="font-poppins">
      <div className=" grid grid-cols-4">
        {data.products.map((product) => (
          <ProudctCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default page;
