function App() {
    const [results, setResults] = React.useState(null);

    const handleCalculate = (newResults) => {
        try {
            setResults(newResults);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="app-container" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h1 data-name="app-title" className="text-3xl font-bold text-center text-gray-900 mb-8">
                    6-Digit Lottery Calculator
                </h1>
                <Calculator onCalculate={handleCalculate} />
                <ResultDisplay results={results} />
            </div>
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
