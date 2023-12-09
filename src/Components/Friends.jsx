import { useEffect, useState } from "react"

function Friends() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => setUsers(data.users))
            .catch(error => console.error('Error fetching products:', error));
    }, []
    )

    return (
        <section className="my-friends col-md-4 col-lg-3">
            <div className="upper-contacts">
                <div><h2 className="text-primary">Contacts</h2></div>
                <div className="friends-icons">
                    <a title="Search for a friend or group" href="#"> <i className="fa-solid fa-magnifying-glass fa-xl text-primary"></i></a>
                    <a title="Options" href="#"><i className="fa-solid fa-ellipsis fa-xl text-primary"></i></a>
                </div>
            </div>
            {users.length === 0 ? (
                <p>Loading...</p>
            ) : (

                users.map(element =>
                    <a key={element.id} className="friends-select" href="#">
                        <div className="friends-container">
                            <img src={element.image} alt="" />
                            <h3>{element.firstName} {element.lastName}</h3>
                        </div>
                    </a>)
            )}
            < a className="new-message" title="New Message" href=""><i className="fa-solid fa-pen fa-xl text-primary"></i></a>
        </section >
    )
}
export default Friends