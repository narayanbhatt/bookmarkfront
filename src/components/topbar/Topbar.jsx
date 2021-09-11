import "./topbar.css"
import { Container } from "react-bootstrap";
import { Person, Search, Notifications, Chat } from "@material-ui/icons";
import Dropdown from "react-bootstrap/Dropdown"
import { DropdownButton } from "react-bootstrap";


export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="Logo">Bookmark</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input  placeholder="Search for books, authors and friends" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
                
                {/* <Dropdown className="profileDropdown">
                    <Dropdown.Toggle className="profileDropdownToggle" id="dropdown-basic">
                        Hi, Yashika
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Liked Books</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Liked Authors</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Friends</Dropdown.Item>
                        <Dropdown.Divider></Dropdown.Divider>
                        <Dropdown.Item href="#/action-3">Privacy</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <img className="topbarImg" src="/assets/person/1.jpeg" alt=""></img>
            </div>
        </div>
        
    )
}