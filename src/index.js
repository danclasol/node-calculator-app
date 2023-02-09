import { OPERATIONS } from '#Constants/operations.js';
import { BINARY_OPERATORS } from '#Constants/operators.js';
import { InvalidInputError } from '#Errors/invalidInputError.js';
import {
	getBinaryOperatings,
	getSingleOperatings,
} from '#Lib/getOperatings.js';
import { getOperator } from '#Lib/getOperator.js';
import { promptQuestion } from '#Lib/promptQuestion.js';

(async () => {
	try {
		// 1º Capturar la entrada del usuario por consola
		const userAnswer = await promptQuestion('Introduce tu operación: ');
		console.log(userAnswer);

		// 2º Validar la entrada y separar las partes de la misma en operandos y operador
		const standarizeInput = userAnswer.trim();

		if (standarizeInput === '') throw new InvalidInputError();

		const operator = getOperator(standarizeInput);

		if (!operator) throw new InvalidInputError();

		const splittedInput = standarizeInput.split(operator);

		let firstOperating, secondOperating;

		if (BINARY_OPERATORS.includes(operator)) {
			[firstOperating, secondOperating] = getBinaryOperatings(splittedInput);
		} else {
			[firstOperating] = getSingleOperatings(splittedInput);
		}

		// 3º Realizar la operación
		const result = OPERATIONS[operator](firstOperating, secondOperating);

		const roundedResult = Number(Math.round(result + 'e+5') + 'e-5');

		// 4º Mostrar resultado por consola
		if (isNaN(roundedResult) || !isFinite(roundedResult))
			console.log('Operacion no válida');
		else console.log(roundedResult);
	} catch (error) {
		if (error instanceof InvalidInputError) console.log(error.message);
		else
			console.log(
				`Error no controlado: ${error.message}. Stack: ${error.stack}`
			);
	}
})();
