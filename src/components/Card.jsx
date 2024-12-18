// import React from 'react'


const Card = () => {
  return (
    <>
        
        <div className="card">
            <div className="image"></div>
            <div className="content">
              <a href="#">
                <span className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </a>

              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium
              </p>

              <a className="action" href="#">
                Find out more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
    </>
  )
}

export default Card