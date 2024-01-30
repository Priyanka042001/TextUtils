import React from 'react'

export default function About(props) {
    

  return (
    <div className='container'  >
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample"  >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor: props.mode === "dark"?"#80808073":"white",color:props.mode === "dark"?"white":"black"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About Us </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode === "dark"?"grey":"white",color:props.mode === "dark"?"white":"black"}}>
         At TextUtils, our mission is to empower users with powerful yet user-friendly text manipulation tools. Whether you're a writer, developer, or just someone looking to enhance your text, TextUtils is here to assist you.   If you're looking to transform text into uppercase or lowercase, [TextUtils] has you covered. Our user-friendly website provides seamless functionality to convert text, giving you the flexibility you need. Explore the power of transformation with [TextUtils] and enhance your textual experience.

Feel free to visit TextUtils and try out our text conversion tools today!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode === "dark"?"#80808073":"white",color:props.mode === "dark"?"white":"black"}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Our Team</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode === "dark"?"grey":"white",color:props.mode === "dark"?"white":"black"}}>
      At the core of TextUtils is our diverse and talented team. Comprising experts in linguistic technology, software development, and user experience, we collaborate to bring you cutting-edge text transformation tools.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode === "dark"?"#80808073":"white",color:props.mode === "dark"?"white":"black"}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Why Choose Us</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode === "dark"?"grey":"white",color:props.mode === "dark"?"white":"black"}}>
      Choosing TextUtils means choosing unparalleled quality, reliability, and innovation in text manipulation. Discover the reasons why our users trust us for a range of essential text transformation services.
We're committed to ensuring customer satisfaction, providing excellence in every interaction, and delivering user-friendly solutions for all your text-related needs. Join the TextUtils community and experience the difference in text transformation.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
