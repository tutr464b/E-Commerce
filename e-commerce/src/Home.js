import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import Product from './product.js'
import './home.css'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="w-100"
                        src="https://s.alicdn.com/@banner/montage/184481-0ae59236bf03fe2ad6c496238440d962.jpg?content=%7B%2211%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Fimgextra%2Fi1%2FO1CN01MDejvd1ksVcs8TXHn_%21%216000000004739-2-tps-990-400.png%22%2C%22demo%22%3A%22%22%7D%7D%2C%2212%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2220%22%2C%22lineHeight%22%3A%2224%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22New+designs+and+new+processes%22%7D%7D%2C%2216%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2222%22%2C%22lineHeight%22%3A%2227%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22Packaging+%26+Printing+2021+Online+Trade+Show%22%7D%7D%2C%2220%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40img%2Ftfs%2FTB1MP5M4EH1gK0jSZSyXXXtlpXa-251-38.png%22%7D%7D%2C%2210%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40sc01%2Fkf%2FHbb6298b57dba4519b0e55c7f52994efdj.jpg_300x300.jpg%22%7D%7D%7D&channel=25"
                        alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="w-100"
                        src="https://img.alicdn.com/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png"
                        alt="Second slide"
                        />

                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="w-100"
                        src="https://s.alicdn.com/@banner/montage/194000-5fdefaeeab0dd9cd5485df3c7c39cd97.jpg?content=%7B%225%22%3A%7B%22attrs%22%3A%7B%22verticalAlign%22%3A%22top%22%2C%22mini%22%3Afalse%2C%22fontSize%22%3A%2224%22%2C%22align%22%3A%22left%22%2C%22value%22%3A%22https%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi2%2FO1CN01GU95HP1L1xn9xiETf_%21%216000000001240-2-tps-990-400.png%22%7D%7D%2C%226%22%3A%7B%22attrs%22%3A%7B%22mini%22%3Afalse%2C%22value%22%3A%22https%3A%2F%2Fs.alicdn.com%2F%40sc01%2Fkf%2FHTB1XzI_ac_vK1RkSmRyq6xwupXao.jpg_300x300.jpg%22%7D%7D%7D&channel=25"
                        alt="Third slide"
                        />

                        
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="home_row">
                <Product 
                title="Toy car for kids"
                price={29.99}
                image="https://babykid.com.vn/wp-content/uploads/2018/05/xe-o-to-dien-tre-em-nel-803-550x400.jpg"
                rating={5}/>
                <Product
                title='LEGO® Star Wars™: Die Komplette Saga'
                price={2.19}
                image="https://images-eu.ssl-images-amazon.com/images/I/81DVOFdoe7L._AC_UL200_SR200,200_.png"
                rating={4}/>

            </div>
            <div className="home_row">
                <Product
                title='Das Café am Rande der Welt'
                price={13.99}
                image="https://images-eu.ssl-images-amazon.com/images/I/91P2U8M591L._AC_UL200_SR200,200_.jpg"
                rating={5}
                />
                <Product
                title='Fujifilm Instax Mini 9 Camera'
                price={57.33}
                image="https://images-eu.ssl-images-amazon.com/images/I/71W8tHASLDL._AC_UL200_SR200,200_.jpg"
                rating ={4}/>
                <Product
                title='Casio Collection Unisex Digital Armbanduhr F-91W'
                price={45.55}
                image="https://images-eu.ssl-images-amazon.com/images/I/61lORJKO8eL._AC_UL320_SR256,320_.jpg"
                rating={3}/>
                
                

            </div>
            <div className="home_row">
            
                <Product
                title="SAM SUNG LED TV 2020"
                price={520}
                image="https://m.media-amazon.com/images/I/81JmvNZABEL._AC_UY218_.jpg"
                rating={5}/>
                

            </div>

        </div>
    )
}

export default Home
