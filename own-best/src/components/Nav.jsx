import { navLinks } from '../constants'; 
import headerLogo from '../assets/images/header-logo.png'
import arrowRight from '../assets/icons/arrow-right.svg'

const Nav = () => {
    return (
        <header className='absolute padding-x py-5 w-full z-40 shadow'>
                <nav className='flex justify-between'>
                    <a href="/"
                    >
                        <img src={headerLogo} 
                            alt="logo" 
                            width={140} 
                            height={35}
                            className=''/>
                    </a>
                    <ul className='flex '>
                        {navLinks.map((item, index)=>(
                            <li 
                            key={index}
                            className='mx-8'>
                                <a 
                                href={item.href}
                                className='font-montserrat text-lg text-slate-gray hover:underline   hover:underline-offset-[25px]
                                transition hover:ease-in-out delay-100 hover:bg-indigo-100 hover:text-blue-500 duration-50 rounded-lg px-4 py-1 
                                focus:-translate-y-1 focus:scale-110 focus:bg-indigo-100 shadow-sm z-auto '>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center text-white bg-coral-sky px-8 text-sm rounded-full'>
                        <a href="#log-in"><ul className='hover:font-semibold '>log in</ul></a>
                        <p className='mx-2 font-bold'>|</p>
                        <a href="#register"><ul className='hover:font-semibold'>sign up</ul></a>
                        <img src={arrowRight} className='hover:translate-x-1 mx-2' alt="" width={15} height={15}/>
                    </div>
                </nav>
                
        </header>
    )
}
export default Nav;