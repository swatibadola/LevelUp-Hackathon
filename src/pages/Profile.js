import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Profile() {
    const { savedItems } = useContext(UserContext);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Saved Items</h2>
            <ul className="space-y-2">
                {savedItems.length === 0 ? (
                    <p className="text-gray-500">No saved items yet</p>
                ) : (
                    savedItems.map((item, index) => (
                        <li
                            key={index}
                            className="p-3 rounded bg-white dark:bg-gray-700 shadow">
                            {item.name}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}


export default Profile;