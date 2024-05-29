const ButtonDelete = ({ email }) => {
	const handleDelete = async (email) => {
		await fetch("/api/delete", {
			method: "POST",
			body: JSON.stringify({ email }),
		});
	};

	return (
		<button
			onClick={() => {
				handleDelete(email);
			}}
		>
			Eliminar Dato
		</button>
	);
};

export default ButtonDelete;
