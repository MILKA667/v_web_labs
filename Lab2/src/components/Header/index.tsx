import { useState, useContext, type ChangeEvent } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import { data } from '../../data';
import { LikedContext } from "../../contexts/LikedContext";
import type { Product } from "../../contexts/CartContext";

export default function Header() {
    const [query, setQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const likedContext = useContext(LikedContext);
    if (!likedContext) {
        throw new Error("Header must be used within LikedProvider");
    }
    const { addToLiked } = likedContext;

    const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);
        setShowDropdown(value.length > 0);
    }

    return (
        <header>
            <nav>
                <ul>
                    <li className="nav_left">
                        <Link to="/">
                            <button>
                                <img src="/home.svg" alt="Home" width="24" height="24" />
                            </button>
                        </Link>
                    </li>

                    <li className="nav_center" style={{ position: "relative" }}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Поиск..."
                            value={query}
                            onChange={handleChange}
                        />

                        {showDropdown && (
                            <div className="dropdown">
                                {filtered.length > 0 ? (
                                    filtered.map(item => {
                                        const product: Product = {
                                            id: item.id,
                                            title: item.name,
                                            price: item.price,
                                        };

                                        return (
                                            <div
                                                key={product.id}
                                                className="dropdown-item"
                                                onClick={() => {
                                                    addToLiked(product);
                                                    alert('Добавили в лайки!');
                                                    setQuery("");
                                                    setShowDropdown(false);
                                                }}
                                            >
                                                {product.title} — {product.price}₽
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="dropdown-item">Ничего не найдено</div>
                                )}
                            </div>
                        )}
                    </li>

                    <li className="nav_right">
                        <Link to="/liked">
                            <button>
                                <img src="/heart.svg" alt="Favorites" width="24" height="24" />
                            </button>
                        </Link>
                    </li>

                    <li className="nav_right">
                        <Link to="/cart">
                            <button>
                                <img src="/cart.svg" alt="Cart" width="24" height="24" />
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
