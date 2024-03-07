import { useState } from 'react';
import arrowRight from '../assets/icons/arrow-right.svg'
import Button from '../components/Button';
import ShoeCard from '../components/ClothCard'
import { topCloths,statistics } from '../constants'; 
import { man_01 } from "../assets/images/products/man";

const Hero = () => {
    const [bigClothImg, setBigClothImg] = useState(man_01)
    return(
        <section
        id='home'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
            <div className='xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
                <p className='text-xl font-montserrat text-coral-sky'>Our Summer collections</p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Discover the Latest</span> <br /> 
                <span 
                className='text-coral-sky inline-block mt-3'>in Fashion</span> Trends</h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                Discover stylish new arrivals, quality comfort, and innovation for
                your active life.
                </p>
                <a href="#log-in"><Button label='Shop now' iconURL={arrowRight} /></a>
                <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
                    {statistics.map((stat,index) => (
                        <div key={index}>
                            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                            <p className='leading-7 font-montserrat text-slate-gray'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div
            className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img
                    src={bigClothImg}
                    alt='cloth colletion'
                    width={350}
                    height={302}
                    className='object-contain relative'
                    />

                    <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
                    {topCloths.map((clothImage, index) => (
                        <div key={index}>
                        <ShoeCard
                            index={index}
                            imgURL={clothImage}
                            changeBigImage={(cloth) => setBigClothImg(cloth)}
                            bigImg={bigClothImg}
                        />
                        </div>
                    ))}
                    </div>
            </div>
        </section>
    )
}
export default Hero;