import { closeInterface } from '#Lib/promptQuestion.js';
import { main } from './main.js';

const app = async () => {
	let stop = false;

	while (!stop) {
		const flag = await main();
		stop = flag;
	}

	closeInterface();
};

app();
