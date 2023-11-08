import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { FaItalic } from 'react-icons/fa';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
            <italic>${product.price}</italic>
            <p>{product.subname}</p>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Button type='button' className='btn-block'>
          Add to Bag
        </Button>
        {/* <Card.Text as='h5'>${product.price}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};
export default Product;
