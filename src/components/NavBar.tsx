import { useState } from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import Logo from '@/assets/logo.png';
import Link from './shared/Link';
import { SelectedPage } from './shared/types';
import useMediaQuery from './hooks/useMediaQuery';
import ActionButton from './shared/ActionButton';

type Props = {
  isTopOfPage : boolean,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void;
}

export default function NavBar({isTopOfPage ,selectedPage, setSelectedPage}: Props) {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 w-full py-6 z-30`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" width={130} />

            {/* Right Side */}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
               <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
              </div>

              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Sign in</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
              </div>
            </div>
            ): (
              <button className='rounded-full bg-primary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon  className='h-6 w-6 text-white'/>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
     {!isAboveMediumScreen && isMenuToggled && (
       <div className='fixed right-0 bottom-0 w-[300px] h-full z-40 bg-slate-600 text-white'>
          {/* Close Icons */}
          <div className='flex justify-end py-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-white mr-8' />
            </button>
          </div>

          {/* Menu Items */}
            <div className="flex flex-col gap-8 ml-[33%] text-2xl">
               <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Benefits' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Our Classes' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
               <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </div>
      </div>
     )}
    </nav>
  )
}
