import CurrencyDropdown from "./CurrencyDropdown"
import LanguageDropdown from "./LanguageDropdown"

const TopBar = () => {
    return(
        <section className="TopBar bg-backgroundPink text-white">
            <div className="container mx-auto flex justify-between items-center py-2">
            <div className="bg-backgroundPink text-sm flex justify-center items-center space-x-4 py-2 mx-auto lg:mx-0 lg:justify-between">
                    <span>Welcome to Netmark online Store</span>
                    <span className="border-l border-white h-6 mx-2 hidden xs:inline-block"></span>
<span className="hidden xs:inline-block"><i className="fa-solid fa-shop"></i> Track Your Order</span>
<span className="border-l border-white h-6 mx-2 hidden xs:inline-block"></span>
<span className="hidden xs:inline-block hover:text-hoverColor cursor-pointer"><i className="fa-regular fa-envelope"></i> demo@gmail.com</span>
                </div>
                <div className="hidden lg:flex items-center space-x-6">
                    <LanguageDropdown textColor="text-white" />
                    <span className="border-l border-white h-6 mx-2"></span>
                    <CurrencyDropdown/>
                </div>
            </div>
        </section>
    )
}

export default TopBar