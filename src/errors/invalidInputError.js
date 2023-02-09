export const INVALID_INPUT = 'Entrada invalida';

export const INVALID_OPERATION = 'Operacion invalida';

export class InvalidInputError extends Error {
	constructor() {
		super('Entrada invalida');
	}
}
