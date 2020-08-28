import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '25%',
    },
    title: {
        paddingLeft: 15,
        fontSize: 40,
    },
    categoryWithRed: {
        fontSize: 30,
        'margin-left': 15,
        'margin-bottom': 1,
        color: "red"
    },
    categoryWithBlue: {
        fontSize: 30,
        'margin-left': 15,
        'margin-bottom': 1,
        color:  "blue"
    },
    summary: {
        padding: 18,
        fontSize: 18
    }
})

export default function Item(prop) {

    const classes = useStyles();
    let redOrBlue = true;

    if (prop.category === "Red") {
        redOrBlue = true;
    } else {
        redOrBlue = false;
    }
    return(
        <Card className={classes.root}>
            <Grid container
                alignItems="flex-end"
            >
                <Typography className={classes.title} variant="h1" color='textPrimary'>
                    {prop.title}
                </Typography>
                <Typography className={redOrBlue ? classes.categoryWithRed: classes.categoryWithBlue} variant="h4">
                    {prop.category}
                </Typography>
            </Grid>
            <Typography className={classes.summary} variant="body2" color='textSecondary'>
                {prop.summary}
            </Typography>
        </Card>
    )
}