import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

export default function MessagePanel(props) {
    const { msg } = props;

    const [text, setText] = useState('la vita e bela')
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // load state
    useEffect(() => {
         setText(msg)
         setCurrentText('')
    },[msg])

    // display letter by letter
    useEffect(() => {
        if (text.length > 0) {
          const timeout = setTimeout(() => {
            setText(prevText => prevText.slice(1))
            setCurrentText(prevText => prevText + text[0]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, 100);
        
          return () => clearTimeout(timeout);
        } 
      }, [currentIndex, msg, text]);


    return (
        <>
            <div className="error-panel">
                {currentText}
            </div>

        </>
    )
}