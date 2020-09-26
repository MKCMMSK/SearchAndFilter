import React from 'react';
import axios from 'axios';

export default function testCategories() {

    //tests retrieving all categories
    axios.get('http://localhost:8000/api/categories')
    .then(res => {
        console.log(res.data.length, " this should be 2");
    });
    return ("THIS IS ALL CATEGORIES TEST")
}