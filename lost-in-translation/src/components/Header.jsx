const Header = () => {
    const headerStyle = {backgroundColor: "#eee", padding: "5px"}
    const title = {fontSize: "20px"}
    return(
        <header style={headerStyle}>
            <h1 style={title}>Lost in Translation</h1>
        </header>
    );
}
//Replace with ProfileHeader?

export default Header;