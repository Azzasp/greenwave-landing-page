
export default function Footer(){

    const imageURL = [
        './src/assets/icons/awesome-github.svg',
        './src/assets/icons/awesome-linkedin.svg'
    ]

    return(
        <>
            <div className={`w-full h-[250px] bg-black flex justify-between items-center px-24`}>
                <h1 className={`text-white text-xl font-semibold`}> Green<span className={`text-green-500`}>Wave</span></h1>

                <p className={`text-white text-center mt-28
                                sm:text-xs`}>© GreenWave. All rights reserved. Protecting the environment one wave at a time.</p>

                <div className={`flex justify-end`}>
                    <div style={{backgroundImage: `url(${imageURL.at(0)})`}}
                        className={`w-[40px] h-[40px] bg-cover bg-no-repeat bg-center`}></div>
                    <div style={{backgroundImage: `url(${imageURL.at(1)})`}}
                        className={`w-[40px] h-[40px] bg-cover bg-no-repeat bg-center ml-2`}></div>
                </div>
            </div>
        </>
    )

}