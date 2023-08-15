export default function ErrorPanel(props) {
    const { err } = props;

    return (
        <>
            <div className="error-panel">
                {err}
            </div>

        </>
    )
}