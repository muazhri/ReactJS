import Button from "../Elements/Button";

const CardProducts = (props) => {
    const {children} = props;
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg">
      {children}
    </div>
  );
};

const Header = (props) => {
    const {gambar} = props;
  return (
    <a href="#">
      <img
        src={gambar}
        alt="product"
        className=" rounded-t-lg  object-cover object-center p-8"
      />
    </a>
  );
};

const Body = (props) => {
    const {children, title} = props;
  return (
    <div className="px-5 pb-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-900">
        {title}
      </h5>
      <p className="mb-3 font-normal text-slate-400">
        {children}
      </p>
    </div>
  );
};


const Footer = (props) => {
    const {harga} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
    <span className="text-2xl font-bold text-indigo-900">
      {harga}
    </span>
    <Button classname="bg-indigo-800 p-2">Add to cart</Button>
  </div>
  )
}


CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer

export default CardProducts;
