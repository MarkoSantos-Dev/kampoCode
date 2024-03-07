

const Footer = () => {
  return (

    <div className='footer container-fluid border border-3 border-top-1 border-secondary-subtle border-end-0'>
      <div className='row mt-5 mb-5 footer-container justify-content-around'>
        <div className='col-5'>
          <h3 className='kampoCode'>KampoCode</h3>
          <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus eveniet explicabo exercitationem minus? Culpa accusantium alias debitis eos numquam.</p>
        </div>
        <div className='col-5 d-flex gap-5 justify-content-center align-items-center'>
          <a className="nav-link  text-white fw-semibold" aria-current="page" href="#">
              COURSES
          </a>
          <a className="nav-link  text-white fw-semibold" aria-current="page" href="#">
            ABOUT
          </a>
          <a className="nav-link  text-white fw-semibold" aria-current="page" href="#">
            CONTACT
          </a>
        </div>
      </div>




    </div>
  )
}

export default Footer