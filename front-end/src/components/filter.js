import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
        prop.setCategory(event.target.value);
    };

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
