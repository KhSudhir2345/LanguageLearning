const Menubar=()=>{
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                    <div className="icon-container">
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                    </div>
                    
                <div className="sidebar-items">
                <div className="sidebar-item">
                    <div className="sidebar-link">
                    <div className="sidebar-icon">
                        <div className="sidebar-icon-inner"></div>
                        <div className="sidebar-icon-inner"></div>
                        <div className="sidebar-icon-inner"></div>
                    </div>
                    <div className="sidebar-text">Home</div>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-link">
                    <div className="sidebar-icon">
                        <div className="sidebar-icon-inner"></div>
                    </div>
                    <div className="sidebar-text">Dashboard</div>
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-link">
                    <div className="sidebar-icon">
                        <div className="sidebar-icon-inner circle"></div>
                    </div>
                    <div className="sidebar-text">Tasks</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    );
};

export default Menubar;