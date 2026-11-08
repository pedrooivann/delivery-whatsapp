import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";


function Orders (){
    return (
        <>  
            <div className="outer-layout">
                <Header></Header>
                    <div className="layout">
                        <Sidebar></Sidebar>
                
                </div>
        
            </div>
        </>

    );
}

export default Orders;