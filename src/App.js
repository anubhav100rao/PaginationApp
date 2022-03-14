import './App.css';
import React from 'react'
import {useState} from 'react'

import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Comment from './Comment';
const App = () => {

    const [items, setItems] = useState([])

    const handlePageClick = async(data) => {
        console.log("Clicked ", data)
        
        const page = data.selected + 1
        console.log(page)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}`)
        
        setItems(() => res.data)
        console.log(items)
    }

    return (
        <div className="App">
            <header className='App-header'>
                {
                    items.map(item => (
                        <Comment key = {item.id} postId={item.postId} id={item.name} name={item.name} email={item.email} body={item.body}  />
                    ))
                }

                <ReactPaginate 
                    pageCount={42}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={'page-item justify-content-center'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </header>
        </div>
    )
}

export default App