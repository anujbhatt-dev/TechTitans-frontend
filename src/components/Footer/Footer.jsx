import { Link, NavLink } from "react-router-dom"
const Footer = ( )=>{
    return <footer>
      <div>

    <div class="footer-container">
      <div class="contact-info">
        <p>Email: contact@techtitansclub.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div class="social-media">
        <a href="https://twitter.com/TechTitansClub" target="_blank" title="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/company/techtitansclub" target="_blank" title="Connect with us on LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/TechTitansClub" target="_blank" title="Explore our projects on GitHub"><i class="fab fa-github"></i></a>
      </div>
      <div class="quick-links">
        <ul>
          <li><Link to="/home">Go To Home</Link></li>
          {/* <li><a href="#">Resources</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li> */}
        </ul>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2023 Tech Titans Club. All rights reserved.</p>
    </div>
    <div class="credits">
      <p>Website designed and developed by Anuj Bhatt.</p>
    </div>
      </div>
  </footer>
  
}

export default Footer