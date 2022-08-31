import { useForm } from "react-hook-form";

function CandidateIdForm({ submit }) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = submit

    return (
        <form className='pt-2 mb-2' onSubmit={handleSubmit(onSubmit)}>
            <p className="text-sm text-red-600">{errors.candidateId?.type === 'required' && "Error: Candidate Id is required"}</p>
            <p className="text-sm text-red-600">{errors.candidateId?.type === 'min' && "Error: Candidate Id must be 889 or above"}</p>
            <p className="text-sm text-red-600">{errors.candidateId?.type === 'max' && "Error: Candidate Id must be 947 or below"}</p>
            <input className='ml-2' type="number" placeholder="Candidate Id" {...register("candidateId", { required: true, min: 889, max: 947 })} />
            <input className='pt-1 pr-2 pb-1 pl-2 border-solid border-2 border-black rounded' type="submit" />
        </form>
    )

}

export default CandidateIdForm