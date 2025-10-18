import { useRef, useState } from "react";

export default function RegisterInput(props: propsInterface) {
    const inputField = useRef(null);
    const feedback = useRef(null);
    const icon = useRef(null);
    const [timeoutId, setTimeoutId] = useState(0);

    function validate() {
        if (inputField.current && feedback.current) {
            const value = (inputField.current as HTMLInputElement).value;
            const fb = feedback.current as Element;

            if (value === "") {
                fb.textContent = "This field is required.";
                return false;
            } else if (
                !props.pattern.test(value) ||
                (props.type === "date" &&
                    Date.parse(value) > Date.parse(props.max))
            ) {
                fb.textContent = props.invalid;
                return false;
            } else {
                fb.textContent = "";
                return true;
            }
        }
    }

    function handleInput() {
        clearTimeout(timeoutId);

        setTimeoutId(
            setTimeout(() => {
                if (inputField.current && icon.current) {
                    const input = inputField.current as HTMLInputElement;
                    const i = icon.current as Element;

                    if (validate()) {
                        input.classList.remove("border-red-400");
                        input.classList.remove("border-gray-300");
                        input.classList.add("border-green-400");

                        i.classList.add("opacity-100");
                        i.classList.remove("opacity-0");
                    } else {
                        input.classList.remove("border-green-400");
                        input.classList.remove("border-gray-300");
                        input.classList.add("border-red-400");

                        i.classList.remove("opacity-100");
                        i.classList.add("opacity-0");
                    }
                }
            }, 1000),
        );
    }

    return (
        <div className="flex flex-col gap-1 relative">
            <label className="font-bold text-xl">{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                id={props.name}
                ref={inputField}
                required
                onInput={handleInput}
                className="border-gray-300 border rounded-sm p-3 bg-gray-50 transition-colors"
                pattern={props.pattern.toString()}
                max={props.max}
            />
            <i
                className={`fa fa-check fa-lg text-green-500 absolute ${props.type != "date" ? "right-3" : "right-10"} bottom-5.5 transition-opacity opacity-0`}
                ref={icon}
                id={`${props.name}-icon`}
            />
            <small
                ref={feedback}
                className="text-red-500"
                id={`${props.name}-feedback`}
            ></small>
        </div>
    );
}

interface propsInterface {
    name: string;
    label: string;
    type: string;
    pattern: RegExp;
    placeholder: string;
    max: string;
    invalid: string;
}
