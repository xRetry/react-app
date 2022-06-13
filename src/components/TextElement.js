
const TextElement = ({ text }) => {
    return (
        <div className="text-elem">
            {text !== '' && <p>{text}</p>}
        </div>
    )
}

export default TextElement