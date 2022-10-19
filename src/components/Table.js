import React, { useContext } from 'react'
import Modal from './Modal'
import { appContext } from './App';

const Table = function() { 

    const {searchData, table} = useContext(appContext);

    const[showModal, setShowModal] = React.useState(false);
    const[book, setBook] = React.useState();


    const toggleModal = function() {
        setShowModal(function(prevState) {
            return !prevState;
        });
    };


    const displayBook = function(item) {
        setBook(item);
    }


    return (
        <div className = "table-container">
           {table && (
           <table className = "table" >
            <thead>
                <tr>
                    <th className = "table__heading">#</th>
                    <th className = "table__heading">Image</th>
                    <th className = "table__heading">Title</th>
                    <th className = "table__heading">Author</th>
                    <th className = "table__heading">Published</th>
                    <th className = "table__heading">Page Count</th>
                    <th className = "table__heading">Language</th>
                </tr>
            </thead>
            <tbody>
                {searchData && searchData.map(function(item,index) {
                   let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

                   if(thumbnail != undefined) {
                    return(
                        <tr>
                            <td className = "table__data">{index + 1}</td>
                            <td className = "table__data" ><img className = "table__image"
                                     src = {thumbnail}
                                     onClick = {function(event){toggleModal(event); displayBook(item);}}
                                     ></img></td>
                            <td className = "table__data">{item.volumeInfo.title}</td>
                            <td className = "table__data">{item.volumeInfo.authors}</td>
                            <td className = "table__data">{item.volumeInfo.publishedDate}</td>
                            <td className = "table__data">{item.volumeInfo.pageCount}</td>
                            <td className = "table__data">{item.volumeInfo.language}</td>
                        </tr>
                    );
                   }
                })}
            </tbody>
            </table>) }
            <Modal showModal = {showModal}
                   dontShowModal = {toggleModal}
                   book = {book}
                   />
        </div>
    )
    
}

export default Table