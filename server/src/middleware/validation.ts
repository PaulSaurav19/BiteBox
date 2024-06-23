import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";


const handleValidationErrors = async(req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); // 400 -> bad request 
        }
        next();      
};

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("contactNumber").isString().notEmpty().withMessage("Contact Number must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    body("state").isString().notEmpty().withMessage("State must be a string"),
    body("pincode").isString().notEmpty().withMessage("Pincode must be a string"),
    handleValidationErrors,
];