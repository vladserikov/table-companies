import { useState } from 'react';

type EditingElementProps = {
	value: string;
	onUpdate: (value: string) => void;
};

export const EditingElement: React.FC<EditingElementProps> = ({
	value,
	onUpdate,
}) => {
	const [name, setName] = useState(value);
	return (
		<>
			<input
				type='text'
				value={name}
				placeholder='Name'
				onChange={(e) => setName(e.target.value)}
				onBlur={() => onUpdate(name)}
			/>
		</>
	);
};

