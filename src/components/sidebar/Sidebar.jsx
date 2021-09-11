import React from 'react'
import "./sidebar.css";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import GroupIcon from '@material-ui/icons/Group';
import MovieIcon from '@material-ui/icons/Movie';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import StoreIcon from '@material-ui/icons/Store';
import HistoryIcon from '@material-ui/icons/History';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <span className="listItemIcon">
                            <RssFeedIcon/>
                        </span>
                        <span className="listItemText">Feed</span>
                    </li>

                    <li className="sidebarListItem">
                        <span className="listItemIcon">
                            <MenuBookIcon/>
                        </span>
                        <span className="listItemText">Book Requests</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="listItemIcon">
                            <LocalLibraryIcon/>
                        </span>
                        <span className="listItemText">Your Library</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="listItemIcon">
                            <StoreIcon/>
                        </span>
                        <span className="listItemText">Bookstore</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="listItemIcon">
                            <MovieIcon/>
                        </span>
                        <span className="listItemText">Videos</span>
                    </li>
                    
                    <li className="sidebarListItem">
                        <span className="listItemIcon">
                            <GroupIcon/>
                        </span>
                        <span className="listItemText">Groups</span>
                    </li>
                    <hr className="sidebarHr"/>
                    <div className="sidebarBottom">
                        <div className="sidebarListBottomHeader">
                            <span className="listItemIcon">
                                <HistoryIcon/>
                            </span>
                            <span className="listItemText">Recent Activity</span>
                        </div>
                        <ul className="sidebarList2">
                            <li className="sidebarList2Item">    
                                <img className="sidebarList2Image" src="assets/book/raghuvansham.jpeg"/>
                                <span className="listItemText">Raghuvasham</span>
                            </li>
                            <li className="sidebarList2Item">    
                                <img className="sidebarList2Image" src="assets/person/2.jpeg"/>
                                <span className="listItemText">Friend</span>
                            </li>
                            <li className="sidebarList2Item">    
                                <img className="sidebarList2Image" src="assets/book/download.jpeg"/>
                                <span className="listItemText">Subtle Art of not Giving...</span>
                            </li>
                            <li className="sidebarList2Item">    
                                <img className="sidebarList2Image" src="assets/person/6.jpeg"/>
                                <span className="listItemText">Friend</span>
                            </li>
                            <li className="sidebarList2Item">    
                                <img className="sidebarList2Image" src="assets/person/7.jpeg"/>
                                <span className="listItemText">Friend</span>
                            </li>
                        </ul>
                    </div>
                    


                    

                </ul>
            </div>
        </div>
    )
}
