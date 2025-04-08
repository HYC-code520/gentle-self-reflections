export const checkIfHarshSemantically = async (
  input: string,
): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3001/check-harsh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error('Failed to check tone');
    }

    const data = await response.json();
    return data.harsh;
  } catch (error) {
    console.error('Error checking harsh tone:', error);
    return false;
  }
};
