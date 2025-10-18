import "./App.css";
import RegisterBlock from "./components/RegisterBlock";
import WinnersBlock from "./components/WinnersBlock";

function App() {
    return (
        <>
            <div className="flex flex-col items-center w-5xl gap-8">
                <WinnersBlock />
                <RegisterBlock />
            </div>
        </>
    );
}

export default App;
