import { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameController } from "phosphor-react";

import { Input } from "~components/Form/Input";

export const CreateAdModal: FC = () => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg max-w-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Publique um anúncio
          </Dialog.Title>

          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="game" className="font-semibold">
                Qual o game?
              </label>
              <Input
                id="game"
                type="text"
                placeholder="Selecione o game que deseja jogar"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name">Seu nome (ou nickname)</label>
              <Input
                id="name"
                type="text"
                placeholder="Como te chamam dentro do game?"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input
                  id="yearsPlaying"
                  type="number"
                  placeholder="Tudo bem ser ZERO"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="discord">Qual o seu Discord?</label>
                <Input id="discord" type="text" placeholder="Usuário#0000" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="weekDays">Quando costuma jogar?</label>

                <div className="grid grid-cols-4 gap-2">
                  <button
                    title="Domingo"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-colors"
                  >
                    D
                  </button>
                  <button
                    title="Segunda"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-colors"
                  >
                    S
                  </button>
                  <button
                    title="Terça"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-violet-500 transition-colors"
                  >
                    T
                  </button>
                  <button
                    title="Quarta"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-purple-600 transition-colors"
                  >
                    Q
                  </button>
                  <button
                    title="Quinta"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-purple-600 transition-colors"
                  >
                    Q
                  </button>
                  <button
                    title="Sexta"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-purple-600 transition-colors"
                  >
                    S
                  </button>
                  <button
                    title="Sábado"
                    className="w-8 h-8 rounded bg-zinc-900 hover:bg-purple-600 transition-colors"
                  >
                    S
                  </button>
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label htmlFor="hourStart">Qual horário do dia?</label>

                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="hourStart"
                    name="hourStart"
                    type="time"
                    placeholder="De"
                  />
                  <Input
                    id="hourEnd"
                    name="hourEnd"
                    type="time"
                    placeholder="Até"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 text-sm">
              <Input id="useVoiceChannel" type="checkbox" />
              <label htmlFor="useVoiceChannel">
                Costumo me conectar ao chat de box
              </label>
            </div>

            <footer className="mt-4 flex justify-end gap-4">
              <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors">
                Cancelar
              </Dialog.Close>

              <button
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors"
                type="submit"
              >
                <GameController size={24} />
                Encontrar duo
              </button>
            </footer>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
};
