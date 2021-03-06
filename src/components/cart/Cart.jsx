import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import CartItem from './cartItem/CartItem';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Cart = ({cart, handleEmptyCart,handleUpdateCartQty,handleRemoveFromCart}) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography className="subtitle1">You have no items in your shopping cart, 
            <Link className={classes.link}>start adding some!</Link>
        </Typography>
    )

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}  />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formmatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} onClick={handleEmptyCart} size="large" type="button" variant="contained" color="secondary">
                            EmptyCart
                        </Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                            Check out
                        </Button>
                    </div>
                </div>
            </>
        )
    };

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography className={classes.title}>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
