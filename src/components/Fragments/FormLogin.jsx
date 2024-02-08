import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
    return (
        <form action="" className="pt-6">
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
        <Button classname="bg-blue-600 w-full">Login</Button>
      </form>
      
    )
}

export default FormLogin;