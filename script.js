function calculateCGPA() {

    let s1 = parseFloat(document.getElementById("s1").value) || 0;
    let s2 = parseFloat(document.getElementById("s2").value) || 0;
    let s3 = parseFloat(document.getElementById("s3").value) || 0;
    let s4 = parseFloat(document.getElementById("s4").value) || 0;
    let s5 = parseFloat(document.getElementById("s5").value) || 0;

    let cgpa = (s1 + s2 + s3 + s4 + s5) / 5;

    document.getElementById("result").innerHTML =
        "Your CGPA is: " + cgpa.toFixed(2);
}
