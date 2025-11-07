import User from "../User";
import Button from "./Button";
import Input from "./Input";

export default function EditForm(props: propsInterface) {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const nameInput = document.getElementById("name-edit") as HTMLInputElement;
        const dateInput = document.getElementById("date-edit") as HTMLInputElement;
        const emailInput = document.getElementById("email-edit") as HTMLInputElement;
        const phoneInput = document.getElementById("phone-edit") as HTMLInputElement;

        const nameIcon = document.getElementById("name-edit-icon") as Element;
        const dateIcon = document.getElementById("date-edit-icon") as Element;
        const emailIcon = document.getElementById("email-edit-icon") as Element;
        const phoneIcon = document.getElementById("phone-edit-icon") as Element;

        const name = nameInput.value;
        const date = dateInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        const newUser = new User(props.user.id, name, date, email, phone);
        props.editUser(props.user.id, newUser);
        props.closeModal();


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

    return (
        <form className="mt-10" onSubmit={(e) => handleSubmit(e)} key={props.user.id}>
            <Input
                name="name-edit"
                value={props.user ? props.user.name : ''}
                type="text"
                placeholder="Enter user name"
                label="Name"
            />
            <Input
                name="date-edit"
                value={props.user ? props.user.birth : ''}
                type="date"
                placeholder="mm/dd/yyyy"
                label="Date of Birth"
                max={Date()}
                invalid="You can't go back to the future!"
            />
            <Input
                name="email-edit"
                value={props.user ? props.user.email : ''}
                type="email"
                placeholder="Enter email"
                label="Email"
                pattern="\w+@\w+\.\w+"
                invalid="The email is invalid"
            />
            <Input
                name="phone-edit"
                value={props.user ? props.user.phone : ''}
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
    editUser: (
        id: number,
        newUser: User
    ) => void
    user: User;
    closeModal: () => void;
}
