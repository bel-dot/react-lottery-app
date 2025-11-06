import Button from "./Button"
import User from "../User"
import RegisterForm from "./RegisterForm"

export default function Modal(props: propsInterface) {
    let content = <></>
    switch(props.type) {
        case 'edit':
            content = <>
                <h2>Edit user #{props.user.id}</h2>
                <RegisterForm user={props.user} editUser={props.editUser} />
            </>
            break;
        case 'delete':
            content = <>
                <h2>Delete user #{props.user.id}</h2>
                <p>Are you sure you want to delete {props.user.name} {props.user.email}?</p>
                <Button type='button' handleClick={props.closeModal}>
                    No
                </Button>
                <Button type='button' handleClick={() => {
                    if(props.deleteUser)
                        props.deleteUser(props.user.id);
                }}>
                    Yes
                </Button>
            </>
    }
    if(props.active) {
        document.getElementById('modal')?.classList.remove('hidden');
    }
    else {
        document.getElementById('modal')?.classList.add('hidden');
    }

    return <div className="w-screen h-screen bg-black opacity-50 absolute top-0 left-0 grid place-items-center">
        <div className="p-5 bg-white rounded-sm border border-gray-600 hidden" id="modal">
            {content}
        </div>
    </div> 
}

interface propsInterface {
    type: string,
    user: User,
    active: boolean,
    editUser?: (old: User, newUser: User) => void,
    deleteUser?: (id: number) => void
    closeModal: () => void;
}