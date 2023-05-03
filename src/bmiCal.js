import { useState } from "react";

function BmiCalculator(){
    const [bmi,setBmi] = useState('');
    const [health, setHealth] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    
//  logic for BMI calculator
    const handleBmi = (e) => {
       e.preventDefault();
       if(weight === 0 || height === 0){
        alert("Invalid Input");
       }
        else{
        let bmi = (
          [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBmi(bmi);
        if (bmi < 20) {
            setHealth("Under Weight");
            
        } else if (bmi > 20 && bmi <= 25) {
            setHealth("Normal");
        } else if (bmi > 25 && bmi < 30) {
            setHealth("Over Weight");
        } else if (bmi > 30) {
            setHealth("Obese");
            
        }
    } }

    // show image based on BMI calculation
    let imgSrc ;
     if (bmi < 1) {
        imgSrc = null
     } else {
        if (bmi < 20) {
            imgSrc = require('./assets/img/underweight.png')
        } else if (bmi > 20 && bmi <= 25) {
            imgSrc = require('./assets/img/normal_boy.png')
        } else if (bmi > 25 && bmi < 30) {
            imgSrc = require('./assets/img/overweight.png')
        } else {
            imgSrc =require('./assets/img/obese.png')
        }
     }


return (
    <div className="main-div">
        <div className="bmi-form">
            <h4>HEIGHT (CM)</h4>
            <input className="bmi-input" type={'number'} onChange={(e)=> setHeight(e.target.value)}/>
            <h4>WEIGHT (KG)</h4>
            <input className="bmi-input" type={'number'} onChange={(e)=> setWeight(e.target.value)}/>
            <button className="mybtn" onClick={handleBmi}>Calculate BMI</button>
        </div>

        <div className="bmi-result">
            <h2>BMI</h2>
            <h2>{bmi}</h2>
            <h2>Health</h2>
            <h2>{health}</h2>
            <div className="img-container">
                <img src={imgSrc} alt='' className="result-img"></img>
            </div>
        </div>
    </div>
)


}
export default BmiCalculator