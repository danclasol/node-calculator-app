import { OPERATIONS } from '#Constants/operations.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import { extractByRegex } from './lib/extractByRegex.js';
import { promptQuestion } from './lib/promptQuestion.js';

export const main = async () => {
	try {
		// 1º Capturar la entrada del usuario por consola
		const userAnswer = await promptQuestion('Introduce tu operación: ');

		// 2º Validar la entrada y separar las partes de la misma en operandos y operador
		const standarizeInput = userAnswer.trim().replace(',', '.');

		if (!standarizeInput) throw new InvalidInputError();

		if (standarizeInput === 'exit') {
			return true;
		}

		const [firstOperating, operator, secondOperating] =
			extractByRegex(standarizeInput);

		// 3º Realizar la operación
		const result = OPERATIONS[operator](firstOperating, secondOperating);

		const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

		// 4º Mostrar resultado por consola
		if (isNaN(roundedResult) || !isFinite(roundedResult))
			console.log('Operacion no válida\n');
		else console.log(roundedResult);
	} catch (error) {
		if (error instanceof InvalidInputError) console.log(`${error.message}\n`);
		else
			console.log(
				`Error no controlado: ${error.message}. Stack: ${error.stack}\n`
			);
	}
};
