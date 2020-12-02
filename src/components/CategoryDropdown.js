import React, { useState, useEffect } from 'react';

function CategoryDropdown(props) {
    const [categories, setCategories] = useState([]);
    const onChange = props.onChange;
    useEffect(() => {
        const getCategories = async () => {
            fetch('http://localhost:3001/api/categories')
                .then((response) => response.json())
                .then((data) => setCategories(data.map(category => category)))
        }
        getCategories()
    });
    return (
        <select name="category" onChange={onChange}>
            <option key='default' value=''>Select Category</option>
            {categories.map((category) => (
                <option key={category.name} value={category.name}>{category.name}</option>
            ))}
        </select>
    );
};

export default CategoryDropdown;