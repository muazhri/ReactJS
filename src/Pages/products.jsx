import CardProducts from "../components/Fragments/CardProducts";

const ProductPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CardProducts>
        <CardProducts.Header gambar="/haji-1.jpg"></CardProducts.Header>

        <CardProducts.Body title="Paket Haji 1">
          Berangkat haji dengan harga terjangkau kapan lagi nggak Join Rugiiii
          Dongg...
        </CardProducts.Body>

        <CardProducts.Footer harga="Rp. 50.000.000"></CardProducts.Footer>
      </CardProducts>
    </div>
  );
};

export default ProductPage;
