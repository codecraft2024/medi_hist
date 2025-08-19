export async function loginUser(email: string, password: string): Promise<{ success: boolean; token?: string; error?: string }> {
    try {
        const response = await fetch('http://localhost:8080/v1/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password }), // backend expects 'username'
            credentials: 'include',
        });

        if (!response.ok) {
            const errorText = await response.text();
            return { success: false, error: errorText || 'Invalid credentials' };
        }

        // Backend returns plain text on success
        const data = await response.text();
        return { success: true, token: data };
    } catch (error) {
        return { success: false, error: 'Network error' };
    }
}
