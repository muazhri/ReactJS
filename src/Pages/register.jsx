import AuthLayout from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister />
            <p className="text-slate-400 py-2 justify-center flex gap-2 mt-5">Sudah punya akun?
                <Link to="/login" className="text-blue-600 font-medium">Login</Link>
            </p>
        </AuthLayout>
    );
};

export default RegisterPage;