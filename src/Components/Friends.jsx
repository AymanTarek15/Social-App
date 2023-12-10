import { useEffect, useRef, useState } from "react";

function Friends() {
    const [users, setUsers] = useState([]);
    const [clickedFriendMessage, setClickedFriendMessage] = useState(null);
    const [input, setInput] = useState("")
    const [messageSent, setMessageSent] = useState([])
    const yourButtonRef = useRef(null)

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data.users))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    function handleClick(e) {
        const friendMessage = e.target.textContent;
        setClickedFriendMessage(friendMessage);
    }

    function handleInputChange(e) {
        const newInput = e.target.value
        setInput(newInput)
    }

    function handleSendClick() {
        if (input.trim() !== "") {
            setMessageSent((prevMessages) => [...prevMessages, input]);
            setInput("");
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // Prevent the default Enter key behavior (e.g., form submission)
            event.preventDefault();

            // Trigger the button click
            // handleClick();
            yourButtonRef.current.click();
        }
    };
    return (
        <section className="my-friends col-md-4 col-lg-3" id="my-friends">
            <div className="upper-contacts">
                <div>
                    <h2 className="text-primary">Contacts</h2>
                </div>
                <div className="friends-icons">
                    <a title="Search for a friend or group" href="#">
                        <i className="fa-solid fa-magnifying-glass fa-xl text-primary"></i>
                    </a>
                    <a title="Options" href="#">
                        <i className="fa-solid fa-ellipsis fa-xl text-primary"></i>
                    </a>
                </div>
            </div>
            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (
                users.map((element) => (
                    <a
                        onClick={handleClick}
                        key={element.id}
                        className="friends-select"
                        href="#"
                    >
                        <div className="friends-container">
                            <img src={element.image} alt="" />
                            <h3>
                                {element.firstName} {element.lastName}
                            </h3>
                        </div>
                    </a>
                ))
            )}
            {clickedFriendMessage && (
                <div className="messaging-field">
                    <div className="messaging-name bg-primary">
                        <h4 className="bg-primary">{clickedFriendMessage} </h4>
                        <button onClick={function () {
                            setClickedFriendMessage(null)
                        }}><i className="fa-solid fa-x"></i></button>
                        {/* <button type="button" class="btn-close" aria-label="Close"></button> */}

                    </div>

                    <div className="text-area">
                        {messageSent.map((message, index) => (
                            <p className="bg-primary message-sent" key={index}>{message}</p>
                        ))}

                    </div>

                    <div className="messaging-input">
                        <input onChange={handleInputChange} onKeyDown={handleKeyPress} type="text" name="" id="" value={input} />
                        <button ref={yourButtonRef} onClick={handleSendClick}><i className="fa-solid fa-paper-plane text-primary"></i></button>
                    </div>

                </div>
            )}
            <a className="new-message" title="New Message" href="">
                <i className="fa-solid fa-pen fa-xl text-primary"></i>
            </a>
        </section>
    );
}

export default Friends;
