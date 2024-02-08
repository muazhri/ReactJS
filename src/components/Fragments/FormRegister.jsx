import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="" className="pt-6">
      <InputForm
        label="Name"
        type="text"
        placeholder="Enter Your Fullname"
        name="name"
      />
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
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
