document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const id = document.getElementById("studentId").value.trim();
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const form = document.getElementById("formLevel").value;

    // Validation
    if (!name || !id || !gender || !age || !form) {
        alert("All fields are required!");
        return;
    }

    // Check unique ID
    if (students.some(student => student.id === id)) {
        alert("Student ID must be unique!");
        return;
    }

    const student = {
        id,
        name,
        age: parseInt(age),
        gender,
        form: parseInt(form),
        performance: []
    };

    students.push(student);
    displayStudents();
    this.reset();
});