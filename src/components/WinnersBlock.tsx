import Button from "./Button";
import WinnerTag from "./WinnerTag";
import User from "../User";

export default function WinnersBlock(props: propsInterface) {
    return (
        <div className="w-full bg-white border border-gray-300 rounded-md flex gap-7 p-6">
            <div className="border border-gray-300 rounded-sm p-3 w-full flex gap-3 items-center">
                {props.winners.map((usr) => (
                    <WinnerTag
                        user={usr}
                        key={usr.id}
                        remove={props.removeWinner}
                    />
                ))}
                <span className="text-gray-400">Winners</span>
            </div>
            <Button
                type="button"
                handleClick={props.addWinner}
                disabled={
                    props.usersAmount === 0 ||
                    props.winners.length === 3 ||
                    props.winners.length === props.usersAmount
                }
            >
                New winner
            </Button>
        </div>
    );
}

interface propsInterface {
    winners: User[];
    usersAmount: number;
    addWinner: () => void;
    removeWinner: (id: number) => void;
}
