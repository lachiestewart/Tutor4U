import { Text } from "./Text";
import { Input } from "./Input";
import { useState } from "react";

interface SignUpForm {
    fname: string;
    lname: string;
    email: string;
    password: string;
};

type SignUpModalProps = {
    onHide: () => void;
}

const SignUpModal = (props: SignUpModalProps) => {

    const [messageForm, setMessageForm] = useState<SignUpForm>({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const handleChange = (field: keyof SignUpForm, value: string) => {
        /** Updates the state of messageForm when a change is made to an input */
        setMessageForm(prevState => ({ ...prevState, [field]: value }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        /** Handles validation and updating the form */
        e.preventDefault();
        const validForm: boolean = Object.keys(messageForm).map((key: string) => messageForm[key]).every(str => str !== "");
        if (!validForm) return;
        console.log("messageForm", messageForm);
        props.onHide();
        //send user info to backend and close modal
    }


    return (
        <div className="bg-gray-200_01 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center md:mt-0 mt-[54px] md:px-5 px-[50px] py-5 rounded-[10px] w-auto sm:w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto sm:w-full">
                <Text
                    className="max-w-[264px] md:max-w-full text-black-900 text-center text-lg"
                    size="txtMontserratRomanSemiBold18"
                >
                    Awesome to hear you want to become a Tutor!
                </Text>
                <Text
                    className="max-w-[315px] md:max-w-full text-black-900 text-center text-sm"
                    size="txtMontserratRomanMedium14"
                >
                    Put in your details below to get access to the tutor portal
                </Text>

                <form
                    className="flex flex-col gap-2.5 items-center justify-start w-full"
                    onSubmit={handleSubmit}
                >

                    <Input
                        label="First Name"
                        onChange={e => handleChange('fname', e)}
                        placeholder="first name"
                        className="w-full"
                        wrapClassName="flex h-[50px] w-full"
                    ></Input>

                    <Input
                        label="Last Name"
                        onChange={e => handleChange('lname', e)}
                        placeholder="last name"
                        className="w-full"
                        wrapClassName="flex h-[50px] w-full"
                    ></Input>

                    <Input
                        label="Email"
                        onChange={e => handleChange('email', e)}
                        placeholder="email address"
                        className="w-full"
                        wrapClassName="flex h-[50px] w-full"
                    ></Input>

                    <Input
                        label="Password"
                        onChange={e => handleChange('password', e)}
                        placeholder="password"
                        className="w-full"
                        wrapClassName="flex h-[50px] w-full"
                    ></Input>

                    <button
                        className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue_gray-700 text-white-A700 p-[5px]"
                        type="submit"
                    >Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default SignUpModal