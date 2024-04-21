import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AllCategorie, Api } from '../../../Api/api';
import Loading from '../../londing/londing';
import Swal from 'sweetalert2'

export default function Categorie() {
    const [updateCategoryInput, setUpdateCategoryInput] = useState(false);
    const [Icon, setIcon] = useState(null);
    const [categoryInput, setCategoryInput] = useState('');
    const [categories, setCategories] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');
    const [oldimg, setoldimg] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [IDCategorie, setIDCategorie] = useState('');


    const getCategories = () => {
        axios.get(`${Api}/${AllCategorie}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
        .then(function (response) {
            setCategories(response.data.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    useEffect(() => {
        getCategories();
    }, [isLoading]); // Reload categories when isLoading changes

    const handleEditCategory = (id) => {
        setIDCategorie(id);
        axios.get(`${Api}/Edit/Categorie/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
        .then(function (response) {
            setUpdateCategoryInput(true);
            setCategoryInput(response.data.Name); // Set category name for editing
            setoldimg(`http://127.0.0.1:8000/${response.data.icon}`); // Set preview URL for existing icon
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const handleUpdateCategory = () => {
        setIsLoading(true);
        console.log('object',categoryInput,'Icon',Icon,'IDCategorie',IDCategorie)

        const formData = new FormData();
        if (categoryInput !== '') {

        formData.append('CategoryName', categoryInput);
        if (Icon !== null) {
            formData.append('Icon', Icon);
        }
   
        axios.post(`${Api}/Update/Categorie/${IDCategorie}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
        .then(function (response) {
            console.log(response);
            setIsLoading(false);
            setUpdateCategoryInput(false);
            setCategoryInput('');
            setIcon(null);
            setPreviewUrl('');
            setError('');
            setIDCategorie('')
            // Refresh categories after update
            getCategories();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Category has been Updated",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(function (error) {
            console.log(error);
            if (error.response && error.response.data) {
                setError(error.response.data);
            } else {
                setError('Error updating category.');
            }
            setIsLoading(false);
        });
    }else {
        setError('Category name is required.');
        setIsLoading(false);
    }
    };

    const handleIconChange = (e) => {
        const file = e.target.files[0];
        setIcon(file);

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
        }
    };

    const handleAddCategory = () => {
        setIsLoading(true);
        let err = {}
   if (categoryInput === '' ) {
    err.categoryInput = 'Category name is required'
   
    
   }
   if (Icon === null) {
    err.Icon = 'Icon is required'
    
}
setError(err)
    if (Object.keys(err).length === 0) {

        const formData = new FormData();
        formData.append('CategoryName', categoryInput);
        formData.append('Icon', Icon);

        axios.post(`${Api}/Add/Categorie`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
        .then(function (response) {
            console.log(response);
            setIsLoading(false);
            setCategoryInput('');
            setIcon(null);
            setPreviewUrl('');
            setError('');
            // Refresh categories after adding
            getCategories();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Category has been Added",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(function (error) {
            let err = {}
            console.log(error.response.data.CategoryName);
            err.categoryInput = error.response.data.CategoryName
            err.Icon = error.response.data.Icon
            setError(err)
            setIsLoading(false)
        });
    }else {
        setIsLoading(false);

    }
  
    };

    const handleDeleteCategory = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                setIsLoading(true);

                axios.get(`${Api}/Delete/Categorie/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                })
                .then(function (response) {
                    // Refresh categories after delete
                    getCategories();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Categorie has been deleted.",
                        icon: "success"
                      });
                })
                .catch(function (error) {
                    console.log(error);
                    setError('Error deleting category.');
                })
                .finally(() => {
                    setIsLoading(false);
                });
            
            }
          });
       
    };

    const handleCloseIcon = () => {
        // Implement your close icon logic here
        setIcon('');
        
        setPreviewUrl('');
    };

    return (
        <section className="tab-components">
            {isLoading && <Loading />}
            <div className="container-fluid">
                <div className="title-wrapper pt-30">
                    <h2>Form Elements</h2>
                </div>
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="card-style mb-30">
                            {updateCategoryInput ? (
                                <>
                                    <h6 className="mb-25">Update category</h6>
                                    <div className="input-style-3">
                                        <input
                                            type="text"
                                            placeholder="Category Name"
                                            value={categoryInput}
                                            onChange={(e) => setCategoryInput(e.target.value)}
                                        />
                                        <span className="icon"><i className="fa-solid fa-layer-group"></i></span>
                                        {error && <span className="error text-danger">{error}</span>}

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="custom-file-input-button">
                                            <i className="fa-solid fa-images"></i> Upload Icon
                                        </label>
                                        <input
                                            type="file"
                                            className="custom-file-input form-control"
                                            id="exampleFormControlInput1"
                                            onChange={handleIconChange}
                                        />
                                        {oldimg && (
                                            <div className="d-flex justify-content-start">
                                                <p>
                                                    <span className="status-btn active-btn">Current</span>
                                                    <img className="image_icon" src={oldimg} alt="Current Icon" />
                                                </p>
                                                {previewUrl && (
                                                    <>
                                                    <p>
                                                        <span className="status-btn success-btn">New</span>
                                                        <img className="image_icon" src={previewUrl} alt="New Icon" />
                                                    </p>
                                                        <p className="btn-close" onClick={handleCloseIcon}></p>
                                                        </>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-success mb-4 button_hover"
                                        onClick={handleUpdateCategory}
                                    >
                                        Update Category
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h6 className="mb-25">Add category</h6>
                                    <div className="input-style-3">
                                        <input
                                            type="text"
                                            placeholder="Category Name"
                                            value={categoryInput}
                                            onChange={(e) => setCategoryInput(e.target.value)}
                                        />
                                        <span className="icon"><i className="fa-solid fa-layer-group"></i></span>
                                        {error.categoryInput && <span className="error text-danger">{error.categoryInput}</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="custom-file-input-button">
                                            <i className="fa-solid fa-images"></i> Upload Icon
                                        </label>
                                        <input
                                            type="file"
                                            className="custom-file-input form-control"
                                            id="exampleFormControlInput1"
                                            onChange={handleIconChange}
                                        />
                                        {previewUrl && <img className='ms-3' src={previewUrl} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px', borderRadius: '20px', height: '120px' }} />}
                                        {error.Icon && <span className="error text-danger">{error.Icon}</span>}

                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-success mb-4 button_hover"
                                        onClick={handleAddCategory}
                                    >
                                        Add Category
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
                                        {categories.length > 0 ? (
                                            categories.map((category) => (
                                                <tr key={category.id}>
                                                    <td>
                                                        <div className="employee-image img-fluid mx-auto d-block">
                                                            <img className="" src={`http://127.0.0.1:8000/${category.icon}`} alt={`${category.Name} Icon`} />
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
        </section>
    );
}
