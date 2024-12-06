import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";


export const ContactoForm = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams()
    //crear un estado para cada input
    //crear un estado para TODOS los inputs

    //si tengo un contacto seleccionado, ese sera el valor por defecto
    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        email: store.selected?.email || '',
        address: store.selected?.address || '',
        phone: store.selected?.phone || ''
    })




    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })



    const handleSubmit = e => {
        e.preventDefault();
        store.selected ?
            actions.UpdContact(id, formData)
            :
            actions.createContact(formData)
    }


    return (
        <>

            <form className="form-control" onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={handleChange} required className="form-control" type="text" placeholder="name" />
                <input name='email' value={formData.email} onChange={handleChange} required className="form-control" type="email" placeholder='email' />
                <input name="address" value={formData.address} onChange={handleChange} required className="form-control" type="text" placeholder='address' />
                <input name='phone' value={formData.phone} onChange={handleChange} required className="form-control" type="number" placeholder='phone' />

                {store.selected ? <input type="submit" value={'Editar'} /> : <input type="submit" value={'Crear'} />}
            </form>
            <Link className="btn btn-danger" to={'/'}>
                Volver a home
            </Link>
        </>
    )

}