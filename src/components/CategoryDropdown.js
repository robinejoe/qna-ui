import React, { useState, useEffect } from 'react';

function CategoryDropdown(props) {
    const [categories, setCategories] = useState([]);
    const onChange = props.onChange;
    useEffect(() => {
        const getCategories = async () => {
            fetch('http://localhost:3001/api/categories')
                .then((response) => response.json())
                .then((data) => {
                    const sortedCategoryNames = data.map(category => category.name).sort();
                    setCategories(sortedCategoryNames);
                })
        }
        getCategories()
    });
    return (
        <select name="category" onChange={onChange}>
            <option key='default' value=''>Select Category</option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
    );
};

export default CategoryDropdown;