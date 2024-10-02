import paypal from '@/assets/images/products/paypal-1.jpg'
const checkoutData = {
    notice: {
        text: "Returning Customer?",
        href: "/login",
        linkText: "Click here to Login",
    },
    billingDetails: {
        title: "Billing details",
        formFields: [
            { type: "select", name: "country", options: ["Select a country", "Canada", "England", "Australia"] },
            { type: "text", name: "first_name", placeholder: "First name", required: true },
            { type: "text", name: "last_name", placeholder: "Last name", required: true },
            { type: "text", name: "company_name", placeholder: "Company" },
            { type: "text", name: "address", placeholder: "Address" },
            { type: "text", name: "apartment", placeholder: "Apartment, unit, etc. (optional)" },
            { type: "text", name: "city", placeholder: "Town / City", required: true },
            { type: "text", name: "state", placeholder: "State", required: true },
            { type: "text", name: "zip", placeholder: "Zip code", pattern: "[0-9]*" },
            { type: "email", name: "email", placeholder: "Email address" },
            { type: "tel", name: "phone", placeholder: "Phone", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", required: true },
            { type: "checkbox", name: "create_account", label: "Create an Account?", checked: true },
        ],
    },
    shippingDetails: {
        title: "Ship to a different address",
        checkbox: { name: "ship_to_different_address", checked: true },
        formFields: [
            { type: "select", name: "country", options: ["Select a country", "Canada", "England", "Australia"] },
            { type: "text", name: "first_name", placeholder: "First name", required: true },
            { type: "text", name: "last_name", placeholder: "Last name", required: true },
            { type: "text", name: "company_name", placeholder: "Company" },
            { type: "text", name: "address", placeholder: "Address" },
            { type: "text", name: "apartment", placeholder: "Apartment, unit, etc. (optional)" },
            { type: "text", name: "city", placeholder: "Town / City", required: true },
            { type: "text", name: "state", placeholder: "State", required: true },
            { type: "text", name: "zip", placeholder: "Zip code", pattern: "[0-9]*" },
            { type: "email", name: "email", placeholder: "Email address" },
            { type: "tel", name: "phone", placeholder: "Phone", pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", required: true },
            { type: "textarea", name: "order_notes", placeholder: "Notes about your order" },
        ],
    },
    orderSummary: {
        title: "Your order",
        items: [
            { name: "Product Name", price: "$10.99 USD" },
        ],
        summary: [
            { label: "Subtotal", value: "$10.99 USD" },
            { label: "Shipping", value: "$0.00 USD" },
            { label: "Total", value: "$20.98 USD" },
        ],
    },
    paymentOptions: [
        { id: 'bank', title: "Direct bank transfer", content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared." },
        { id: "paypal", title: "Paypal payment", image: paypal, content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared." },
    ],
    placeOrder: {
        href: "/checkout",
        buttonText: "Place your Order",
    },
};

export default checkoutData;
