document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://czfghywpmezemmtfdiyw.supabase.co/rest/v1/example_table', {
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmdoeXdwbWV6ZW1tdGZkaXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjU4ODcsImV4cCI6MjA1Mjk0MTg4N30.KYxp-j3NFHvlxyRzFjq6HmT4Q_s12fRriYzCsmfRQYg',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmdoeXdwbWV6ZW1tdGZkaXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjU4ODcsImV4cCI6MjA1Mjk0MTg4N30.KYxp-j3NFHvlxyRzFjq6HmT4Q_s12fRriYzCsmfRQYg'
        }
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
