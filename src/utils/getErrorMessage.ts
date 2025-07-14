import { AxiosError } from "axios"

/**
 * Takes an AxiosError and returns a readable error message.
 * @param error the AxiosError
 * @returns the error message
 */
function getErrorMessage(error: AxiosError): string {
	let returnMessage = ""
	if (error.response && error.response.data && error.response.data.message) {
		returnMessage = ` (${error.response.data.message})`
	}

	return error.message + returnMessage
}

export { getErrorMessage }
