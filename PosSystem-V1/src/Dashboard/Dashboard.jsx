import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBar from "../Dashboard/SideBar";
import userImage from "../assets/images/user.png";
import "../css/Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [store, setStore] = useState("Berty Sport Corner");
  const [type, setType] = useState("N/A");
  const [email, setEmail] = useState("N/A");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { UserName, Image, Store, Type, Email } = location.state;

      setUsername(UserName || "Guest");
      setStore(Store || "Berty Sport Corner");
      setType(Type || "N/A");
      setEmail(Email || "N/A");
      setImage(Image ? `http://localhost:5000/uploads/${Image}` : userImage);
      setLoading(false);
    } else {
      setError("User data not found");
      setLoading(false);
    }
  }, [location.state]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Header Navbar */}
      <header className="dashboard-header">
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="navbar-center">
            <h1 className="store-name">{store}</h1>
          </div>

          <div className="navbar-right">
            <div className="user-info">
              <div className="image-hover">
                <img src={image} alt="User" className="user-image" />
                <div className="hover-info">
                  <p>{username}</p>
                  <p>{email}</p>
                  <p>{type}</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {error && <div className="error-message">Error: {error}</div>}

      <SideBar username={username} />
    </div>
  );
};

export default Dashboard;
