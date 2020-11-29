import React, { useState, useEffect } from "react"

const CategoryDropdown = () => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        const getCategories = async () => {
            fetch('http://localhost:3001/api/categories')
                .then((response) => response.json())
                .then((data) => setCategories(data.map(category => category)))
        }
        getCategories()
    }, [])

    return (
        <label>
            Category
            <select>
                <option key='default' value=''>Categories</option>
                
                {categories.map((category) => (
                    <option key={category.name} value={category.name}>{category.name}</option>
                ))}
            </select>
        </label>
    )
};

export default CategoryDropdown;