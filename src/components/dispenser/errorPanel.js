import { useEffect, useState } from "react";

export default function ErrorPanel(props) {
    const { err } = props;
    const [msg, setMsg] = useState('')

    return (
        <>
            <div className="error-panel">
                {err}
            </div>

        </>
    )
}