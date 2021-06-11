import { makeStyles } from '@material-ui/styles';

export default makeStyles({
    buttonBack:{
        margin: 10,
        textDecoration: 'none',
        display: 'block'
    },
    cardContainer:{
        marginBottom: 8,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        width: 280,
        display: 'inline-block',
        margin: 8
    },
    gridContainer:{
        display: 'flex',
        flexDirection: 'column',
    },
    poster: {
        width: 250,
        height:350,
        padding: '8px 15px'
    },
    textContainer: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
        color: 'white'
    },
    textType: {
        textTransform: 'capitalize',
        color: 'purple'
    }
})