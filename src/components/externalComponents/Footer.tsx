import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import YuliLogo from "../../assets/yulilogo.svg"
import { footerLinks } from "../../constants/index";

const Footer = () => (
    <>
        <section className="md:w-full footer mt-10 bg-secondary">
            <div className="md:flex px-4 md:px-0  flex-row gap-12  container mx-auto py-28 grid grid-cols-2">
                <div className="flex items-start flex-col ">
                    <Link to={"/"}>
                    <LazyLoadImage src={YuliLogo} width={116} height={38} alt="logo" />
                    </Link>
                   

                    <p className="text-start text-md font-normal mt-5 w-1/2">
                        Have fun organizing daily activities with your loved ones
                    </p>
                </div>
                {footerLinks.map((items) => (
                    <div className="footer_column ">
                        <h4 className="font-semibold text-xl">{items.title}</h4>
                        <ul className="flex flex-col gap-2 font-normal text-lg">
                            {items.links.map((item) => (
                                <Link to={item.href}>
                                    <li >{item.text}</li>
                                </Link>

                            ))}
                        </ul>
                    </div>
                ))}
                <div className="footer_column ">
                    <h4 className="font-semibold text-xl">Company</h4>
                    <span className="flex flex-col gap-2 font-normal text-lg">
                    25 RUE DE PONTHIEU 75008 PARIS 
                    </span>
                </div>
               
            </div>


        </section>
        <div className="flex justify-items-center footer_copyright py-6 bg-[#555555]">


            <p className="text-white text-center container mx-auto">@ 2024 Yuliigames.</p>


        </div>
    </>
);

export default Footer;