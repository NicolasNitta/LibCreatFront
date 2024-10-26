import styles from '../../style.module.css';

function Menu() {
    return (

        <>

            <div className={styles.cabecalhoDeUsuario}>
                <div className={styles.fotoDeUsuarioDoPerfil}/>
                <h1 className={styles.nomeDeUsuarioDoPerfil}>Usuário</h1>
                <h2 className={styles.nicknameDoPerfil}>@user1418047</h2>
                <h3 className={styles.seguidoresDoPerfil}>6,7k seguidores</h3>
                <div className={styles.areaDaBioDoPerfil}>
                    <p className={styles.textoDaBioDoPerfil}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptate nostrum? Fugit corporis, cum dolor voluptas aperiam vero sed excepturi vitae unde, impedit placeat nihil officia qui temporibus! Explicabo, ipsum.</p>
                </div>
            </div>



        </>

    )
}

export default Menu;