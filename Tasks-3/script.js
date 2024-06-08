function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        document.getElementById('bmi-result').textContent = bmi;
    } else {
        document.getElementById('bmi-result').textContent = 'Please enter both weight and height';
    }
}
