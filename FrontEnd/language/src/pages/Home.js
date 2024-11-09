import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/user/login');
    };

    return (
        <div className="container">
            <div className="main-text-container">
                <div className="main-text">🚀 Your Journey to Fluency Begins Here 🌟</div>
            </div>

            <div className="auth-container">
                <button className="auth-button login-button" onClick={handleClick}>Login</button>
                <button className="auth-button signup-button">Signup</button>
            </div>

            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="icon-container">
                        <div className="icon"></div>
                        <div className="icon"></div>
                        <div className="icon"></div>
                    </div>

                    <div className="bottom-icons">
                        <div className="icon"></div>
                        <div className="icon"></div>
                    </div>

                    <div className="user-profile">
                        <div className="profile-icon">
                            <div className="status-indicator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
