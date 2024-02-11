import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
    // console.log("Login");
  };
  return (
    <form className="pt-6" onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="Enter Your Email"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter Your Password"
        name="password"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
