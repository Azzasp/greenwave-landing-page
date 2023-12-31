import {useState} from "react";

export default function Noticias(){

    const [titleFontSize, setTitleFontSize] = useState(24);
    const [fontSize, setFontSize] = useState(12);

    const increaseFontSize = () => {
        setTitleFontSize((prevFontSize) => prevFontSize + 1);
        setFontSize((prevFontSize) => prevFontSize + 1);
    };

    const decreaseFontSize = () => {
        setTitleFontSize((prevFontSize) => prevFontSize - 1);
        setFontSize((prevFontSize) => prevFontSize - 1);
    };

    const imageURL = [
        'src/assets/news/congress.jpg',
        'src/assets/news/penguins.jpg',
        'src/assets/news/jihm-basalto.webp'
    ]

    return(
        <>
            <div className={`absolute mt-[24rem] z-[120]`}>
                <div className={`bg-slate-200`}>
                    <div className={`w-[150px] h-8 flex justify-end px-10`}>
                        <button onClick={decreaseFontSize} className={`font-bold text-2xl px-5`}>A-</button>
                        <button onClick={increaseFontSize} className={`font-bold text-2xl`}>A+</button>
                    </div>
                </div>
            </div>
            <div className={`
                            sm:mt-20
                            xl:mt-48`}>
                <h1 className="text-black text-5xl font-semibold flex justify-center">Noticias</h1>
                <div>
                    <a href="https://g1.globo.com/meio-ambiente/noticia/2023/06/29/o-po-magico-que-pode-ajudar-a-combater-as-mudancas-climaticas.ghtml"
                       target={'_blank'} rel={'noreferrer'}>

                        <div className="flex justify-center items-center mt-24">
                            <div style={{backgroundImage: `url(${imageURL.at(2)})`}}
                                    className="w-48 h-48 bg-cover bg-no-repeat bg-center"></div>

                            <span style={{ fontSize: `${titleFontSize}px`}} className="ml-6">
                                <h3 className="text-black font-semibold text-xl">O pó mágico que pode ajudar a combater
                                as mudanças climáticas</h3>
                                <br></br>
                                <p style={{ fontSize: `${fontSize}px`}}>Em uma pedreira cercada pelo barulho de maquinário pesado,<br></br>
                                    Jim Mann se agacha e pega um punhado de minúsculas<br></br>
                                    pedras pretas. Este é o meu pó mágico, diz ele com um sorriso,<br></br>
                                    esfregando-as suavemente entre os dedos.</p>
                            </span>
                        </div>
                    </a>

                    <a href="https://www.meioemensagem.com.br/proxxima/efeitos-da-mudanca-climatica#:~:text=Os%20efeitos%20de%20mudan%C3%A7as%20clim%C3%A1ticas,do%20efeito%20estufa%20na%20atmosfera."
                       target={'_blank'} rel={'noreferrer'}>

                        <div className="flex justify-center items-center mt-7">
                            <div style={{backgroundImage: `url(${imageURL.at(1)})`}}
                                 className="w-48 h-48 bg-cover bg-no-repeat bg-center"></div>

                            <span style={{ fontSize: `${titleFontSize}px`}} className="ml-6">
                                <h3 className="text-black font-semibold text-xl">Efeitos da mudança climática e o
                                    papel das empresas no combate</h3>
                                <br></br>
                                <p style={{ fontSize: `${fontSize}px`}}>Os efeitos de mudanças climáticas podem ser sentidos diariamente com o <br></br>
                                    aumento das secas, alagamentos, aumento do nível do mar e outros fatos<br></br>
                                    que apontam para um desequilíbrio ambiental.</p>
                            </span>
                        </div>
                    </a>

                    <a href="https://projetocolabora.com.br/ods13/clima-so-sera-resolvido-com-mudanca-na-governanca-diz-lula-em-paris/"
                       target={'_blank'} rel={'noreferrer'}>

                        <div className="flex justify-center items-center mt-7">
                            <div style={{backgroundImage: `url(${imageURL.at(0)})`}}
                                 className="w-48 h-48 bg-cover bg-no-repeat bg-center"></div>

                            <span style={{ fontSize: `${titleFontSize}px`}} className="ml-6">
                                <h3 className="text-black font-semibold text-xl">Efeitos da mudança climática e o
                                    papel das empresas no combate</h3>
                                <br></br>
                                <p style={{ fontSize: `${fontSize}px`}}>O presidente Luiz Inácio Lula da Silva cobrou de governantes mundiais uma luta<br></br>
                                    unida contra a desigualdade em suas várias vertentes e a mudança de órgãos<br></br>
                                    internacionais para melhorar a governança global e retratar a nova<br></br>
                                    geopolítica do planeta.</p>
                            </span>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )

}