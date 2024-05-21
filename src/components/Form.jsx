import { useState } from "react";

const initialValues = {
	username: "",
	email: "",
};

const Form = () => {
	const [formValues, setFormValues] = useState(initialValues);

	const handleForm = async (e) => {
		e.preventDefault();
		const { username, email } = formValues;

		if (typeof username === "string" && typeof email === "string") {
			try {
				const response = await fetch("/api/insert-user", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username, email }),
				});

				if (!response.ok) {
					throw new Error("Error en la inserción de usuario");
				}

				const result = await response.json();
			} catch (error) {
				console.error("Error:", error.message);
			}
		} else {
			console.error("Invalid data format");
		}
		setFormValues(initialValues);
	};

	return (
		<div>
			<form
				className="flex flex-col gap-2 text-slate-900"
				onSubmit={handleForm}
			>
				<input
					type="text"
					placeholder="Username"
					className="text-slate-900"
					value={formValues.username}
					onChange={(e) =>
						setFormValues({ ...formValues, username: e.target.value })
					}
				/>
				<input
					className="text-slate-900"
					type="text"
					placeholder="Email"
					value={formValues.email}
					onChange={(e) =>
						setFormValues({ ...formValues, email: e.target.value })
					}
				/>
				<button type="submit" className="bg-blue-600 px-2 py-1 ml-2">
					Enviar
				</button>
				<button
					type="button"
					className="bg-red-700 px-2 py-1 ml-2"
					onClick={() => setFormValues(initialValues)}
				>
					Borrar
				</button>
			</form>
		</div>
	);
};

export default Form;
