export default function SearchBar(props: propsInterface) {
    return <div className="border border-gray-300 rounded-sm p-3 flex flex-1 gap-3 items-center">
        <i className="fa fa-search text-gray-700"></i>
        <input className="border-0 flex-1 focus:outline-0" name="search" placeholder="Search" 
        onInput={(e) => {
            const input = e.target as HTMLInputElement;
            props.updateFilter(input.value);
        }}/>
    </div>
}

interface propsInterface {
    updateFilter: (val: string) => void;
}