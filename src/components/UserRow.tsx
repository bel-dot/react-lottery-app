import type User from "../User";

export default function UserRow(props: propsInterface) {
    return (
        <tr className={props.last ? "" : "border-b border-b-gray-200"}>
            <td className="py-3 w-[10%] text-center text-gray-400">{props.user.id}</td>
            <td className="w-[30%] pl-3 text-left">{props.user.name}</td>
            <td className="w-[20%] text-center">{props.user.birth}</td>
            <td className="w-[20%] text-center">{props.user.email}</td>
            <td className="w-[20%] text-center">{props.user.phone}</td>
        </tr>
    );
}

interface propsInterface {
    user: User;
    last: boolean;
}
