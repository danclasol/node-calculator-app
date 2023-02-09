import { main } from '#Lib/main.js';
import { closeInterface } from '#Lib/promptQuestion.js';

const app = async () => {
	let stop = false;

	while (!stop) {
		const flag = await main();
		stop = flag;
	}

	closeInterface();
};

app();
