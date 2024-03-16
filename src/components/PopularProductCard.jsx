import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full rounded-md'>
      <img src={imgURL} alt={name} className='w-[220px] h-[282px] bg-slate-200 bg-card bg-center 
      bg-cover rounded-2xl hover:rotate-1 shadow-md shadow-sky-200'/>
      <div className='mt-8 flex justify-start gap-2.5 '>
        <img src={star} alt='rating icon' width={24} height={24}/>
        <p className='font-montserrat text-sm leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-md leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-sky text-md leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
