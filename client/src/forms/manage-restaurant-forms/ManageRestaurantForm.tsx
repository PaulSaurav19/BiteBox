import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import ImageSection from "./ImageSection";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "restaurant name is required",
    }).min(1),
    address: z.string({
        required_error: "address is required",
    }),
    city: z.string({
        required_error: "city is required",
    }).min(1),
    state: z.string({
        required_error: "state is required",
    }).min(1),
    country: z.string({
        required_error: "country is required",
    }).min(1),
    pincode: z.string({
        required_error: "pincode is required",
    }).min(5),
    phoneNumber: z.string({
        required_error: "phone Number is required",
    }).min(10),
    deliveryPrice: z.coerce.number({
        required_error: "deliveryPrice is required",
        invalid_type_error: "must be a valid number",
    }).positive("delivery price must be a positive number"),

    estimatedDeliveryTime: z.coerce.number({
        required_error: "estimated delivery time is required",
        invalid_type_error: "must be a valid number",
    }).positive("delivery price must be a positive number"),

    cuisines: z.array(z.string()).nonempty({
        message: "please select at least one item",
    }),

    // operatingHours: z.object({
    //     openingTime: z.string({
    //         required_error: "opening time is required",
    //     }).min(1, "opening time is required"),
    //     closingTime: z.string({
    //         required_error: "closing time is required",
    //     }).min(1, "closing time is required"),
    // }),

    // status: z.enum(['Open', 'Closed'], {
    //     required_error: "status is required",
    // }).default('Open'),

    menuItems: z.array(z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required"),
    })),

    imageFile: z.instanceof(File, { message: 'Restaurant image is required' }),

})

type restaurantFormData = z.infer<typeof formSchema>

type Props = {
  OnSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({OnSave, isLoading}: Props) => {
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    cuisines: [],
    menuItems: [{name: "", price: 0,}]
    },
});

    const onSubmit = (formDataJson: restaurantFormData) => {
        // we have to convert formDataJson to formDataobject

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection/>
                <Separator/> 
                <CuisinesSection/>
                <Separator/> 
                <MenuSection/>
                <Separator/> 
                <ImageSection/>
                {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )

};

export default ManageRestaurantForm;