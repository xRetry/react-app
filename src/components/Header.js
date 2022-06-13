const Header = ({ onClick }) => {
    const btnText = "Zeige\nText"
    return (
        <header className="header">
            <div>
                <h1>Softwarewerkzeuge für IT-Projekte</h1>
                <h2>Einheit 5</h2>
            </div>
            <div>
                <button className="btn" onClick={onClick}>{btnText}</button>
            </div>
        </header>
    )
}

export default Header