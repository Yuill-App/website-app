import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { TimerReset } from "lucide-react";
import ProductDetailsImg from "../../assets/productDetail.png"
import { DealItem } from "@/interface";
import { useParams } from "react-router-dom";


interface DataItemProps {
    item:DealItem[]
}

const ItemDetails: React.FC<DataItemProps> = ({ item }) => {
    const { itemId } = useParams();
    const selectedItem = item.find((item) => item.id === (itemId));
    return ( 
        <div>
            
            <div className="flex flex-col lg:flex-row py-10 space-x-10 items-center">
                <div>
                    <LazyLoadImage
                        width={300}
                        height={100}
                        src={selectedItem?.image || ProductDetailsImg}
                        alt="image"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center bg-[#fff5f5] text-red-500  rounded-md justify-center">
                        <TimerReset
                            size={16}
                        />
                        <span className="p-2 text-xs">Deal ends in 30 days</span>
                    </div>
                    <div>
                        <h3 className="font-semibold py-3">{selectedItem?.name}</h3>
                        <p className="py-3">Total offer sales: <span className="font-semibold">N200,000</span></p>
                    </div>
                </div>
                <div className="">
                    {/* <span className="text-green-500">{item?.status}</span> */}
                </div>
            </div>

            <div className="flex w-full">
                <Tabs defaultValue="account" className="w-full">

                    <TabsList className="w-full shadow-md">
                        <TabsTrigger value="account" className="w-1/2 font-semibold ">
                            <span className="border-b-4 border-black py-2">Offer Description</span></TabsTrigger>
                        <TabsTrigger value="password" className="w-1/2 font-semibold">Terms and Condition</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        {/* <h3 className="pt-8 font-semibold">Buy 2 cups of ice cream for ₦3000 and earn up to ₦300 airtime and other free goodies </h3> */}
                        <p className="py-4">
                            {selectedItem?.description}
                            
                        </p>
                    </TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>

                {/* <div className="flex text-center items-center w-1/2">
                    <p>kjhkjehjk</p>
                </div>
                <div className="w-1/2 items-center">Terms & Conditions</div> */}

            </div>
        </div>
     );
}
 
export default ItemDetails;