import React from 'react'

const Courses = () => {
  return (
    <div className='container-fluid w-75'>
      <h1 className='course-header text-center fw-bold'>OUR COURSES</h1>
      <div className='main-container container-fluid text-center d-flex mt-5'>
          <div className='cardOne w-75 bg-secondary'>
              <img className='mt-5' src="https://placehold.co/600x400" alt="" />
              {/* <img className='image1 mt-5' src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/01/09151859/coding-bootcamp.png" alt="" /> */}
              <div className='cardOne-body'>
                <h3 className='text-center mt-5 fw-bold'>FRONT-END DESIGN</h3>
                <h5 className=' text-white ps-5 px-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta, optio officiis tenetur explicabo accusantium impedit nostrum illum voluptatum maxime, accusamus obcaecati in. Accusantium voluptatibus corporis delectus placeat id cum?</h5>
                <button className="enroll-btn btn text-white mt-3 mb-4">Enroll</button>
            </div>
          </div>
          <div className='cardTwo w-75 ps-5'>
          <img className='mt-5' src="https://placehold.co/600x400" alt="" />
          <div className='cardOne-body'>
                <h3 className='text-center mt-5 fw-bold'>FRONT-END DESIGN</h3>
                <h5 className=' ps-5 px-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi soluta, optio officiis tenetur explicabo accusantium impedit nostrum illum voluptatum maxime, accusamus obcaecati in. Accusantium voluptatibus corporis delectus placeat id cum?</h5>
                <button className="enroll-btn btn text-white mt-3 mb-4">Enroll</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Courses