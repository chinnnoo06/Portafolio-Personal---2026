import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "./useFormStatus";
import type { TContact } from "../types/contact.types";
import { ContactSchema } from "../schemas/contact.schemas";
import { sendContactEmail } from "../services/contact.service";
import { toast } from "react-toastify";

export const useContactForm = () => {
    const { loading, startLoading, stopLoading } = useFormStatus();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TContact>({
        resolver: zodResolver(ContactSchema)
    })

    const onSubmit = async (data: TContact) => {
        startLoading()
        try {
            await sendContactEmail(data)
            reset()
            toast.success('Mensaje enviado correctamente', {
                className: 'toast-success',
                toastId: 'emailContact',
            });
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : "Error inesperado"
            );
        } finally {
            stopLoading()
        }
    }

    return {
        loading,
        errors,
        actions: {
            register,
            handleSubmit,
            onSubmit
        }
    }
}
