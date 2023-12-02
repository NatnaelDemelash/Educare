import React from 'react'
import { SelectedPage } from './types'
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage ) => void;
}

function ActionButton({children, setSelectedPage}: Props) {
  return (
    <AnchorLink className='rounded-md bg-primary-500 cursor-pointer text-white px-10 py-3 hover:bg-primary-300' onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}>
      {children}
    </AnchorLink>
  )
}

export default ActionButton
