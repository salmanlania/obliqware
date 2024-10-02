// components/CheckoutPage.js
'use client'
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import checkoutPageData from "@/data/CheckoutData";
import Select from 'react-select';

// Custom styles for react-select
const customStyles = {
    control: (provided) => ({
        ...provided,
        position: 'relative',
        height: '55px',
        outline: 'none',
        borderRadius: '0',
        border: '0',
        backgroundColor: 'var(--tolak-gray, #ecf2fc)',
        margin: '0',
        padding: '0 30px',
        color: 'var(--tolak-text, #636363)',
        fontSize: '16px',
        lineHeight: '55px',
        fontWeight: '400',
        boxShadow: 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '14px 12px',
        backgroundPosition: 'right 25.75px center',
        '&:hover': {
            border: '0' // Removes border on hover
        }
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'var(--tolak-text, #636363)',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'var(--tolak-text, #636363)',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0',
        height: '55px',
        lineHeight: '55px',

    }),
    option: (provided, state) => ({
        ...provided,
        boxShadow: 'none',
        fontSize: '16px',
        fontWeight: '400',
        padding: '15px 30px',
        color: state.isSelected ? 'var(--tolak-white, #fff)' : 'var(--tolak-text, #636363)',
        backgroundColor: state.isSelected ? 'var(--tolak-base, #3d72fc)' : 'var(--tolak-gray, #ecf2fc)',
        border: "none",
        borderTop: '1px solid var(--tolak-border-color, #dddddd)', // Adds a top border
        transition: 'all 0.4s ease',
        WebkitTransition: 'all 0.4s ease',

        '&:hover': {
            backgroundColor: 'var(--tolak-base, #3d72fc)',
            color: 'var(--tolak-white, #fff)',

        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'var(--tolak-gray, #ecf2fc)',
        borderRadius: 0,
        border: 0,
        boxShadow: 0,
        margin: 0,
        padding: 0


    }),
    input: (provided) => ({
        ...provided,
        position: "absolute",
        bottom: 0,
        pointerEvents: 'none', // Prevent interaction with the input itself
    })
};

const CheckoutPage = () => {
    const [activePayment, setActivePayment] = useState("bank");
    const [activeCheckout, setActiveCheckout] = useState(true);
    const [activeShip, setActiveShip] = useState(true);
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true);
    }, [])

    const handlePaymentToggle = (paymentType) => {
        setActivePayment(paymentType);
    };
    const {
        paymentOptions,
    } = checkoutPageData;
    if (!mounted) {
        return null
    }
    return (
        <section className="checkout-page">
            <Container>
                <div className="checkout-page__notice">Returning Customer? <a href="login">Click here to Login</a></div>
                <Row >
                    <Col xl={6} lg={6} >
                        <div className="checkout-page__billing-address">
                            <h2 className="checkout-page__billing-address__title">Billing details</h2>
                            <form className="checkout-page__form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <Select
                                                styles={customStyles}
                                                options={[


                                                    { value: 1, label: 'Canada' },
                                                    { value: 2, label: 'England' },
                                                    { value: 3, label: 'Austrilia' },

                                                ]}
                                                placeholder="Select a country"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="first_name" value="" placeholder="First name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="last_name" value="" placeholder="Last name" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="company_name" value="" placeholder="Company" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="Address" value="" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="company_name" value="" placeholder="Appartment, unit, etc. (optional)" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="Town/City" value="" placeholder="Town / City" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="State" value="" placeholder="State" required="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input name="email" type="email" placeholder="Email address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__check-box">
                                            <input onChange={() => setActiveCheckout(prev => !prev)} type="checkbox" name="skipper4" id="skipper4" checked={activeCheckout} />
                                            <label for="skipper4">Create an Account?<span></span></label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col xl={6} lg={6} >
                        <div className="checkout-page__shipping-address">
                            <h2 className="checkout-page__shipping-address__title">
                                <input onChange={() => setActiveShip(prev => !prev)} type="checkbox" name="skipper2" id="skipper3" checked={activeShip} />
                                <label for="skipper3"><span></span>Ship to a different address</label>
                            </h2>
                            <form className="checkout-page__form">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <Select
                                                styles={customStyles}
                                                options={[


                                                    { value: 1, label: 'Canada' },
                                                    { value: 2, label: 'England' },
                                                    { value: 3, label: 'Austrilia' },

                                                ]}
                                                placeholder="Select a country"
                                            />

                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="first_name" value="" placeholder="First name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="last_name" value="" placeholder="Last name" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="company_name" value="" placeholder="Company" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="Address" value="" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="company_name" value="" placeholder="Appartment, unit, etc. (optional)" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="Town/City" value="" placeholder="Town / City" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="text" name="State" value="" placeholder="State" required="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input name="form_zip" type="text" pattern="[0-9]*" placeholder="Zip code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row bs-gutter-x-20">
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input name="email" type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="checkout-page__input-box">
                                            <input type="tel" name="form_phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="" placeholder="Phone" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="checkout-page__input-box">
                                            <textarea placeholder="Notes about your order" name="form_order_notes"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <div className="checkout-page__your-order">
                    <h2 className="checkout-page__your-order__title">Your order</h2>
                    <Row >
                        <Col className="col-xl-6 col-lg-6">
                            <table className="checkout-page__order-table">
                                <thead className="order_table_head">
                                    <tr>
                                        <th>Product</th>
                                        <th className="right">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pro__title">Product Name</td>
                                        <td className="pro__price">$10.99 USD</td>
                                    </tr>
                                    <tr>
                                        <td className="pro__title">Subtotal</td>
                                        <td className="pro__price">$10.99 USD</td>
                                    </tr>
                                    <tr>
                                        <td className="pro__title">Shipping</td>
                                        <td className="pro__price">$0.00 USD</td>
                                    </tr>
                                    <tr>
                                        <td className="pro__title">Total</td>
                                        <td className="pro__price">$20.98 USD</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col className="col-lg-6">
                            <div className="checkout-page__payment">
                                {paymentOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`checkout-page__payment__item ${activePayment === option.id ? "checkout-page__payment__item--active" : ""
                                            }`}
                                        onClick={() => handlePaymentToggle(option.id)}
                                    >
                                        <h3 className="checkout-page__payment__title">{option.title}  {option.image && (
                                            <Image
                                                src={option.image}
                                                alt={option.title}

                                            />
                                        )}</h3>


                                        <div className={`${activePayment === option.id ? "active" : ""} checkout-page__payment__content`} >
                                            {option.content}
                                        </div>

                                    </div>
                                ))}

                            </div>
                            <div className="text-right d-flex justify-content-end">
                                <a href="checkout.html" className="tolak-btn">
                                    <b>Place your Order</b><span></span>
                                </a>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default CheckoutPage;
