import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles({
    formControl: {
        minWidth: 334,
        'background-color': 'white'
      }
})


export default function Filter(prop){
    // const [categoryList, setCategoryList] = useState([]);

    const classes = useStyles();

    const handleChange = (event) => {
        const name = event.target.name;
        prop.setCategory(event.target.value);
        console.log(event.target.value);
    };

    console.log(prop.categoryList, " inside filter")
    return(
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                native
                value={prop.category}
                onChange={handleChange}
                inputProps={{
                name: 'category',
                id: 'filled-age-native-simple',
                }}
            >   
               {
                   prop.categoryList.map(category => {
                       console.log(category);
                       return(
                           <option value={category.categoryName}>{category.categoryName}</option>
                       )
                   })
               }
                <option value={'All Category'} >All Category</option>
            </Select>
        </FormControl>
    );
}
