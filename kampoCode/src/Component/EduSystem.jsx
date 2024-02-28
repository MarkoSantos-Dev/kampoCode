import React from 'react'

const EduSystem = () => {
  return (
    <div className='mainContainer container-fluid w-75'>
      <div className='sectionContainer'>
          <div className='sectionOne px-5'>
            <h2 className='sectionOne-h fw-bold'>Our education system works for you</h2>
            <p className='sectionOne-p mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex dolor, voluptatum possimus, facilis sit, consequuntur tempora quia ratione pariatur nisi nobis nostrum quidem adipisci eligendi iste repudiandae doloribus sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas a error incidunt. Ipsum perferendis impedit ducimus ullam libero maxime quos nemo, quae totam asperiores necessitatibus dolores officiis architecto quam accusantium?</p>
            <button className="btn bg-secondary text-white mt-5">Learn More</button>
        </div>
        <div className='sectionTwo'>
          {/* <img src="../../public/images/section1.png" alt="" /> */}
          <img src="https://placehold.co/800x600" alt="" />
        </div>
      </div>
    </div>
  );
};

export default EduSystem