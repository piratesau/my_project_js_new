import React from "react"


class Header extends React.Component {
    render() {
                const { title, activeSection, onDefaultClick, 
                    onProfessionClick, onHistoryClick, onFriendsClick } = this.props;
        
        return (
            <header className="header">
                <h1>{title}</h1>
                
                <div className="header-buttons">
                    <button 
                        onClick={onDefaultClick}
                        
                    >
                        Обо мне
                    </button>
                    
                    <button 
                        onClick={onProfessionClick}
                        
                    >
                        Профессия
                    </button>
                    
                    <button 
                        onClick={onHistoryClick}
                        
                    >
                        История
                    </button>
                    <button 
                        onClick={onFriendsClick}
                        className="secret"
                    >
                        Секрет
                    </button>
                </div>
                
            </header>
        );
    }
}

export default Header;