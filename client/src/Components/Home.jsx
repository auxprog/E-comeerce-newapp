import { Box, makeStyles } from '@material-ui/core';
import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';
import { green } from '@material-ui/core/colors';


const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },

    pie:{
        color: '#fff',
        cursor: 'pointer',
    }
})

const Home = () => {
    const classes = useStyle();

    const getProducts = useSelector(state => state.getProducts);
    const { products} = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <> 
            <NavBar style={{  color: '#C4870E', }}/>
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide
                    data={products} 
                    title='Discounts for You'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                />
                <footer style={{background: '#000', margin: '-1%', padding:'2%',}}>
                 <h1  className={classes.pie} > This is a E-comerce web app</h1>
                 <hr style={{color: '#fff',}} />
                  <span style={{color: '#fff'}}>Created by <a href="https://github.com/auxprog" style={{textDecoration: 'none',color:'#0574b6',}}>auxprog</a></span>

                </footer>
            </Box>
        </>
    )
}

export default Home;