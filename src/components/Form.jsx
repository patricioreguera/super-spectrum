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
			<form className="max-w-sm mx-auto" onSubmit={handleForm}>
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Your email
					</label>
					<input
						type="text"
						id="text"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						placeholder="username"
						value={formValues.username}
						onChange={(e) =>
							setFormValues({ ...formValues, username: e.target.value })
						}
					/>
				</div>
				<div className="mb-5">
					<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Your password
					</label>
					<input
						type="text"
						id="password"
						placeholder="password"
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
						required
						value={formValues.email}
						onChange={(e) =>
							setFormValues({ ...formValues, email: e.target.value })
						}
					/>
				</div>

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Register new account
				</button>

				<button
					type="submit"
					className="ml-5 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					onClick={() => setFormValues(initialValues)}
				>
					Delete form
				</button>
			</form>
		</div>
	);
};

export default Form;
