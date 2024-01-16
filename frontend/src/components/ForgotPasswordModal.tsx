import { Text } from "./Text";
import { Input } from "./Input";
import { useState } from "react";

type ForgotPasswordModalProps = {
    onHide: () => void;
}

const ForgotPasswordModal = (props: ForgotPasswordModalProps) => {

    const [email, setEmail] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!email) return;
        console.log(email);
        props.onHide();
        //send reset link to email
    }

    return (
        <div className="bg-gray-200_01 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center mb-[588px] md:mt-0 mt-10 md:px-5 px-[50px] py-5 rounded-[10px] w-auto sm:w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start py-5 w-auto sm:w-full">
                <Text size="txtMontserratRomanSemiBold18">
                    Forgot your password?
                </Text>
                <Text
                    className="max-w-[315px] md:max-w-full text-black-900 text-center text-sm"
                    size="txtMontserratRomanMedium14"
                >
                    Enter your email below and a reset password link will be sent to your inbox
                </Text>
                <form
                    className="flex flex-col gap-2.5 items-center justify-start w-full"
                    onSubmit={handleSubmit}
                >

                    <Input
                        label="Email"
                        onChange={(e: string) => setEmail(e)}
                        placeholder="email"
                        className="w-full"
                        wrapClassName="flex h-[50px] w-full"
                    ></Input>

                    <button
                        className="font-medium w-1/2 min-w-[83px] py-3 text-center text-sm rounded-[10px] bg-blue_gray-700 text-white-A700 p-[5px]"
                        type="submit"
                    >Send reset link</button>

                </form>
            </div>
        </div>
    )
}

export default ForgotPasswordModal