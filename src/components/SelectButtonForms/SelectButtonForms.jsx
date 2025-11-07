import Select from "react-select";
import { measurements } from "../../../public/constants";
import { useState } from "react";

export const SelectButtonForms = () => {

    const [selectedOption, setSelectedOption] = useState(null);

const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(selectedOption);
};

    return (
        <div>
            <Select 
            value={selectedOption}
            options={measurements}
            placeholder="Unidad de medida"
            onChange={handleSelectChange}
            />
        </div>
    )
};

export default SelectButtonForms;