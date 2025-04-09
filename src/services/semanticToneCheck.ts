export const checkIfHarshSemantically = async (
  input: string,
): Promise<boolean> => {
  try {
    const response = await fetch(
      "https://531f4aa2-444d-4e97-b6f8-954024275ddd-00-15028nztgal8d.spock.replit.dev:3000/check-harsh",
      {
        // Update to your Replit URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to check tone");
    }

    const data = await response.json();
    return data.harsh;
  } catch (error) {
    console.error("Error checking harsh tone:", error);
    return false;
  }
};
