import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


//TODO : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please, Pay to Eat" ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;