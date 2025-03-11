import { useState, type ChangeEvent, type ReactElement } from "react";

// interface IInputProps {
//     value: string;
//     onChange: (value: string) => void;
// }

// const Input = ({ value, onChange }: IInputProps) => {
//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         onChange(event.target.value);
//     };

//     return (
//         <div className="input-container">
//             <input type="text" value={value} onChange={handleChange} />
//         </div>
//     );
// };

const NotFoundPage = (): ReactElement => {
    
    // const InputWrapper = () => {
    //     const [value, setValue] = useState<string>("1234");

    //     return <Input value={value} onChange={setValue} />;
    // };

    return (
        <div className="not-found-page">
            <div className="wrapper">
                <div className="content">
                    <h1>Caputta (spanish: go fuck yourself)</h1>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
