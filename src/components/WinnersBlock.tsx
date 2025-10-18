import Button from "./Button";

export default function WinnersBlock() {
    return (
        <div className="w-full bg-white border border-gray-300 rounded-md flex gap-7 p-6">
            <div className="border border-gray-300 rounded-sm p-3 w-full">
                <span className="text-gray-400">Winners</span>
            </div>
            <Button type="button">New winner</Button>
        </div>
    );
}
