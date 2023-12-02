import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
}

function Link({page}: Props) {
  const selectedPage = null;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink className={selectedPage === lowerCasePage ? 'text-primary-500' : ""} href={`#${lowerCasePage}`} onClick={()=>{}}>
      {page}
    </AnchorLink>
  )
}

export default Link
