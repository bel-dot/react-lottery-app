import User from "../User";

export default function WinnerTag(props: propsInterface) {
    return (
        <div className="py-1 px-2 bg-cyan-500 text-white font-bold rounded-sm flex items-center">
            <span className="pr-2">{props.user.name}</span>
            <button
                className="border-0 bg-transparent text-white size-5 cursor-pointer"
                onClick={() => props.remove(props.user.id)}
            >
                <i className="fa fa-remove"></i>
            </button>
        </div>
    );
}

interface propsInterface {
    user: User;
    remove: (id: number) => void;
}
