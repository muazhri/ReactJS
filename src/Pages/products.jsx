import { Fragment } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Button from "../components/Elements/Button";


const products = [
  {
    id: 1,
    gambar: "/haji-1.jpg",
    name: "Paket Haji 1",
    description:
      "Berangkat haji dengan harga terjangkau kapan lagi nggak Join Rugiiii Dongg...",
    harga: "Rp. 50.000.000",
  },
  {
    id: 2,
    gambar: "/haji-1.jpg",
    name: "Paket Haji 2",
    description:
      "Berangkat haji dengan harga terjangkau kapan lagi nggak Join Rugiiii Dongg",
    harga: "Rp. 60.000.000",
  },
  {
    id: 3,
    gambar: "/haji-1.jpg",
    name: "Paket Haji 3 ",
    description:
      "Berangkat haji dengan harga terjangkau kapan lagi nggak Join Rugiiii Dongg",
    harga: "Rp. 90.000.000",
  },
];

const email = localStorage.getItem("email")


const handleLogout = () => {
    localStorage.removeItem("email"),
    localStorage.removeItem("password"),
    window.location.href = "/login"
}

const ProductPage = () => {
  return (
    <Fragment>
      <div className="flex bg-blue-600 items-center p-4 justify-end px-10 gap-10">
        <h1 className="text-md font-bold text-white justify-center">
          {email}
        </h1>
        <Button classname="bg-red-600 px-4" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center items-center h-screen gap-4">
        {products.map((product) => (
          // eslint-disable-next-line react/jsx-key
          <CardProducts key={product.id}>
            <CardProducts.Header gambar={product.gambar} />

            <CardProducts.Body name={product.name}>
              {product.description}
            </CardProducts.Body>

            <CardProducts.Footer harga={product.harga} />
          </CardProducts>
        ))}
        ;
      </div>
    </Fragment>
  );
};

export default ProductPage;
