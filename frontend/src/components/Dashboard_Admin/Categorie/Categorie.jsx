import React, { useState } from 'react'

export default function Categorie() {
    const [updateCategoryInput, setUpdateCategoryInput] = useState(UpdateCatagory_input);
    const [newIcon, setNewIcon] = useState(Newicon);
    const [categoryInput, setCategoryInput] = useState(catagory_input);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleUpdateCategory = () => {
        // Implement your update category logic here
    };

    const handleAddCategory = () => {
        // Implement your add category logic here
    };

    const handleEditCategory = (id) => {
        // Implement your edit category logic here
        setSelectedCategory(id);
    };

    const handleDeleteCategory = (id) => {
        // Implement your delete category logic here
    };

    const handleCloseIcon = () => {
        // Implement your close icon logic here
    };

    return (
        <div className="form-elements-wrapper mt-4 ms-2">
            <div className="row">
                <div className="col-lg-10 m-auto">
                    <div className="card-style mb-30">
                        {updateCategoryInput ? (
                            <>
                                <h6 className="mb-25">Update categories</h6>
                                <div className="input-style-3">
                                    <input
                                        type="text"
                                        placeholder="Category Name"
                                        value={updateCategoryInput}
                                        onBlur={(e) => setUpdateCategoryInput(e.target.value)}
                                        className={updateCategoryInput ? 'red' : ''}
                                    />
                                    <span className="icon"><i className="fa-solid fa-layer-group"></i></span>
                                    <div>
                                        {updateCategoryInput && <span className="error text-danger">{updateCategoryInput}</span>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className={!Newicon ? 'custom-file-input-button' : 'custom-file-input-button hidden'}>
                                        <i className="fa-solid fa-images"></i>
                                    </label>
                                    <input
                                        type="file"
                                        className="custom-file-input form-control"
                                        id="exampleFormControlInput1"
                                        onChange={(e) => setNewIcon(e.target.files[0])}
                                    />
                                    {OldIcon && (
                                        <div className="d-flex justify-content-start">
                                            <p>
                                                <span className="status-btn active-btn">Old</span>
                                                <img className="image_icon" src={OldIcon} alt="Old Icon" />
                                            </p>
                                            {Newicon && (
                                                <p>
                                                    <span className="status-btn success-btn">New</span>
                                                    <img className="image_icon" src={URL.createObjectURL(Newicon)} alt="New Icon" />
                                                </p>
                                            )}
                                            <p className="btn-close" onClick={handleCloseIcon}></p>
                                            {Newicon && <div>Uploading...</div>}
                                        </div>
                                    )}
                                    {Newicon && <div className="text-danger">@error('Newicon') {message} @enderror</div>}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-success mb-4 button_hover"
                                    onClick={handleUpdateCategory}
                                    disabled={Newicon}
                                >
                                    <span>{Newicon ? <div>Loading...</div> : 'Update Category'}</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <h6 className="mb-25">Add categories</h6>
                                <div className="input-style-3">
                                    <input
                                        type="text"
                                        placeholder="Category Name"
                                        value={categoryInput}
                                        onBlur={(e) => setCategoryInput(e.target.value)}
                                        className={categoryInput ? 'red' : ''}
                                    />
                                    <span className="icon"><i className="fa-solid fa-layer-group"></i></span>
                                    <div>
                                        {categoryInput && <span className="error text-danger">{categoryInput}</span>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className={!icon ? 'custom-file-input-button' : 'custom-file-input-button hidden'}>
                                        <i className="fa-solid fa-images"></i>
                                    </label>
                                    <input
                                        type="file"
                                        className="custom-file-input form-control"
                                        id="exampleFormControlInput1"
                                        onChange={(e) => setNewIcon(e.target.files[0])}
                                    />
                                    {icon && (
                                        <div className="d-flex justify-content-start">
                                            <img className="image_icon" src={URL.createObjectURL(icon)} alt="New Icon" />
                                            <p className="btn-close" onClick={handleCloseIcon}></p>
                                            {Newicon && <div>Uploading...</div>}
                                        </div>
                                    )}
                                    {icon && <div className="text-danger">@error('icon') {message} @enderror</div>}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-success mb-4 button_hover"
                                    onClick={handleAddCategory}
                                    disabled={icon}
                                >
                                    <span>{icon ? <div>Loading...</div> : 'Add Category'}</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="col-lg-10 m-auto">
                    <div className="card-style mb-30">
                        <h6 className="mb-10">List Categories</h6>
                        <div className="table-wrapper table-responsive">
                            <table className="table text-center align-items-center" id="paginated-posts">
                                <thead>
                                    <tr>
                                        <th><h6>Icon</h6></th>
                                        <th><h6>Title</h6></th>
                                        <th><h6>Action</h6></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories ? (
                                        categories.map((category) => (
                                            <tr key={category.id}>
                                                <td>
                                                    <div className="employee-image img-fluid mx-auto d-block">
                                                        <img className="" src={category.icon} alt={`${category.Name} Icon`} />
                                                    </div>
                                                </td>
                                                <td className="min-width">
                                                    <p>{category.Name}</p>
                                                </td>
                                                <td>
                                                    <div className="action mx-auto d-block">
                                                        <button className="text-success me-2" onClick={() => handleEditCategory(category.id)}>
                                                            <i className="fa-regular fa-pen-to-square"></i>
                                                        </button>
                                                        <button className="text-danger" onClick={() => handleDeleteCategory(category.id)}>
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3"><h1>No data</h1></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                   
                    </div>
                </div>
            </div>
        </div>
    );
}
