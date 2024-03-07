

const EduSystem = () => {
  return (
    <div className='mainContainer container-fluid mt-5' data-aos="fade-up">
      <div className='sectionContainer d-flex text-start mx-5'>
        <div className='sectionOne px-5'>
            <h2 className='sectionOne-h fw-bold text-start fs-1'>
              Our education system works for you
            </h2>
            <p className='sectionOne-p mt-4 text-start'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex dolor,Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex dolor, 
            </p>
            <button className="btn bg-light text-dark mt-4 rounded-5 shadow ">LEARN MORE</button>
        </div>
        <div className='sectionTwo position-relative'>
          {/* <img src="../../public/images/section1.png" alt="" /> */}
          <span className="boxColor container"></span>
          <img src="./images/vector.png" alt="" className="img-fluid overlapping-image"/>
        </div>
      </div>
    </div>
  );
};

export default EduSystem