import { FC } from "react";
import { RatingStars } from "./rating-stars";
import { Store } from "../../types";
import { useAtom } from "jotai";
import { getCurrentStoreAtom } from "../../store/appAtom";
import { motion } from "motion/react";

export const StoreInformationPopover = () => {
  const [selectedStore] = useAtom(getCurrentStoreAtom);

  if (!selectedStore) return null;

  return (
    //  glass-bg
    <div className="absolute top-10 right-10">
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="overflow-clip rounded-[50px] py-5 pr-5 w-[520px] glass-bg">
          <div className="max-h-[400px] overflow-y-auto overflow-x-hidden px-8 py-4 flex flex-col gap-10">
            <StoreInformation {...selectedStore} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StoreInformation: FC<Store> = ({
  name,
  address,
  numberOfReviews,
  stars,
}) => {
  return (
    <div>
      <div className="text-black text-3xl font-bold mb-2">{name}</div>
      <div className="mb-3">
        <b>Address: </b>
        <span className="text-black text-lg">{address}</span>
      </div>
      <div className="flex flex-row gap-2 mb-2">
        <RatingStars averageScore={stars} />
        <span className="text-[#E41939]">{numberOfReviews} reviews</span>
      </div>
      {/* <button className="bg-gradient-to-b from-[#e31838] to-[#b1142d] text-white py-2 px-6 rounded-xl shadow">
        SEND ME THE LOCATION
      </button> */}
    </div>
  );
};
