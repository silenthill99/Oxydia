const NotreÉquipe = () => {

    const staff = [{
        pseudo: "silenthill99",
        title: "Fondateur + développeur principal, créateur du site internet",
        skin: "https://mineskin.eu/helm/silenthill99"
    },
        {
            pseudo: "WalkerSeal_",
            title: "Responsable d'équipe modération",
            skin: "https://mineskin.eu/helm/WalkerSeal_"
        }]

    return (
        <section>
            <h2>Notre équipe</h2>

            {staff.map((item, index) => (
                <div className={"border w-full md:w-1/2 mx-auto grid grid-cols-2 rounded-xl shadow mb-20"} key={index}>
                    <div className={"border-r flex justify-center items-center gap-2"}>
                        <img width={100} src={item.skin} alt=""/>
                        <h2>{item.pseudo}</h2>
                    </div>
                    <div className={"text-center"}>
                        <h2>Titres</h2>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}

        </section>
    );
};

export default NotreÉquipe;