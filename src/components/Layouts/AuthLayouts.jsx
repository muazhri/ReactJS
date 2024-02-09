import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-400 mb-6">
          Welcome Klik Enter Your Detail
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};


const Navigation = ({type}) => {
  if (type === 'login') {
    return (
      <p className="text-slate-400 py-2 justify-center flex gap-2 mt-5">Belum punya akun?
      <Link to="/register" className="text-blue-600 font-medium">Register</Link>
  </p>
    )
  } else {
    return (
      <p className="text-slate-400 py-2 justify-center flex gap-2 mt-5">Sudah punya akun?
      <Link to="/login" className="text-blue-600 font-medium">Login</Link>
      </p>
    )
  }
}

export default AuthLayout;
