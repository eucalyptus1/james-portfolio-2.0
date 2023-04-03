import Nav from './Nav.js';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
        <h1>James Portfolio</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    );
}

export default Header;