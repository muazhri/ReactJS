const AuthLayout = (props) => {
    const {children, title } = props;
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-400 mb-6">
          Welcome Klik Enter Your Detail
        </p>
        {children}
      </div>
    </div>
    )
}

export default AuthLayout