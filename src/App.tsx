import "./App.css";
import RegisterBlock from "./components/RegisterBlock";
import WinnersBlock from "./components/WinnersBlock";
import UsersBlock from "./components/UsersBlock";
import User from "./User";
import { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState(Array<User>());
    const [winners, setWinners] = useState(Array<User>());
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        function getUsers() {
            const userStorage = localStorage.getItem("users");
            const idStorage = localStorage.getItem("id");
            if (userStorage && idStorage) {
                setUsers(JSON.parse(userStorage) as User[]);
                setUserId(Number(idStorage));
            }
        }

        getUsers();
    }, []);

    function addUser(
        name: string,
        birth: string,
        email: string,
        phone: string,
    ) {
        const user = new User(userId, name, birth, email, phone);
        const newUsers = [...users, user];
        setUsers(newUsers);
        setUserId(userId + 1);

        localStorage.setItem("users", JSON.stringify(newUsers));
        localStorage.setItem("id", (userId + 1).toString());
    }

    function addWinner() {
        let winner: User;
        do {
            winner = users[Math.round(Math.random() * (users.length - 1))];
        } while (winners.includes(winner));

        setWinners([...winners, winner]);
    }

    function removeWinner(id: number) {
        const newWinners = winners.filter((winner) => winner.id != id);
        setWinners(newWinners);
    }

    return (
        <>
            <div className="flex flex-col items-center w-5xl gap-8">
                <WinnersBlock
                    winners={winners}
                    addWinner={addWinner}
                    removeWinner={removeWinner}
                    usersAmount={users.length}
                />
                <RegisterBlock addUser={addUser} />
                <UsersBlock users={users} />
            </div>
        </>
    );
}

export default App;
