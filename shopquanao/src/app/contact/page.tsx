import React from 'react';

const ContactUs: React.FC = () => {
    return (
        <div className="flex justify-center items-start p-5">
            {/* Left contact information section */}
            <div className="bg-pink-600 text-white p-8 rounded-lg w-1/3 shadow-lg">
                <h2 className="text-2xl mb-5">Contact Us</h2>
                <div className="flex items-center mb-5">
                    <span className="text-xl mr-4">📞</span>
                    <div>
                        <strong>Change the design through a range</strong><br />
                        +01234-567890<br />
                        +01234-5688765
                    </div>
                </div>
                <div className="flex items-center mb-5">
                    <span className="text-xl mr-4">📧</span>
                    <div>
                        <strong>Email Address</strong><br />
                        info@example.com<br />
                        info@example.com
                    </div>
                </div>
                <div className="flex items-center mb-5">
                    <span className="text-xl mr-4">🏛️</span>
                    <div>
                        <strong>Office Location</strong><br />
                        123 Street New York City,<br />
                        United States Of America NY 750065
                    </div>
                </div>
                <div className="mb-5">
                    <strong>Follow Us</strong><br />
                    <div className="flex space-x-4 mt-2">
                        <span>🌐</span>
                        <span>🌐</span>
                        <span>🌐</span>
                        <span>🌐</span>
                    </div>
                </div>
            </div>

            {/* Right contact form section */}
            <div className="bg-white p-8 rounded-lg w-2/3 shadow-lg">
                <h2 className="text-2xl mb-5 text-black">Contact Me</h2>
                <form className="w-full">
                    <div className="flex justify-between mb-5">
                        <div className="w-1/2 mr-5">
                            <label htmlFor="first-name" className="block mb-2 font-bold">First Name *</label>
                            <input type="text" id="first-name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your First Name" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="last-name" className="block mb-2 font-bold">Last Name *</label>
                            <input type="text" id="last-name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Last Name" />
                        </div>
                    </div>
                    <div className="flex justify-between mb-5">
                        <div className="w-1/2 mr-5">
                            <label htmlFor="phone" className="block mb-2 font-bold">Phone Number *</label>
                            <input type="text" id="phone" className="w-full p-2 border border-gray-300 rounded" placeholder="Phone Number" />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="email" className="block mb-2 font-bold">Email *</label>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Email" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="block mb-2 font-bold">Write Your Message *</label>
                        <textarea id="message" className="w-full p-2 border border-gray-300 rounded h-24 resize-vertical" placeholder="Write Your Message"></textarea>
                    </div>
                    <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded-lg text-lg hover:bg-pink-700 transition duration-300">Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
