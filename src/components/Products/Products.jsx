import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://cdn.shopify.com/s/files/1/1703/6727/products/tropicfeel-web-ecommerce-jungle-chip-grey-01.jpg?v=1628159134' },
    { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$10', image: 'https://thumbs.dreamstime.com/b/apple-macbook-pro-retina-open-tab-safari-which-shows-yahoo-web-page-varna-bulgaria-march-directly-front-view-inch-91718330.jpg' }
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
