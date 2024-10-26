import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from "../../style.module.css";

interface NoteCardProps {
    note: {
        date: Date;
        content: String;
    }
    tags: string[];
}

export function Note({ note, tags }: NoteCardProps) {
    return (
        <Dialog.Root>

            <Dialog.Trigger className={styles.publicacaoDoPerfil}>

                <div className={styles.perfilDaPublicacaoDaForYou}>
                    <div className={styles.fotoDeUsuarioDaForYou}/>
                    <div className={styles.nomeDeUsuarioDaForYou}>Usuário</div>
                    <div className={styles.nicknameNaForYou}>@user1418047</div>
                    <p>{formatDistanceToNow (note.date, {locale: ptBR, addSuffix: true})}</p>
                </div>

                <div className={styles.conteudo}>
                    <h1 className={styles.tituloDaMensagem}>Título da mensagem</h1>
                    <ul className={styles.areaDasTagsDoPerfil}>
                        {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                        ))}
                    </ul>
                    <p className={styles.textoDaMensagem}>{note.content}</p>
                </div>

            </Dialog.Trigger>

            <Dialog.Portal>
                {/*
                <Dialog.Overlay className="inset-0 fixed bg-black/50">
                    <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col">

                    <div>

                        <div className={styles.perfilDaPublicacaoDaForYou}>
                            <div className={styles.fotoDeUsuarioDaForYou}/>
                            <p className={styles.nomeDeUsuarioDoZoomDaMensagemDoPerfil}>Usuário</p>
                            <p className={styles.nicknameDeUsuarioDoZoomDaMensagemDoPerfil}>@user1418047</p>
                            <p className={styles.dataDaPublicacaoDoZoomDoPerfil}>{formatDistanceToNow (note.date, {locale: ptBR, addSuffix: true})}</p>
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
