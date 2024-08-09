/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const NosProjets = () => {
    return (
        <div className={"h-screen p-2"}>
            <h2 className={"m-8"}>Présentation de nos projets</h2>
            <p>Actuellement, l'infrastructure possède 3 projets de serveurs Minecraft</p>
            <ul className={"list-disc list-inside"}>
                <li>Un serveur Harry Potter RP - Harry PoCraft (<a href={"https://harry-pocraft.fr"}
                                                                   className={"text-cyan-400 hover:text-cyan-700"}
                                                                   target={"_blank"}>Cliquez ici pour accéder au site
                    internet</a>)
                </li>
                <li>Un serveur RôlePlay - Serious RP</li>
                <li>Un serveur Pvp - Faction moddé</li>
            </ul>
        </div>
    );
};

export default NosProjets;