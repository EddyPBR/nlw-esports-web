import { FC } from "react";
import { MagnifyingGlassPlus } from "phosphor-react";
import { Root, Trigger } from "@radix-ui/react-dialog";

import { CreateAdModal } from "~components/CreateAdModal";

export const CreateAdBanner: FC = () => {
  return (
    <Root>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden ">
        <article className="bg-[#2A2634] px-8 py-6 flex justify-between">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <Trigger className="h-full py-3 px-4 bg-violet-500 text-white rounded flex items-center gap-3 hover:bg-violet-600 transition-colors">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </Trigger>
        </article>
      </div>

      <CreateAdModal />
    </Root>
  );
};
