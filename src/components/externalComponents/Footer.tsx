import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from "react-router-dom";
import YuliLogo from "../../assets/yulilogo.svg"
import { footerLinks } from "../../constants/index";
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
   // const footerItems = t('footerItems', { returnObjects: true }) as { key: string; text: string, href: string }[];


    return (
    <>
        <section className="md:w-full footer mt-10 bg-secondary">
            <div className="md:flex px-4 md:px-0  flex-row gap-12  container mx-auto py-28 grid grid-cols-2">
                <div className="flex items-start flex-col ">
                    <Link to={"/"}>
                    <LazyLoadImage src={YuliLogo} width={116} height={38} alt="logo" />
                    </Link>
                   

                    <p className="text-start text-md font-normal mt-5 w-1/2">
                        {t(`footerText.slug`)}
                    </p>
                </div>
                {footerLinks.map((items) => (
                    <div className="footer_column ">
                        <h4 className="font-semibold text-xl">{t(`${items.title}`)}</h4>
                        <ul className="flex flex-col gap-2 font-normal text-lg">
                            {items.links.map((item) => (
                                <Link to={item.href}>
                                    <li >{t(`${item.text}`)}</li>
                                </Link>

                            ))}
                        </ul>
                    </div>
                ))}
                <div className="footer_column ">
                    <h4 className="font-semibold text-xl">{t(`footerText.addressHead`)} </h4>
                    <span className="flex flex-col gap-2 font-normal text-lg">
                    {t(`footerText.address`)}
                    </span>
                </div>
               
            </div>


        </section>
        <div className="flex justify-items-center footer_copyright py-6 bg-[#555555]">


            <p className="text-white text-center container mx-auto">@ 2024 Yuliigames.</p>


        </div>
    </>
)};

export default Footer;