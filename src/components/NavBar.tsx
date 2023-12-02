import { useState } from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import Logo from '@/assets/logo.png';

type Props = {}

export default function NavBar({}: Props) {
  const flexBetween = 'flex items-center justify-between';

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 w-full py-6 z-30`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" width={110} />



            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <p>Home</p>
                <p>Benefits</p>
                <p>Our Classes</p>
                <p>Contact</p>
              </div>

              <div className={`${flexBetween} gap-8`}>
                <p>Sign in</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
