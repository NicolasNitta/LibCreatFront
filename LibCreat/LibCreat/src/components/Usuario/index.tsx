import styles from '../../style.module.css';
import { useApiContext } from '../../APIContext/PageContext';

function Menu() {
    const { usuario } = useApiContext(); // Obtém o usuário do contexto

    if (!usuario) {
        return <div>Carregando...</div>; // Exibe uma mensagem de carregamento se o usuário não estiver definido
    }

    return (
        <>
            <div className={styles.cabecalhoDeUsuario}>
                <div className={styles.fotoDeUsuarioDoPerfil} />
                <h1 className={styles.nomeDeUsuarioDoPerfil}>{usuario.nome}</h1> {/* Nome do usuário */}
                <h2 className={styles.nicknameDoPerfil}>@{usuario.nickname}</h2> {/* Nickname do usuário */}
                <h3 className={styles.seguidoresDoPerfil}>{usuario.seguidores} seguidores</h3> {/* Seguidores do usuário */}
                <div className={styles.areaDaBioDoPerfil}>
                    <p className={styles.textoDaBioDoPerfil}>{usuario.descricao}</p> {/* Bio do usuário */}
                </div>
            </div>
        </>
    );
}

export default Menu;