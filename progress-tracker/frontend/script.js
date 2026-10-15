const form = document.getElementById("form");


form.addEventListener("submit", async (e) => {

e.preventDefault();

const name =
    document.getElementById("name").value;

const course =
    document.getElementById("course").value;

const complete =
    Number(
        document.getElementById("complete").value
    );


try {

    const response = await fetch(
        "https://progress-tracker-backend-3jes.onrender.com/tracker",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                course: course,
                complete: complete
            })
        }
    );


    const data = await response.json();


    document.getElementById("result").textContent =
        data.message;


    if (data.success) {

        form.reset();

    }


} catch (error) {

    console.log(error);

    document.getElementById("result").textContent =
        "Something went wrong";

}

});