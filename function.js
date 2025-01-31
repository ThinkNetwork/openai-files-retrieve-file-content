window.function = async function(api_key, file_id) {
    // Validate API Key
    if (!api_key.value) {
        return "Error: OpenAI API Key is required.";
    }

    // Validate File ID
    if (!file_id.value) {
        return "Error: File ID is required.";
    }

    // API endpoint URL
    const apiUrl = `https://api.openai.com/v1/files/${file_id.value}/content`;

    // Make API request
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${api_key.value}`
            }
        });

        if (!response.ok) {
            return `Error ${response.status}: ${response.statusText}`;
        }

        // Read and return the file content as text
        const fileContent = await response.text();
        return fileContent;

    } catch (error) {
        return `Error: Request failed - ${error.message}`;
    }
};
