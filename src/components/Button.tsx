export default function Button(props: propsInterface) {
    return <button type={props.type} 
        className="bg-cyan-500 px-7 py-3 text-lg text-nowrap hover:bg-cyan-400 active:bg-cyan-600 transition-colors text-white cursor-pointer rounded-sm"
    >{props.children}</button>
}

interface propsInterface {
    children: React.ReactNode;
    type: 'submit' | 'button';
}