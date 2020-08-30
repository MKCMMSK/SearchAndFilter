import React from 'react';
import axios from 'axios';


export default function TestEventSearch() {
    // tests events search api for all category + no keywords
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 1,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 4")
    });

    // tests events search api for all category + no keywords page 2
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 2,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 8")
    });

    // tests events search api for all category + no keywords page 3
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 3,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 11, which is everything")
    });

    // tests events search api for red category + no keywords page 1
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 1,
        'pageSize': 4,
        'categoryId': 1,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 4")
    });

    // tests events search api for red category + no keywords page 2
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 2,
        'pageSize': 4,
        'categoryId': 1,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 6")
    });

    // tests events search api for blue category + no keywords page 1
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 1,
        'pageSize': 4,
        'categoryId': 2,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 4")
    });

    // tests events search api for blue category + no keywords page 2
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 2,
        'pageSize': 4,
        'categoryId': 2,
        'keyword': ""
      }
    ).then(res => {
        console.log(res.data.length, " this should be 5")
    });

    // tests events search api for all category + interview keywords page 1
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 1,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': "interview"
      }
    ).then(res => {
        console.log(res.data.length, " this should be 4")
    });

    // tests events search api for all category + interview keywords page 2
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 2,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': "interview"
      }
    ).then(res => {
        console.log(res.data.length, " this should be 5")
    });

    // tests events search api for all category + prep keywords page 1
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 1,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': "prep"
      }
    ).then(res => {
        console.log(res.data.length, " this should be 4")
    });

    // tests events search api for all category + prep keywords page 1
    axios.post('http://localhost:8000/api/events/search',
      {
        'pageIndex': 2,
        'pageSize': 4,
        'categoryId': 0,
        'keyword': "prep"
      }
    ).then(res => {
        console.log(res.data.length, " this should be 7")
    });

    return ("THESE ARE API TESTS");
}