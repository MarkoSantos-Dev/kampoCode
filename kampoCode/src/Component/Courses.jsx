
const Courses = () => {
  return (
    <div className='container-fluid w-75'>
      <h1 className='course-header text-center fw-bold'>OUR COURSES</h1>
      <div className='main-container container-fluid text-center d-flex mt-5' >
          <div className='cardOne  bg-light shadow'>
              <img className='object-fit border border-white rounded rounded-bottom-0' src="./images/frontend2.jpg"  width="100%"   alt="" />
              {/* <img className='image1 mt-5' src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/01/09151859/coding-bootcamp.png" alt="" /> */}
              <div className='cardOne-body'>
                <h3 className='text-center mt-5 fw-semibold'>FRONT-END DESIGN</h3>
                <h5 className=' text-dark ps-5 px-5 mt-3 fs-5 fw-lighter'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta, consectetur adipisicing elit. Nisi soluta, 
                </h5>
                <button className="enroll-btn btn text-white mt-3 mb-5  rounded-5">Enroll</button>
              </div>
          </div>
          <div className='cardOne  bg-light  shadow'>
              <img className=' border border-white rounded rounded-bottom-0' src="./images/backend2.jpg"  width="100%"   alt="" />
              {/* <img className='image1 mt-5' src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/01/09151859/coding-bootcamp.png" alt="" /> */}
              <div className='cardOne-body'>
                <h3 className='text-center mt-5 fw-semibold'>BACKEND LOGIC</h3>
                <h5 className=' text-dark ps-5 px-5 mt-3 fs-5 fw-lighter'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta, consectetur adipisicing elit. Nisi soluta, 
                </h5>
                <button className="enroll-btn btn text-white mt-3 mb-5 rounded-5">Enroll</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Courses