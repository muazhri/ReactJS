import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <FormLogin />
            <p className="text-slate-400 py-2 justify-center flex gap-2 mt-5">Belum punya akun?
                <Link to="/register" className="text-blue-600 font-medium">Register</Link>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;