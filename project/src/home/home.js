import React, { useState } from "react";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setImageUrl(null);
    setShowModal(false);
  };
  const [imageUrl, setImageUrl] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
    // -------------------- CREATE DIVS -----------
    // create new div elements to display form data
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const linkDiv = document.createElement("div");
  
    // set text content of div elements to form data
    titleDiv.textContent = `${formData.title}`;
    descriptionDiv.textContent = `${formData.description}`;
    linkDiv.textContent = `${formData.link}`;
  
    // add classes to div elements
    titleDiv.classList.add("text-lg", "font-medium", "mb-2");
    descriptionDiv.classList.add("text-base", "mb-4");
    linkDiv.classList.add("text-sm", "text-blue-500");
  
    // create inner divs for each column of the parent div
    const innerDiv1 = document.createElement("div");
    const innerDiv2 = document.createElement("div");
    const innerDiv3 = document.createElement("div");
  
    // add classes to inner divs
    innerDiv1.classList.add("title","flex", "flex-col", "items-center", "bg-yellow-100", "rounded-lg", "p-4", "border", "border-gray-300", "mb-4");
    innerDiv2.classList.add("description","flex", "flex-col", "items-center", "bg-yellow-100", "rounded-lg", "p-4", "border", "border-gray-300", "mb-4");
    innerDiv3.classList.add( "link", "flex", "flex-col", "items-center", "bg-yellow-100", "rounded-lg", "p-4", "border", "border-gray-300", "mb-4");
  
    // append form data to inner divs
    innerDiv1.appendChild(titleDiv);
    innerDiv2.appendChild(descriptionDiv);
    innerDiv3.appendChild(linkDiv);
  
    // create container div to hold inner divs
    const containerDiv = document.createElement("div");
  
    // add classes to container div
    containerDiv.classList.add("w-full", "sm:w-1/2", "md:w-1/3", "lg:w-1/4", "flex", "flex-col", "p-4");
  
    // append inner divs to container div
    containerDiv.appendChild(innerDiv1);
    containerDiv.appendChild(innerDiv2);
    containerDiv.appendChild(innerDiv3);
  
    // append container div to parent container
    const container = document.getElementById("form-data-container");
    container.appendChild(containerDiv);

    //--------------------EDIT BUTTON-------------
    // create edit button element
    const editButton = document.createElement("button");

    // set text content of edit button
    editButton.textContent = "Edit";

    // add classes to edit button
    editButton.classList.add("bg-blue-500", "text-white", "py-2", "px-4", "rounded", "focus:outline-none", "focus:shadow-outline");
    // add event listener to edit button
    
    editButton.addEventListener("click", () => {
      console.log("Edit button was clicked")
    });
    // append edit button to container div
    containerDiv.appendChild(editButton);

  // ------------------------DELETE BUTTON-----------------
  // create delete button element
    const deleteButton = document.createElement("button");

    // set text content of delete button
    deleteButton.textContent = "Delete";

    // add classes to delete button
    deleteButton.classList.add("bg-red-500", "text-white", "py-2", "px-4", "rounded", "focus:outline-none", "focus:shadow-outline","mt-4");

    // add event listener to delete button
    deleteButton.addEventListener("click", () => {
      // remove current container from the parent container
      container.removeChild(containerDiv);
    });

    // append delete button to container div
    containerDiv.appendChild(deleteButton);
}
  

  return (
    <div className="">
      <div className="h-64 bg-[#393e46] flex items-center sm: h-[500px]">
        <div className="text-center flex flex-row items-center w-full sm: flex-col ">
          <div className="w-1/3">
            <h1 className="text-[35px] font-semibold font-mono text-[#FF5F1F]">
              Welcome to Digital Worker!
            </h1>
          </div>
          <div className="w-2/3">
            <h2 className="text-lg text-[#f2a154] mt-10">
              You can start showing-up your work using this application
            </h2>
            <button
              className="mt-4 text-white bg-[#ff5722] py-2 px-4 rounded-md hover:bg-[#e64a19]"
              onClick={handleUploadClick}
            >
              Upload here
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <form onSubmit={handleSubmit}>
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className=" relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-[#1f2327] h-[80vh] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="  flex flex-col ">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3
                          className=" text-white text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Upload your work here
                        </h3>
                        <div className="mt-4">
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700"

                          >
                            Title
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 sm:w-full sm:text-sm border-gray-300 rounded-md py-2"
                              placeholder="Enter title"
                              onChange={handleChange}
                              value={formData.title}
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              value={formData.description}
                              onChange={handleChange}
                              id="description"
                              name="description"
                              rows={3}
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 sm:w-full sm:text-sm border-gray-300 rounded-md py-2"
                              placeholder="Enter description"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="link"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Link
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="link"
                              id="link"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-72 sm:w-full sm:text-sm border-gray-300 rounded-md py-2"
                              placeholder="Enter link"
                              value={formData.link}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <label
                            htmlFor="file-upload"
                            className=" text-white bg-[#ff5722] py-2 px-4 rounded-md hover:bg-[#e64a19] cursor-pointer"
                          >
                            Upload file
                          </label>
                          <input
                            id="file-upload"
                            className="hidden"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              const reader = new FileReader();
                              reader.readAsDataURL(file);
                              reader.onloadend = () => {
                                setImageUrl(reader.result);
                              };
                            }}
                          />
                          {imageUrl ? (
                            <div className="mt-2">
                              <p className="text-sm text-white">
                                {imageUrl.name}
                              </p>
                            </div>
                          ) : (
                            <div className="mt-2">
                              <p className="text-sm text-white">
                                No file chosen
                              </p>
                            </div>
                          )}
                        </div>
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt="Uploaded Image"
                            className="h-[150px]"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1f2327]px-4 py-3 flex flex-col lg: flex justify-between  sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="text-white bg-[#ff5722] py-2 px-4 rounded-md hover:bg-[#e64a19] cursor-pointer"
                      onClick={handleSubmit}
                    >
                      Post
                    </button>
                    <button
                      onClick={handleCloseModal}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
      <div className="flex flex-col w-full">
        <div
          id="form-data-container"
          className="posts flex flex-row flex-wrap"
        ></div>
      </div>
    </div>
  );
};