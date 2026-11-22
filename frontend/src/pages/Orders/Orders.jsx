import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import OrderSearchBar from "../../components/Orders/OrderSearchBar/OrderSearchBar";

function Orders (){
    return (
        <>  
            <div className="outer-layout">
                <Header/>

                    <div className="layout">
                        <Sidebar/>

                        <div className="content-section">
                            <OrderSearchBar/>

                        <hr className="content-section-main-hr"/>

                        

                        </div>
                </div>
        
            </div>
        </>

    );
}

export default Orders;