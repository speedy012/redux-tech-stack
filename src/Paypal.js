import React from 'react'
import { PayPalButton } from "react-paypal-button-v2";

 class Paypal extends React.Component{
  render() {
    return (
      <>
      <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          console.log("details", details)
          console.log("data", data)
          alert("Thank you for your donation, " + details.payer.name.given_name + "!");

          // OPTIONAL: Call your server to save the transaction
        }}
        options={{
          clientId: "AS58C3O_qijjOKTZieWaxEZtUc-lgLviQWGE64tCWY7XAUzoAZq6rAh7DWOevEM9wL_vC2UIRXAioUDl"
        }}
      />
      </>
    );
  }
}

export default Paypal
