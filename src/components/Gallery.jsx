import React from "react";

const Gallery = () => {
  return (
    <div id="gallery " className="max-w-[1140px] w-full m-auto px-4 py-16">
      <h2 className="text-center text-gray-600 pb-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="beach1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1535262412227-85541e910204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="beach2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
            alt="resort2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="resort1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1589420241438-38271f7d3cea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1273&q=80"
            alt="curse1"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
