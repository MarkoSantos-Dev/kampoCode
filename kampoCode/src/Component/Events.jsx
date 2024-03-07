

const Events = () => {
  return (
    <div className='events container-fluid w-100'>
      <div className='lower-section d-flex flex-sm-wrap flex-lg-nowrap'>
        <div className="img-container">
          <img src="./images/events.jpg" height="500px" width="500px" alt="" />
        </div>
        
        <div className='event-content mt-3 ps-2' >
          <h1 className="text-center fw-bold mb-5">UPCOMING EVENTS</h1>
          <div data-aos="fade-left">
            <h3 className='fw-bold'>FRONT END WORKSHOP</h3>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse vel, delectus deserunt voluptatem quae dignissimos obcaecati odio doloribus minima consequatur? Assumenda officiis quos minima, dolores rem sequi unde? Fugiat.</p>
            <div className="d-flex">
              <hr className="x-ruler "></hr><span className="pt-1 ps-2"> April 15, 2024</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <h3 className='fw-bold mt-5'>BACK END WORKSHOP</h3>
            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi esse vel, delectus deserunt voluptatem quae dignissimos obcaecati odio doloribus minima consequatur? Assumenda officiis quos minima, dolores rem sequi unde? Fugiat.</p>
            <div className="d-flex">
              <hr className="x-ruler "></hr><span className="pt-1 ps-2"> Soon TBA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events