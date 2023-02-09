import { InvalidInputError } from '#Errors/invalidInputError.js';

export const getBinaryOperatings = ([leftSide, rightSide]) => {
	if (!leftSide || !rightSide) throw new InvalidInputError();

	const firstOperating = Number(leftSide.replaceAll(',', '.'));
	const secondeOperating = Number(rightSide.replaceAll(',', '.'));

	if (isNaN(firstOperating) || !isFinite(firstOperating))
		throw new InvalidInputError();

	if (isNaN(secondeOperating) || !isFinite(secondeOperating))
		throw new InvalidInputError();

	return [firstOperating, secondeOperating];
};

export const getSingleOperatings = ([leftSide, rightSide]) => {
	if (leftSide || !rightSide) throw new InvalidInputError();

	if (!rightSide.startsWith('(') && !rightSide.endsWith(')'))
		throw new InvalidInputError();

	let firstOperating = rightSide.slice(1, -1);
	firstOperating = Number(firstOperating.replaceAll(',', '.'));

	return [firstOperating];
};
