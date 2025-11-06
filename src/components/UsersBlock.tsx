import { useState } from "react";
import User from "../User";
import Modal from "./Modal";
import UserRow from "./UserRow";

export default function UsersBlock(props: propsInterface) {
    const [modal, setModal]= useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedUser, setSelectedUser] = useState(new User(0, '', '','',''));
    
    const closeModal = () => setModal(false);

    return (
        <div className="w-full bg-white border border-gray-300 rounded-md flex gap-7 p-6">
            <table className="w-full table-fixed">
                <thead className="border-b border-b-gray-300">
                    <tr>
                        <th className="py-3 w-[5%] text-gray-400">#</th>
                        <th className="w-[15%] pl-3 text-start">Name</th>
                        <th className="w-[20%]">Date of Birth</th>
                        <th className="w-[20%]">Email</th>
                        <th className="w-[20%]">Phone number</th>
                        <th className="w-[10%]"></th>
                        <th className="w-[10%]"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map((usr, i) => {
                        const openModal = (type: string) => {
                            setModal(true);
                            setModalType(type);
                            setSelectedUser(usr);
                        }

                        return <UserRow
                            user={usr}
                            last={i === props.users.length - 1}
                            key={usr.id}
                            openModal={openModal}
                        />
                    })}
                </tbody>
            </table>
            <Modal active={modal} type={modalType} user={selectedUser} closeModal={closeModal} />
        </div>
    );
}

interface propsInterface {
    users: User[];
    editUser: (old: User, newUser: User) => void;
    deleteUser: (id: number) => void;
}
