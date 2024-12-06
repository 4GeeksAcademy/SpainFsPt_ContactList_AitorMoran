import React, { useContext } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.jsx";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const Home = () => {
	const {store, actions} = useContext(Context);

	
	
	return (
	<div className="text-center mt-5">

        <h1>My Contact List</h1>

		<Link className="btn btn-success m-5" onClick={()=>actions.selectContact(null)} to={'/contacto/new'}>
		    New Contact
		</Link>
		{
			store.contacts?.contacts?.map(el=>
				<ContactCard
                key={el.id}
                contact={el}
                />
			)
		}
		
	</div>
);
}