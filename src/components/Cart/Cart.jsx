'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { cartItems as initialCartItems, couponSection, totalSection } from "@/data/CartData";

const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleIncreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
                    : item
            )
        );
    };

    const handleDecreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
                    : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.total, 0).toFixed(2);
    };

    return (
        <section className="cart-page">
            <Container>
                <div className="table-responsive">
                    <table className="table cart-page__table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="cart-page__table__meta">
                                            <div className="cart-page__table__meta-img">
                                                <Image src={item.image} alt={item.title} width={80} height={80} />
                                            </div>
                                            <h3 className="cart-page__table__meta-title">
                                                <Link href="/product-details">{item.title}</Link>
                                            </h3>
                                        </div>
                                    </td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <div className="product-details__quantity">
                                            <div className="quantity-box">
                                                <button
                                                    type="button"
                                                    className="sub"
                                                    onClick={() => handleDecreaseQuantity(item.id)}
                                                >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                <input type="text" value={item.quantity} readOnly />
                                                <button
                                                    type="button"
                                                    className="add"
                                                    onClick={() => handleIncreaseQuantity(item.id)}
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>${item.total.toFixed(2)}</td>
                                    <td>
                                        <Link href="/cart" className="table cart-page__table__remove">
                                            <span className="icon-close"></span>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Row>
                    <Col xl={8} lg={7}>
                        <form action="#" className="cart-page__coupone-form">
                            <input
                                type="text"
                                placeholder={couponSection.placeholder}
                                className="cart-coupon__input"
                            />
                            <button type="submit" className="tolak-btn tolak-btn--base">
                                <b>Apply Coupon</b>
                                <span></span>
                            </button>
                        </form>
                    </Col>
                    <Col xl={4} lg={5}>
                        <ul className="cart-page__cart-total list-unstyled">
                            <li>
                                <span>Subtotal</span>
                                <span className="cart-page__cart-total-amount">
                                    ${calculateTotal()} USD
                                </span>
                            </li>
                            <li>
                                <span>Shipping Cost</span>
                                <span className="cart-page__cart-total-amount">
                                    ${totalSection.shipping.toFixed(2)} USD
                                </span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span className="cart-page__cart-total-amount">
                                    ${calculateTotal()} USD
                                </span>
                            </li>
                        </ul>
                        <div className="cart-page__buttons">
                            <Link href="/cart" className="tolak-btn">
                                <b>Update</b>
                                <span></span>
                            </Link>
                            <Link href="/checkout" className="tolak-btn">
                                <b>Checkout</b>
                                <span></span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CartPage;
