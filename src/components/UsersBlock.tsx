import { useState } from "react";
import User from "../User";
import Modal from "./Modal";
import UserRow from "./UserRow";
import SearchBar from "./SearchBar";

export default function UsersBlock(props: propsInterface) {
    const [modal, setModal]= useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedUser, setSelectedUser] = useState(new User(0, '', '','',''));
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');
    const [timeoutId, setTimeoutId] = useState(0);
    const filtered = props.users.filter(usr => usr.name.toLowerCase().includes(filter.toLowerCase()));
    
    switch(sort) {
        case 'az':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'za':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'date':
            filtered.sort((a, b) => Date.parse(a.birth) - Date.parse(b.birth));
            break;
        case 'etad':
            filtered.sort((a, b) => Date.parse(b.birth) - Date.parse(a.birth));
            break;
    }
    
    const updateFilter = (value: string) => {
        clearTimeout(timeoutId);
        setTimeoutId(
            setTimeout(() => {
                setFilter(value);
            }, 500)
        )
    }
    
    const closeModal = () => setModal(false);

    return (
        <div className="w-full bg-white border border-gray-300 rounded-md flex flex-col gap-7 p-6">
            <div className="flex w-full items-center gap-3">
                <SearchBar updateFilter={updateFilter} />
                <i className="fa fa-sort-alpha-asc text-cyan-600 hover:text-cyan-700 hover:cursor-pointer px-3" 
                onClick={() => setSort('az')} />
                <i className="fa fa-sort-alpha-desc text-cyan-600 hover:text-cyan-700 hover:cursor-pointer px-3" 
                onClick={() => setSort('za')} />
                <i className="fa fa-sort-amount-asc text-cyan-600 hover:text-cyan-700 hover:cursor-pointer px-3" 
                onClick={() => setSort('date')} />
                <i className="fa fa-sort-amount-desc text-cyan-600 hover:text-cyan-700 hover:cursor-pointer px-3" 
                onClick={() => setSort('etad')} />
            </div>
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
                    {filtered.map((usr, i) => {
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
            <Modal active={modal} type={modalType} user={selectedUser} closeModal={closeModal}
            editUser={props.editUser} deleteUser={props.deleteUser} />
        </div>
    );
}

interface propsInterface {
    users: User[];
    editUser: (id: number, newUser: User) => void;
    deleteUser: (id: number) => void;
}
