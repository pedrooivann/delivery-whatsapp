import "./Header.css";
import {Bell} from "lucide-react";

function Header (){
    return(
            <header className="dark">
                <h1>My Delivery Desk</h1>

                <button 
                id="notification-btn"
                aria-label="Abrir notificações"
                type="button">
                
                <Bell 
                id="bell" 
                size = {40} 
                strokeWidth={3}
                />

                </button>

            </header>
    )
}


export default Header;