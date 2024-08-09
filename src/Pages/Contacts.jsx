import React from 'react';

const Contacts = () => {
    return (
        <div>
            <h2>Nous contacter</h2>
            <form action="" className={"w-1/2 m-auto mt-52"}>
                <label htmlFor="subject" className={"block"}>Sujet</label>
                <input type="text" className={"border"} placeholder={"Quel est votre demande ?"}/>
                <label htmlFor="mail" className={"block"}>Email</label>
                <input type="email" name="mail" id="" className={"border"} placeholder={"Votre adresse mail"}/>
            </form>
        </div>
    );
};

export default Contacts;