import React, { useState } from 'react'


const IO = () => {
   
  return (
    <div className="fixed top-4 left-0 right-0 flex flex-col items-center">
  <div className="fixed bottom-4 left-0 right-0 flex justify-center">
    <div className="flex flex-col bg-gray-800 bg-opacity-50 backdrop-blur-md border rounded-lg p-2">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered bg-transparent flex-grow"
        />
        <input
          type="file"
          className="file-input file-input-bordered file-input-accent ml-2"
        />
        <button className="btn btn-accent ml-2">Send</button>
      </div>
      <textarea
        className="textarea textarea-success mt-2 p-2 rounded flex-grow"
        placeholder="Bio"
      ></textarea>
    </div>
  </div>
</div>


  )
}

export default IO