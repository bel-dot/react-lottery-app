import Button from "./Button";
import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
    return (
        <form className="mt-10">
            <RegisterInput
                name="name"
                type="text"
                placeholder="Enter user name"
                label="Name"
                max=""
                pattern={RegExp("")}
                invalid=""
            />
            <RegisterInput
                name="date"
                type="date"
                placeholder="mm/dd/yyyy"
                label="Date of Birth"
                max={Date()}
                pattern={RegExp("")}
                invalid="You can't go back to the future!"
            />
            <RegisterInput
                name="email"
                type="email"
                placeholder="Enter email"
                label="Email"
                max=""
                pattern={RegExp(/.*@.*\..*/)}
                invalid="The email is invalid"
            />
            <RegisterInput
                name="phone"
                type="tel"
                placeholder="Enter Phone number"
                label="Phone number"
                max=""
                pattern={RegExp(/\d{10}/)}
                invalid="The phone number is invalid"
            />
            <div className="mt-15 flex justify-end w-full">
                <Button type="submit">Save</Button>
            </div>
        </form>
    );
}
