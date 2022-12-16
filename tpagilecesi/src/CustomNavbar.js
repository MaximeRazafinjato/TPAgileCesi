import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

function CustomNavbar({ onAddBtnClick, onAddTextClick }) {
  const { collapseSidebar } = useProSidebar();
  return (
    // <div>
    //   <Navbar className="navbarHidden" bg="light" expand="lg">
    //     <Container>
    //       <Navbar.Brand href="#home">Figmi</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="#home" onClick={() => onAddBtnClick()}>
    //             Bouton
    //           </Nav.Link>
    //           <Nav.Link href="#link">TextArea</Nav.Link>
    //           <Nav.Link href="#link">TextBox</Nav.Link>
    //           <Nav.Link href="#link">Image</Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </div>
    <div
      onMouseEnter={() => collapseSidebar()}
      onMouseLeave={() => collapseSidebar()}
      style={{ display: "flex", height: "100%" }}
    >
      <Sidebar defaultCollapsed={true}>
        <Menu>
          <MenuItem onClick={() => onAddBtnClick()}>Bouton</MenuItem>
          <MenuItem> TextArea</MenuItem>
          <MenuItem onClick={() => onAddTextClick()}>TextBox</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <button onMouseOver={() => collapseSidebar()}>Collapse</button>
      </main> */}
    </div>
  );
}

export default CustomNavbar;
