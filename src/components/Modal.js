import React from 'react'

const Modal = function(
    {
        showModal,
        dontShowModal,
        book,
        favorite,
        toRead,
        readingNow,
        haveRead
    }
) {  
        let thumbnail = book && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

        const[choice, setChoice] = React.useState([
            {
                id: 1,
                check: false
            },
            {
                id: 2,
                check: false
            },
            {
                id: 3,
                check: false
            },
            {
                id: 4,
                check: false
            }

        ])


        const showCheck = function(id) {
            return (
                setChoice(function(prevState) {
                    return prevState.map(function(item){
                            return (
                                item.id == id ? {...item, check: !item.check} : item
                            )
                        })
                })
            ) 
        }

        const dontShowCheck = function() {
            return (
                setChoice(function(prevState) {
                    return(
                        prevState.map(function(item) {
                            return { ...item, check: false}
                        })
                    )
                })
            )
            
        }


        const sendToCategories = function() {
            {choice[0].check && favorite(book)};
            {choice[1].check && toRead(book)};
            {choice[2].check && readingNow(book)};
            {choice[3].check && haveRead(book)};
        }
            return (
                <>
               {showModal && (<div className = "modal">
                    <div className = "modal__content">
                        <div className = "modal__header">
                            <h1 className = "modal__title">Add to my library</h1>
                            <button className = "modal__btn" onClick = {function(){dontShowModal(); dontShowCheck();}}><i className = "fa-solid fa-xmark"></i></button>
                        </div>
                        <div className = "modal-book">
                            <img className = "modal-book__img" src = {thumbnail}></img>
                            <div className = "modal-book__info">
                                <h3 className = "modal-book__title">{book.volumeInfo.title}</h3>
                                <h5 className = "modal-book__author">{book.volumeInfo.authors} - {book.volumeInfo.publishedDate}</h5>
                                <h6 className = "modal-book__description">{book.volumeInfo.description}</h6>
                            </div>
                        </div>

                        <div className = "modal__categories">
                            <div className = "modal__category"
                                 id = "1" 
                                 onClick = {function(event) {showCheck(event.currentTarget.id);} }>
                                    {choice[0].check && <i className = "fa-solid fa-check"></i>}<span>Favorites</span>
                            </div>

                            <div className = "modal__category"
                                 id = "2"
                                 onClick = {function(event){showCheck(event.currentTarget.id)}}>
                                    {choice[1].check && <i className = "fa-solid fa-check"></i>}<span>To Read</span>
                            </div>


                            <div className = "modal__category"
                                 id = "3" 
                                 onClick = {function(event){showCheck(event.currentTarget.id)}}>
                                    {choice[2].check && <i className = "fa-solid fa-check"></i>}<span>Reading Now</span>
                            </div>

                            <div className = "modal__category"
                                 id = "4" 
                                 onClick = {function(event){showCheck(event.currentTarget.id)}}>
                                    {choice[3].check && <i className = "fa-solid fa-check"></i>}<span>Have Read</span>
                            </div>
                        </div>
                        <button className = "btn-done"
                                type = "button"
                                onClick = {function(){sendToCategories(); dontShowModal(); dontShowCheck()}}>Done</button>
                    </div>
                </div>)}
                </> 
            );
    }

export default Modal