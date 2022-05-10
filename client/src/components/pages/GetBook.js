import {  useEffect } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { getBook} from '../../redux/books/bookActions';
import {booksFeatureKey} from '../../redux/books/bookReducer'
import {Link,useParams} from 'react-router-dom'


const GetBook = () => {
    let dispatch = useDispatch();
    let bookId = useParams().id;
    let bookInfo = useSelector((state)=>{
      return state[booksFeatureKey];
  
    })
    
    let {book} = bookInfo;
    useEffect(() => {
        dispatch(getBook(bookId))
    }, [bookId])



return(
    <div className="container">
    
    <div className="row">
      <div className="col">
      <h1 className="text-center text-dark">Book Details</h1>
                <div className="card m-3 p-2" key={book._id}>
                  <div className="card-header bg-danger text-white text-uppercase fw-bold">{book.title}</div>
                  <div className="card-body">
                    <h5 className="card-title text-dark"><span className="fw-bold text-dark">About:</span>  {book.subTitle}</h5>
                     <p className="card-text"><span className="fw-bold">ISBN: </span>
                       {book.isbn}
                    </p>
                    <p className="card-text"><span className="fw-bold text-dark">Author: </span>
                       {book.author}
                    </p>
                    <p className="card-text">
                    <span className="fw-bold text-dark">Description: </span>
                      {book.description}
                    </p>
                    <p className="card-text">
                    <span className="fw-bold text-dark">Publisher: </span>
                       {book.publisher}
                    </p>
                    <p className="card-text">
                    <span className="fw-bold text-dark">Published On: </span>
                       {book.publishDate}
                    </p>
                    <p>
                    <span className="fw-bold text-dark">Pages: </span>
                       {book.pages}
                    </p>
                    <p>
                    <span className="fw-bold text-dark">Price: </span>
                       {book.price}
                    </p>
                    <Link to='/getbooks' className="btn btn-primary">
                      OK
                    </Link>
                  </div>
                </div>
              
            
          
    </div>
      </div>
    </div>
  
  );
  };
  
  
  export default GetBook;