import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

import styles from "../../style.module.css";

export function NewNote() {


  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);

  const [content, setContent] = useState('')

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentWrite(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    if (event.target.value == '') {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault()

    toast.success('nota criada com sucesso!')
  }


  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.novaPublicacaoDoPerfil}>

        Adicionar uma nova ideia...

      </Dialog.Trigger>
      <Dialog.Portal>
        {/*
        <Dialog.Overlay className="inset-0 fixed bg-black/50">
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col">

            <Dialog.Close className='absolute right-0  bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
              <X className='size-5 ' />
            </Dialog.Close>

            <form onSubmit={handleSaveNote} className='flex-1 flex flex-col'>


              <div className='flex flex-1 flex-col gap-3 p-5'>

                <span className='text-sm font-medium text-slate-300'>Adicionar Ideia </span>

                {shouldShowOnboarding ? (
                  <p className='text-sm leading-4 text-slate-400'>Comece <button className='font-medium text-indigo-500 hover:underline'> gravando uma nota </button> em áudio ou se preferir <button onClick={handleStartEditor} className='font-medium text-indigo-500 hover hover:underline'> utilize apenas texto</button> </p>
                )
                  : (
                    <textarea
                      autoFocus
                      className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                      onChange={handleContentWrite}></textarea>
                  )}
              </div>

              <button type='submit'
                className='w-full bg-indigo-500 py-4 rounded-md text-center text-sm text-indigo-950 outline-none font-medium hover:bg-indigo-600'>
                Salvar
              </button>
            </form>

          </Dialog.Content>
        </Dialog.Overlay>
        */}
      </Dialog.Portal>

    </Dialog.Root>

  )
}