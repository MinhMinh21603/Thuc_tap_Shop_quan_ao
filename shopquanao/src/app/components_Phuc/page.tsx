import React from "react";
import DealsOfTheDay from "./DealOfTheDay/page";
import NewProduct from "./newProduct/page";

const Page_product_Home = () =>{
    return(
        <div className="container mx-auto">
            <NewProduct/>
            <DealsOfTheDay/>
        </div>
    );
}
export default Page_product_Home;