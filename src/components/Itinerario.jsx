import React from 'react';

const Itinerario = () => {
  return (
    <div className="bg-[#0B172C] md:flex-row md:px-10 flex items-center justify-around">
      <div className=" p-5 max-w-[1400px] w-[100%] flex-col md:gap-6 lg:gap-10 md:flex-row md:px-10 flex items-center justify-around">
        <h1 className=" font-titleFont text-white text-5xl lg:text-6xl xl:text-7xl">
          Itinerário
        </h1>
        <ol className="max-w-[800px] border-s border-white ">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">16h30</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Recepção
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Os convidados serão recepcionados e direcionados para o local da
                celebração, com direito a welcome drinks. Planejamos o casamento
                para ocorrer durante o pôr do sol, por isso,
                <span className="font-bold"> sem atrasos, hein?!</span>
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">17h</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Cerimônia
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Daremos início à cerimônia do casamento. Só quem pode atrasar é
                a Noiva.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">18h15</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Entrada no Salão
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Os convidados será direcionados ao salão, daremos início aos
                serviços de Buffet e de bebidas. Hora de forrar o estômago pra
                aguentar o que vem na sequência.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">19h30</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Jantar
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Comidas especialmente selecionadas pelos noivos com direito a
                sobremesa especial e refrescante diretamente de Pirassununga.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-white "></div>
              <p className="text-md text-neutral-300 ">19h30 até o fim</p>
            </div>
            <div className="mb-2 ms-4 mt-1">
              <h4 className="mb-1.5 text-white text-xl font-semibold">
                Festa | DJ
              </h4>
              <p className="mb-3 text-neutral-300 ">
                Pra embalar a noite teremos um DJ tocando aquele repertório que
                não pode faltar num casamento. Queremos vocês juntos com a gente
                na pista arrasando.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Itinerario;
