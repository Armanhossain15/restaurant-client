import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {
    const [error, setError]= useState()
    const stripe = useStripe()
    const elements = useElements()
    const hundleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })
        if(error){
            console.log("payment error", error);
            setError(error?.message)
        }
        if(paymentMethod){
            console.log("payment method", paymentMethod);
            setError('')
        }
    }
    return (
        <>
        <form onSubmit={hundleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        <p className="text-xl text-red-500">{error}</p>
        </>
    );
};

export default CheckoutForm;