interface props {
    title?: string;
    description?: string;
    src?: string;
    fStyle2?: string;
    fStyle?: string;
    h5?: string;
    discripstion2?: string;
    fStyle3?: string;
}

export default function Card(props: props) {
    const { discripstion2, title, description, src, fStyle, fStyle2, h5, fStyle3 } = props;
    return (
        <div className={`rounded-2xl border-2 border-[#dbdce0]  shadow-xl lg:hover:-translate-x-7  hover:-translate-y-7 duration-500 pt-8 xl:w-[470px] w-full md:h-[400px]  lg:h-[440px] bg-[#e5e6eb] ${fStyle2}`}>
            <div className={`flex lg:gap-9 gap-0 flex-col  h-full overflow-hidden justify-between items-end ${fStyle3} `}>
                <div className={`items-baseline mb-4  ${fStyle}`}>
                    <p className="text-gray-500 lg:text-base text-sm w-full text-end border"> {description} </p>
                    <h5 className={`text-end lg:text-xl text-base w-full text-[#000000b0] ${h5} `}> {title} </h5>
                </div>
                <img src={src} className="" alt="" />
                <p className="text-gray-500 w-full text-end"> {discripstion2} </p>
            </div>
        </div>
    )
}