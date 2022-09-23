import React from 'react'
import Modal from './Modal'

const Table = function(
    {
        searchData,

        favorite,
        toRead,
        readingNow,
        haveRead,

        table
    }
) { 

    const[showModal, setShowModal] = React.useState(false);
    const[book, setBook] = React.useState();


    const toggleModal = function() {
        setShowModal(function(prevState) {
            return !prevState;
        })
    }


    const displayBook = function(item) {
        setBook(item);
    }

    return (
        <div className = "table-container">
           {table && (
           <table>
            <thead className = "table-head table-head--flex">
                <tr className = "heading-row">
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th>Page Count</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                {searchData && searchData.map(function(item,index) {
                   let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

                   if(thumbnail != undefined) {
                    return(
                        <tr>
                            <td>{index + 1}</td>
                            <td ><img className = "table-image"
                                     src = {thumbnail}
                                     onClick = {function(event){toggleModal(event); displayBook(item);}}
                                     ></img></td>
                            <td>{item.volumeInfo.title}</td>
                            <td>{item.volumeInfo.authors}</td>
                            <td>{item.volumeInfo.publishedDate}</td>
                            <td>{item.volumeInfo.pageCount}</td>
                            <td>{item.volumeInfo.language}</td>
                        </tr>
                    );
                   }
                })}
            </tbody>
            </table>) }
            <Modal showModal = {showModal}
                   dontShowModal = {toggleModal}
                   book = {book}
                   favorite = {favorite}
                   toRead = {toRead}
                   readingNow = {readingNow}
                   haveRead = {haveRead}
                   />
        </div>
    )
    
}

export default Table