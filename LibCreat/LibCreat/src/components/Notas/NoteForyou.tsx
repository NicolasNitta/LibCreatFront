import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from '../../style.module.css';

import { useApiContext } from '../../APIContext/PageContext';

interface NoteCardProps {
    
    note: {
        userName: String;
        nick: String;
        date: Date;
        title: String;
        content: String;
    }
}

export function NoteForYou ({ note }: NoteCardProps) {

    const {redirectTo} = useApiContext();

    return (
        <Dialog.Root>

            <Dialog.Trigger className={styles.publicacao}>

                <div className={styles.perfilDaPublicacaoDaForYou}>
                    <button onClick={() => {redirectTo("/Perfil")}} className={styles.fotoDeUsuarioDaForYou}/>
                    <button onClick={() => {redirectTo("/Perfil")}} className={styles.nomeDeUsuarioDaForYou}>{note.userName}</button>
                    <button onClick={() => {redirectTo("/Perfil")}} className={styles.nicknameNaForYou}>{note.nick}</button>
                    <p>{JSON.stringify(note.date)}</p>
                </div>

                <div className={styles.conteudo}>
                    <h1 className={styles.tituloDaMensagem}>{note.title}</h1>
                    <p className={styles.textoDaMensagem}>{note.content}</p>
                </div>

            </Dialog.Trigger>

            <Dialog.Portal>
                {/*
                <Dialog.Overlay className={styles.zoomDaPublicacao}>
                    <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col">

                        <div>

                            <div className={styles.perfilDaPublicacaoDaForYou}>
                                <button onClick={() => {redirectTo("/Perfil")}} className={styles.fotoDeUsuarioDaForYou}/>
                                <button onClick={() => {redirectTo("/Perfil")}} className={styles.nomeDeUsuarioDaForYou}>Usuário</button>
                                <button onClick={() => {redirectTo("/Perfil")}}>@user1418047</button>
                                <p>{formatDistanceToNow (note.date, {locale: ptBR, addSuffix: true})}</p>
                            </div>

                            <div className={styles.conteudo}>
                                <h1 className={styles.tituloDaMensagem}>Título da mensagem</h1>
                                <p className={styles.textoDaMensagem}>{note.content}</p>
                            </div>
                        
                        </div>
                        

                    </Dialog.Content>
                </Dialog.Overlay>
                */}
            </Dialog.Portal>
        </Dialog.Root>

    )

}
