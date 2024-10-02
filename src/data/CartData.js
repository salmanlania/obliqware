
import cartImage1 from "@/assets/images/products/cart-1-1.jpg";
import cartImage2 from "@/assets/images/products/cart-1-2.jpg";

const cartItems = [
    {
        id: 1,
        image: cartImage1,
        title: "Office Chair",
        price: 10.99,
        quantity: 1,
        total: 10.99,
    },
    {
        id: 2,
        image: cartImage2,
        title: "Round Chair",
        price: 10.99,
        quantity: 1,
        total: 10.99,
    },
];

const couponSection = {
    placeholder: "Enter coupon code",
};

const totalSection = {
    subtotal: 20.98,
    shipping: 0.0,
    total: 20.98,
};

export { cartItems, couponSection, totalSection };
