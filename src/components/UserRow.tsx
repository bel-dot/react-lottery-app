import type User from "../User";
import Button from "./Button";

export default function UserRow(props: propsInterface) {
    return (
        <tr className={props.last ? "" : "border-b border-b-gray-200"}>
            <td className="py-3 w-[10%] text-center text-gray-400">{props.user.id}</td>
            <td className="w-[20%] pl-3 text-left">{props.user.name}</td>
            <td className="w-[20%] text-center">{props.user.birth}</td>
            <td className="w-[20%] text-center">{props.user.email}</td>
            <td className="w-[20%] text-center">{props.user.phone}</td>
            <td className="w-[10%] mr-3 mb-3">
                <Button type='button' handleClick={() => props.openModal('edit')}>
                    <i className="fa fa-pencil text-white"></i>
                </Button>
            </td>
            <td className="w-[10%] mb-3">
                <Button type='button' handleClick={() => props.openModal('delete')}>
                    <i className="fa fa-remove text-red-600"></i>
                </Button>
            </td>
        </tr>
    );
}

interface propsInterface {
    user: User;
    last: boolean;
    openModal: (type: string) => void;
}
