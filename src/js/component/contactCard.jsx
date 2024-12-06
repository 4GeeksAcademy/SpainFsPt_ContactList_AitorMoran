import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {

    const { store, actions } = useContext(Context);
    const { id, name, address, email, phone } = props.contact
    return (
        <article className="card">
            <div className="d-flex">
                <figure>
                    <img
                        className="userIcon"
                        src="https://img.freepik.com/vector-gratis/establecimiento-circulos-usuarios_78370-4704.jpg?t=st=1733483072~exp=1733486672~hmac=c3d1c708dcae59135eee39b2ec4427f1ab851186cb220f7a7fbb050c2a4d087d&w=1380"
                        alt={name}
                        width={'200px'}
                        height={'200px'}
                    />
                </figure>
                <div className="container">
                    <h4>
                        {name}
                    </h4>
                    <p>
                        <span className="fa-solid fa-location-dot m-2"></span>
                        {address}
                    </p>
                    <p>
                        <span class="fa-solid fa-envelope m-2"></span>
                        {email}
                    </p>
                    <p>
                        <span className="fa-solid fa-phone m-2"></span>
                        {phone}
                    </p>
                    <div>

                            <Link className="btn btn-primary" onClick={() => actions.selectContact(props.contact)} to={'/contacto/' + id}>
                                Edit
                            </Link>

                        <button className="btn btn-danger m-3" onClick={()=>actions.delContact(id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}
