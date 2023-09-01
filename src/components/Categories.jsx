import React, { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios'
import { Row } from 'antd'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const URL = 'https://api.spotify.com/v1/browse/categories'
    //getcategories
    
    const getCategories = async () => {
        const response = await axios.get(`${URL}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let getcategories = response.data.categories
        console.log(getcategories.items)
        let categoryList = getcategories.items
        setCategories([...categoryList])
    }
    

    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };


    useEffect(() => {
        getCategories()
    }, []);

    //categories state change
    useEffect(() => {

    }, [categories]);
  return (
    <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }} gutter={[16, 24]}>
        {categories?.map((category,index)=>(<Category key={index} category={category}/>))}
    </Row>
  )
}

export default Categories