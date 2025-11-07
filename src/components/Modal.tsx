import Button from "./Button"
import User from "../User"
import EditForm from "./EditForm"
import { useEffect } from "react"

export default function Modal(props: propsInterface) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if(e.key.toLowerCase() === 'escape') {
                props.closeModal();
            }
        }
        console.log(props.user.email, props.user.birth, props.user.id);

        window.addEventListener('keydown', handleKey);
        
        return () => window.removeEventListener('keydown', handleKey);
    })

    let content = <></>
    switch(props.type) {
        case 'edit':
            content = <>
                <div className="flex justify-between w-full">
                    <h2 className="text-2xl font-bold">Edit user #{props.user.id}</h2>
                    <button onClick={props.closeModal} className="bg-transparent hover:cursor-pointer">
                        <i className="fa fa-remove text-gray-500"></i>
                    </button>
                </div>
                <EditForm user={props.user} editUser={props.editUser} closeModal={props.closeModal} />
            </>
            break;
        case 'delete':
            content = <>
                <h2 className="text-2xl font-bold">Delete user #{props.user.id}</h2>
                <p className="py-5">Are you sure you want to delete {props.user.name} {props.user.email}?</p>
                <div className="flex gap-3 float-right">
                <Button type='button' handleClick={props.closeModal}>
                    No
                </Button>
                <Button type='button' handleClick={() => {
                    if(props.deleteUser)
                        props.deleteUser(props.user.id);
                    props.closeModal();
                }}>
                    Yes                    
                </Button>
                </div>
            </>
    }
    if(props.active) {
        document.getElementById('modal')?.classList.remove('hidden');
        document.getElementById('overlay')?.classList.remove('hidden');
    }
    else {
        document.getElementById('modal')?.classList.add('hidden');
        document.getElementById('overlay')?.classList.add('hidden');
    }

    return <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 hidden" id="overlay">
        <div className="p-5 bg-white rounded-md border border-gray-600 
        fixed top-[50%] left-[50%] translate-[-50%] hidden
        w-150" id="modal">
            {content}
        </div>
    </div> 
}

interface propsInterface {
    type: string,
    user: User,
    active: boolean,
    editUser: (id: number, newUser: User) => boolean,
    deleteUser: (id: number) => void
    closeModal: () => void;
}