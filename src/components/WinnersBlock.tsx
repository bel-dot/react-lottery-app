export default function WinnersBlock() {
    return (
        <div className="w-full bg-white border border-gray-300 rounded-md flex gap-7 p-6">
            <div className="border border-gray-300 rounded-sm p-3 w-full">
                <span className="text-gray-400">Winners</span>
            </div>
            <button className="bg-cyan-500 px-2 py-2 hover:bg-cyan-400 active:bg-cyan-600 transition-colors text-white cursor-pointer w-43 rounded-sm" 
            type="button">New winner</button>
        </div>
    )
}