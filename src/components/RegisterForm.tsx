import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function RegisterForm(props: propsInterface) {
    const [email, setEmail] = useState(true);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const nameInput = document.getElementById("name") as HTMLInputElement;
        const dateInput = document.getElementById("date") as HTMLInputElement;
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const phoneInput = document.getElementById("phone") as HTMLInputElement;

        const nameIcon = document.getElementById("name-icon") as Element;
        const dateIcon = document.getElementById("date-icon") as Element;
        const emailIcon = document.getElementById("email-icon") as Element;
        const phoneIcon = document.getElementById("phone-icon") as Element;

        const name = nameInput.value;
        const date = dateInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        if(props.addUser(name, date, email, phone)) {
            nameInput.value = "";
            dateInput.value = "";
            emailInput.value = "";
            phoneInput.value = "";

            nameInput.classList.remove("border-green-400");
            nameInput.classList.add("border-gray-300");
            dateInput.classList.remove("border-green-400");
            dateInput.classList.add("border-gray-300");
            emailInput.classList.remove("border-green-400");
            emailInput.classList.add("border-gray-300");
            phoneInput.classList.remove("border-green-400");
            phoneInput.classList.add("border-gray-300");

            nameIcon.classList.remove("opacity-100");
            nameIcon.classList.add("opacity-0");
            dateIcon.classList.remove("opacity-100");
            dateIcon.classList.add("opacity-0");
            emailIcon.classList.remove("opacity-100");
            emailIcon.classList.add("opacity-0");
            phoneIcon.classList.remove("opacity-100");
            phoneIcon.classList.add("opacity-0");
        }
        else {
            emailInput.classList.remove("border-green-400");
            emailInput.classList.add("border-red-400");

            emailIcon.classList.remove("opacity-100");
            emailIcon.classList.add("opacity-0");

            setEmail(false);
        }
    }

    return (
        <form className="mt-10" onSubmit={(e) => handleSubmit(e)}>
            <Input
                name="name"
                type="text"
                placeholder="Enter user name"
                label="Name"
            />
            <Input
                name="date"
                type="date"
                placeholder="mm/dd/yyyy"
                label="Date of Birth"
                max={Date()}
                invalid="You can't go back to the future!"
            />
            <Input
                name="email"
                type="email"
                placeholder="Enter email"
                label="Email"
                pattern="\w+@\w+\.\w+"
                invalid={email ? "The email is invalid" : "The email is used by another user"}
            />
            <Input
                name="phone"
                type="tel"
                placeholder="Enter Phone number"
                label="Phone number"
                pattern="\d{10}"
                invalid="The phone number is invalid"
            />
            <div className="mt-15 flex justify-end w-full">
                <Button type="submit" handleClick={() => {}} disabled={false}>
                    Save
                </Button>
            </div>
        </form>
    );
}

interface propsInterface {
    addUser: (
        name: string,
        birth: string,
        email: string,
        phone: string,
    ) => boolean;
}
