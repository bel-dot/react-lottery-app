export default function UsersBlock() {
    return (
        <div className="w-full bg-white border border-gray-300 rounded-md flex gap-7 p-6">
            <table className="w-full table-fixed">
                <thead className="border-b border-b-gray-300">
                    <tr>
                        <th className="py-3 w-[5%]">#</th>
                        <th className="w-[35%] pl-3 text-start">Name</th>
                        <th className="w-[20%]">Date of Birth</th>
                        <th className="w-[20%]">Email</th>
                        <th className="w-[20%]">Phone number</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}
