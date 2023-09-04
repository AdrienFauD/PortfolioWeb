import { useEffect, useState, useRef } from "react"
import './Pos.test.css'

export default function PosTest() {

    const [product, setProduct] = useState('🍐')
    const [tank, setTank] = useState('')
    const [productStyle, setProductStyle] = useState("product")
    const [maskStyle, setMaskStyle] = useState("mask")
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const text = 'la vita e bela'
  
    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, 100);
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex]);

    const handleChangeStyleMask = () => {
        setMaskStyle("mask-down")
        setTimeout(() => {
            setProduct('')
            setTank('🍐')
        }, 3000);
    }



    return (
        <>
            <button className="btn" onClick={(e) => handleChangeStyleMask(e)}>Drop mask</button>
            <button className="btn">TimeoutLetter</button>
            
            <div>
                {currentText}
            </div>
            
            <div className="container">
                <div className={productStyle}>
                    {product}
                </div>
                <div className={maskStyle}>
                    {product}
                </div>
                <div className="con">
                    <div className="test">
                        {tank}
                    </div>
                </div>
            </div>
        </>
    )
}
