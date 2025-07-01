import NodeJsCrudMongoAppHome from "../../src/assets/nodejs-crud-mongo-app-home.png";

const Blog = () => {
  return (
    <section id="blogs" className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Blog
        </h2>
        <div className="flex flex-col items-center space-y-8  ">
          {/* Blog Card */}
          <article className="relative bg-white rounded-xl shadow-lg md:w-[50%] sm:w-[100%] max-w-xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={NodeJsCrudMongoAppHome}
                alt="CRUD Blog App - Node.js & MongoDB"
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <header className="mb-3">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  CRUD Blog App with Node.js & MongoDB
                </h3>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>By Shashank M M</span>
                </div>
              </header>
              <p className="text-gray-700 mb-4">
                Explore how to build a full-stack blog platform with Node.js,
                Express, and MongoDB. Learn about RESTful API design, CRUD
                operations, and best practices for scalable backend development.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                  Node.js
                </span>
                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                  MongoDB
                </span>
                <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">
                  Express
                </span>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  REST API
                </span>
              </div>
              <a
                href="https://www.valuebound.com/resources/blog/creating-crud-api-using-nodejs-and-mongodb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                title="Read Full Blog"
              >
                Read Full Blog →
              </a>
            </div>
            <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full shadow">
              Featured
            </span>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
