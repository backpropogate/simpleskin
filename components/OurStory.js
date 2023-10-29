import React from 'react'

const OurStory = () => {
  return (
    <div>
        <div className="text-center my-12 py-5 bg-gray-100 rounded-lg">
    <h2 className="text-xl text-gray-800 mb-4">Our Story</h2>
    <p className="text-lg text-gray-500 mx-auto mb-6 w-full md:max-w-xl">Every product has a story. Ours is crafted with love, dedication, and a touch of home.</p>

    {/* First Image - Product being packed */}
    <div className="mb-6 border border-gray-300 p-2.5 rounded-md">
        <img 
            src="https://cdn.shopify.com/s/files/1/0671/3098/2646/files/moms.png?v=1698231002" 
            alt="Product packing" 
            className="w-full md:max-w-2xl h-auto mx-auto mb-4"
            loading="lazy" />
        <p className="text-lg text-gray-600">Local moms delicately packing each product, ensuring it reaches you in perfect condition.</p>
    </div>

    {/* Second Image - Local Moms at work */}
    <div className="border border-gray-300 p-2.5 rounded-md">
        <img 
            src="https://cdn.shopify.com/s/files/1/0671/3098/2646/files/mom2.png?v=1698230960" 
            alt="Local moms at work" 
            className="w-full md:max-w-2xl h-auto mx-auto mb-4"
            loading="lazy" />
        <p className="text-lg text-gray-600">Empowering local moms, providing them with a platform to showcase their skills and passion.</p>
    </div>
</div>

    </div>
  )
}

export default OurStory