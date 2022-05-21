enum QuestionStatus {
	StatusPublished = 'published',
	StatusDraft = 'draft',
	StatusDeleted = 'deleted'
}

async function getFlags(req: {
	topicId: number,
	status: QuestionStatus;
}): Promise<{
	question: string;
	answer: string;
	tags: string[];
	likes: number;
	status: QuestionStatus;
}[]> {
	const res = await fetch('/flags', {
		method: 'POST',
		body: JSON.stringify(req)
	});

	const data = await res.json();
	return data;
}


