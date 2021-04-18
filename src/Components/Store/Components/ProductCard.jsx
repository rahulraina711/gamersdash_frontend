import {domain} from '../../../utils';
import './product.scss';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';
import {AddShoppingCart} from '@material-ui/icons';


export default function ProductCard({id , image , name , description , price , countInStock}){


  function addAction(id){

  }
    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(1),
        },
      }));
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
          primary: yellow,
        },
      });
      

    function beautifyDesc(){
        let coolDesc = description.split('.');
        return coolDesc.map((desc,idx)=>{
            return <li key={idx}>{desc}</li>
        })
    }

    return(
        <div className="prod-card">
            <div className="prod-image">
                <img className="fit-pic" src={domain+"/"+image} alt="image_prod" />
            </div>
            <div className="prod-details">
                <div className="prod-name">{name}</div>
                <div className="prod-description">
                        <ul>
                            {beautifyDesc()}
                        </ul>
                    </div>
            </div>
            <div className="cart-fxns">
                <div className="price">Price: ₹{price}</div>
                <div className="in-stock">In Stock : {countInStock}</div>
                <ThemeProvider theme={theme}>
                  <Button variant="contained" color="primary" className={classes.margin} onClick={()=>addAction(id)}>
                    <AddShoppingCart />
                  </Button>
                </ThemeProvider>
            </div>
        </div>
    )
}