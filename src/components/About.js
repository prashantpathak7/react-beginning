import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor : 'White',
    //     color : 'Black'
    //     })
    
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    
    // const toggleStyle = () => {
    //     if(myStyle.backgroundColor === 'White'){
    //         setMyStyle({
    //             backgroundColor : 'Black',
    //             color : 'tomato',
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor : 'White',
    //             color : 'Black'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
     
    return (
        <div className="container my-5 " style= {{color: props.mode==='light'?'black':'white'}} >
            {/* style={myStyle} */}
            <h2>About Us</h2>
            <p>Welcome to the Texter. A very handy online text tool
            where you can change between lower case and upper case letters, where you can check 
            live word count, character count and reading time of your text. If you are wondering
             how to uncapitalize text, this is exactly what the lower case text converter will allow 
             you to do, it transforms all the letters in your text into lowercase letters. Simply 
             copy the text that you need generating into lower case and paste the text into the box 
             and select the ‘LowerCase Text’ Button, try same proccess for ‘Upper Case’ botton</p>
            
            {/* <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
                
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary ">{btnText}</button>
            </div> */}
        </div>
    )
}
