import React from 'react';
import './Main.css';


export default function Maincomp() {
  return (
    <>
      <div className="repositories">
        <div className="buttons">
          <div className="cont">
            <h1>Repositories</h1>
            <h6>33 repositories</h6>
          </div>
          <div className="cont-btn">
            <div className="button"><i className="fa-solid fa-arrows-rotate"></i> Refresh</div>
            <div className="button-1"><i class="fa-solid fa-plus"></i>Add Repository</div>
          </div>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search repositories..." />
        </div>
        <div className="repository">
          <div className="name">design-system
          <i className="status public">Public</i>
          </div>
          
          <div className="details">
            <div className="info">
              <span className="language">Language: React</span>
              <span className="size">Size: 7320 KB</span>
            </div>
           
          </div>
          <div className="status">Updated: 1 day ago</div>
        </div>
        <div className="repository">
          <div className="name">codeant-ci-app
          <i className="status private">Private</i>
          </div>
          <div className="details">
            <div className="info">
              <span className="language">Language: Javascript</span>
              <span className="size">Size: 5871 KB</span>
            </div>
          
          </div>
          <div className="status">Updated: 2 days ago</div>
        </div>
        <div className="repository">
          <div className="name">analytics-dashboard
          <i className="status private">Private</i>
          </div>
          <div className="details">
            <div className="info">
              <span className="language">Language: Python</span>
              <span className="size">Size: 4521 KB</span>
            </div>
           
          </div>
          <div className="status">Updated: 5 days ago</div>
        </div>
        <div className="repository">
          <div className="name">mobile-app
          <i className="status public">Public</i>
          </div>
          <div className="details">
            <div className="info">
              <span className="language">Language: Swift</span>
              <span className="size">Size: 3096 KB</span>
            </div>
            
          </div>
          <div className="status">Updated: 3 days ago</div>
        </div>
        <div className="repository">
          <div className="name">e-commerce-platform
          <i className="status private">Private</i>
          </div>
          <div className="details">
            <div className="info">
              <span className="language">Language: Java</span>
              <span className="size">Size: 6210 KB</span>
            </div>
           
          </div>
          <div className="status">Updated: 6 days ago</div>
        </div>
        <div className="repository">
          <div className="name">blog-website
          <i className="status public">Public</i>
          </div>
          
          <div className="details">
            <div className="info">
              <span className="language">Language: HTML/CSS</span>
              <span className="size">Size: 1876 KB</span>
            </div>
            
          </div>
          <div className="status">Updated: 4 days ago</div>
        </div>
        <div className="repository">
          <div className="name">social-network
          <i className="status private">Private</i>
          </div>
       
          <div className="details">
            <div className="info">
              <span className="language">Language: PHP</span>
              <span className="size">Size: 5432 KB</span>
            </div>
            
          </div>
          <div className="status">Updated: 7 days ago</div>
        </div>
      </div>
    </>
  );
}
