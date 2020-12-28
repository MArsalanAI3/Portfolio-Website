import React from 'react'

const Technologies = () => {
    return (
        <div className="fluid-container tech-container my-5 py-5" id="tech">
            <div className="container sub-container row mx-auto">
                <div className="flex col-md-2 my-5 py-3 mx-auto feature-box" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h5 className="tech-headng">Languages</h5>
                    <ul className="tech-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>ES6</li>
                        <li>Python</li>
                        <li>C#</li>
                        <li>C++</li>
                    </ul>
                </div>
                <div className="flex col-md-3 my-5 py-3 mx-auto feature-box" data-aos="fade-up"
                    data-aos-duration="500">
                    <h5 className="tech-headng">Framework And Libraries</h5>
                    <ul className="tech-list">
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>React-Bootstrap</li>
                        <li>Material UI</li>
                        <li>Materialize</li>
                        <li>NumPy</li>
                        <li>Pandas</li>
                    </ul>
                </div>
                <div className="flex col-md-3 my-5 py-3 mx-auto feature-box" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="500">
                    <h5 className="tech-headng">Database Technologies & Hosting Websites </h5>
                    <ul className="tech-list">
                        <li>Firebase (Database,Hosting)</li>
                        <li>FaunaDb</li>
                        <li>MongoDB</li>
                        <li>Surge</li>
                        <li>Netlify</li>
                    </ul>
                </div>
                <div className="flex col-md-2 my-5 py-3 mx-auto feature-box" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h5 className="tech-headng">Tools</h5>
                    <ul className="tech-list">
                        <li>Git</li>
                        <li>Firebase </li>
                        <li>Linux</li>
                        <li>Node</li>
                        <li>npm</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>Canva</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Technologies
