import Button from "./Button"
import Input from "./Input"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react";
import Toast from "./Toast";

// step 1: create zod schema
const reviewSchema = z.object({
    name: z.string().min(2, "Name too short"),
    comment: z.string().min(5, "Comment too short"),
    rating: z.number({
        invalid_type_error: 'Vui long nhap so'
    }).min(1).max(5)
})

// step 2: create type form zod schema
type ReviewFormData = z.infer<typeof reviewSchema>
function ReviewForm() {
    const [mockSuccess, setMockSuccess] = useState(false);
    const [toast, setToast] = useState({
        type: 'success',
        message: 'Submit successfully',
        isShow: false
    });

    // step 3: init react-hook-form with zod resolver
    const form = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        reValidateMode: 'onSubmit',
        defaultValues: {
            name: '',
            comment: '',
            rating: 1
        }
    })

    useEffect(() => {
        if (toast.isShow) {
            const timer = setTimeout(() => setToast({
                ...toast,
                isShow: false
            }), 3000)
            return () => clearTimeout(timer)
        }
    }, [toast])

    const onSubmit = (data: any) => {
        if (mockSuccess) {
            setToast({
                type: 'success',
                message: 'Submit successfully',
                isShow: true
            })
        } else {
            setToast({
                type: 'danger',
                message: 'Submit unsuccessfully',
                isShow: true
            })
        }
        console.log(data)
        // console.log(formState.errors)
    }
    // console.log(formState.errors)
    return <div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Input type="text" id="name" label="Name" {...form.register('name')} error={form.formState.errors.name && form.formState.errors.name.message} />
            <Input type="text" id="comment" label="Comment" {...form.register('comment')} error={form.formState.errors.comment && form.formState.errors.comment.message} />
            <Input type="number" id="rating" label="Rating" {...form.register('rating')} error={form.formState.errors.rating && form.formState.errors.rating.message} />
            <Button className="mt-3 bg-black text-white mb-5">Submit</Button>
        </form>
        {
            toast.isShow && <Toast message={toast.message} type={toast.type as 'danger' | 'success'} />
        }
    </div>
}

export default ReviewForm