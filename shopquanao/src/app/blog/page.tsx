import React from 'react'

const Blog = () => {
  return (

    <section className="py-16">

      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">From The Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-start h-[450px]">
            <img src="/hero.png" alt="Blog Post 1" className="w-full h-[360px] object-cover bg-cover bg-center" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500">February 03, 2022</p>
                <h3 className="text-xl font-semibold mb-2">Fashion Trends In 2021 Styles, Colors, Accessories</h3>
              </div>
              <button className="bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-pink-700 transition duration-300 w-[142px]">
                Read more
              </button>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-start h-[450px]">
            <img src="/hero.png" alt="Blog Post 1" className="w-full h-[360px] object-cover bg-cover bg-center" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500">February 03, 2022</p>
                <h3 className="text-xl font-semibold mb-2">Fashion Trends In 2021 Styles, Colors, Accessories</h3>
              </div>
              <button className="bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-pink-700 transition duration-300 w-[142px]">
                Read more
              </button>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-start h-[450px]">
            <img src="/hero.png" alt="Blog Post 1" className="w-full h-[360px] object-cover bg-cover bg-center" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500">February 03, 2022</p>
                <h3 className="text-xl font-semibold mb-2">Fashion Trends In 2021 Styles, Colors, Accessories</h3>
              </div>
              <button className="bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-pink-700 transition duration-300 w-[142px]">
                Read more
              </button>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col text-start h-[450px]">
            <img src="/hero.png" alt="Blog Post 1" className="w-full h-[360px] object-cover bg-cover bg-center" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500">February 03, 2022</p>
                <h3 className="text-xl font-semibold mb-2">Fashion Trends In 2021 Styles, Colors, Accessories</h3>
              </div>
              <button className="bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-pink-700 transition duration-300 w-[142px]">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}

export default Blog
