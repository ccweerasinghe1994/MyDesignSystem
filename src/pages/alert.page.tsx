import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "../components/alerts/alert";
import { Button } from "../components/alerts/button";
import { useState } from "react";

function AlertPageExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Refund payment
      </Button>
      <Alert open={isOpen} onClose={setIsOpen}>
        <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
        <AlertDescription>
          The refund will be reflected in the customer’s bank account 2 to 3
          business days after processing.
        </AlertDescription>
        <AlertActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Refund</Button>
        </AlertActions>
      </Alert>
    </>
  );
}

export default AlertPageExample;
