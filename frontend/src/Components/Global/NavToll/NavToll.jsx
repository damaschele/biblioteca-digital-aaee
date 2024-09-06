import NavAvatar from './NavAvatar'
// import NavMessage from './NavMessage'
// import NavNotice from './NavNotice'
import './NavToll.css'

function NavToll() {
  return (
    <div className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
            {/* <NavNotice/>
            <NavMessage /> */}
            <NavAvatar />
        </ul>
    </div>
  )
}

export default NavToll