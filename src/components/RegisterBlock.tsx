import RegisterForm from "./RegisterForm";

export default function RegisterBlock() {
    return (
        <div className="w-full bg-white border border-gray-300 rounded-md p-6">
            <h1 className="uppercase font-bold text-xl">Register form</h1>
            <p className="text-gray-400 text-lg">
                Please fill in all the fields.
            </p>
            <RegisterForm />
        </div>
    );
}
