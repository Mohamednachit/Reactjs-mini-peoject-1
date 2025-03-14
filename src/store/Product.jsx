import Rating from "./Rating";
import "./Product.css"; // Ajoutez cette ligne

export default function Product({product}) {
    return (
        <tr>
            <td data-label="ID">{product.id}</td>
            <td data-label="Title">{product.title}</td>
            <td data-label="Price">{product.price} $</td>
            <td data-label="Description">{product.description.slice(0,100)}...</td>
            <td data-label="Category">
                <span className="badge bg-dark">{product.category}</span>
            </td>
            <td data-label="Image">
                <img src={product.image} alt={product.title}/>
            </td>
            <td data-label="Rating">
                <Rating rate={product.rating.rate} count={product.rating.count} /> 
            </td>
        </tr>
    )
}